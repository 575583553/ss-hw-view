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
    const activityInfo = this.parseActivity(info, activitys);
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

      if (!belongLesson) return;

      belongLesson.activitys.push({
        activityKey: activity.activityKey,
        Sequence: activity.Sequence,
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
            if (!ques.studentsAnswer) {
              ques = {
                ...ques,
                correctNum: 0,
                totalNum: 0,
                studentsAnswer: [],
              };
            }

            ques.totalNum++;
            if (answer.Score === answer.TotalScore) {
              ques.correctNum++;
            }

            ques.studentsAnswer.push({
              studentId: question.StudentId,
              score: answer.Score,
              TotalScore: answer.TotalScore,
              optionSelection: answer.Detail.studentAnswers.optionSelection,
            });

            belongActivity.questions[qIdx] = ques;
          }
          return matched;
        });
      });
    });
    return result;
  }

  parserResult(info = [], answer = [], activitysInfo = []) {
    let result = [];
    let questions = [];
    const units = this.unit(info);
    const lessonInfo = this.parserLesson(info, answer, activitysInfo);

    units.forEach((unit) => {
      result.push({
        unitKey: unit.Key,
        questions: [],
      });
    });

    lessonInfo.forEach((lesson) => {
      lesson.activitys.forEach((activity) => {
        activity.questions.forEach((question, idx) => {
          questions.push({
            unitKey: lesson.ParentNodeKey,
            lessonIdx: lesson.Sequence,
            activityIdx: activity.Sequence,
            questionIdx: idx,
            questionKey: question.questionKey,
            studentsAnswer: question.studentsAnswer,
          });
        });
      });
    });

    questions.forEach((ques) => {
      result.some((unit, uidx) => {
        const match = unit.unitKey === ques.unitKey;
        if (match) {
          activitysInfo.some((activity) => {
            return activity.Questions.some((question) => {
              if (question.Key === ques.questionKey) {
                const { tests, options, answers } = question.Body;
                result[uidx].questions.push({
                  ...ques,
                  options,
                  answers,
                  stimulus: tests,
                });
              } else return false;
            });
          });
        }
        return match;
      });
    });

    return result;
  }
}

export default new FormatData();
