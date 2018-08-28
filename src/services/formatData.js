class FormatData {
  seekInfo(info, number) {
    return info.filter((i) => i.Level === number);
  }

  book(info) {
    return this.seekInfo(info, 2);
  }

  unit(info) {
    return this.seekInfo(info, 4);
  }

  lesson(info) {
    return this.seekInfo(info, 8);
  }

  setArray(info) {
    const array = new Set();
    info.forEach((item) => {
      array.add(item.StudentId);
    });
    return array;
  }

  activity(info) {
    return this.seekInfo(info, 16);
  }

  parseActivity(info, activitys) {
    const activityInfo = this.activity(info);
    const result = [];

    activityInfo.forEach((item, idx) => {
      let belongActivity;
      activitys.some((activity) => {
        const match = item.ActivityKeys[0] === activity.Key;
        if (match) belongActivity = activity;
        return match;
      });
      if (!belongActivity) return;

      result.push({
        activityKey: belongActivity.Key,
        questions: [],
        lessonKey: item.ParentNodeKey,
        Sequence: item.Sequence,
      });

      belongActivity.Questions.forEach((ques, qIdx) => {
        const answers = ques.Body.answers;
        result[idx].questions[qIdx] = {
          questionKey: ques.Key,
          TotalScore: answers ? answers.length : 0,
          score: 0,
        };
      });
    });
    return result;
  }

  parserLesson(info, answer, activitys) {
    const result = [];
    const lessonInfo = this.lesson(info);
    const activityInfo = this.parseActivity(info, activitys.Activities);
    const questionInfo = answer;

    lessonInfo.forEach((lesson) => {
      result.push({
        Sequence: lesson.Sequence,
        ParentNodeKey: lesson.ParentNodeKey,
        lessonKey: lesson.Key,
        activitys: [],
      });
    });
    // generate activity level model
    activityInfo.forEach((activity) => {
      let belongLesson;
      result.some((lesson, lIdx) => {
        const match = lesson.lessonKey === activity.lessonKey;
        if (match) belongLesson = result[lIdx];
        return match;
      });

      belongLesson.activitys.push({
        activityKey: activity.activityKey,
        questions: activity.questions, //activity.questions
      });
    });
    // generate question level model
    questionInfo.forEach((question) => {
      let belongActivity;
      result.some((lesson, lIdx) =>
        lesson.activitys.some((activity, aIdx) => {
          const match = activity.activityKey === question.ActivityKey;
          if (match) {
            belongActivity = result[lIdx].activitys[aIdx];
          }
          return match;
        }),
      );

      if (!belongActivity) return;
      // loop answers
      question.Answers.forEach((answer) => {
        const questionKey = answer.QuestionKey;

        belongActivity.questions.some((ques, qIdx) => {
          const matched = questionKey === ques.questionKey;
          if (matched) {
            ques = {
              ...ques,
              correctNum: 0,
              totalNum: 0,
              studentsAnswer: [],
            };

            ques.totalNum++;
            if (answer.Score === answer.TotalScore) {
              ques.correctNum++;
            }

            ques.studentsAnswer.push({
              studentId: question.StudentId,
              score: answer.Score,
              TotalScore: answer.TotalScore,
            });

            belongActivity.questions[qIdx] = ques;
          }
          return matched;
        });

        console.log(belongActivity);
      });
    });
    return result;
  }

  parserAnswer(info) {
    const result = [];
    const studentsId = this.setArray(info);

    studentsId.forEach((id) => {
      result.push({
        studentId: id,
        activitys: [],
      });
    });

    info.forEach((answer) => {
      let belongStudent;
      result.some((item, index) => {
        const match = item.studentId === answer.StudentId;
        if (match) belongStudent = result[index];
        return match;
      });
      belongStudent.activitys.push(answer);
    });

    return result;
  }
}

export default new FormatData();
