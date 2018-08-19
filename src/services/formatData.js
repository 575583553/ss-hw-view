class FormatData {
    seekInfo(info, number) {
        return info.filter(i => i.Level === number);
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

    parserLesson(info, answer) {
        const result = [];
        const lessonInfo = this.lesson(info);
        const activityInfo = this.activity(info);
        const questionInfo = answer;

        lessonInfo.forEach((lesson) => {
            result.push({
                ParentNodeKey: lesson.ParentNodeKey,
                lessonKey: lesson.Key,
                activitys: [] 
            })
        })
        // generate activity level model
        activityInfo.forEach(activity => {
            let belongLesson;
            result.some((lesson, lIdx) => {
                const match = lesson.lessonKey === activity.ParentNodeKey;
                if (match) belongLesson = result[lIdx];
                return match;
            })
            const activityKey = activity.Key;
            belongLesson.activitys.push({
                activityKey,
                questions: []
            });
        });
        // generate question level model
        questionInfo.forEach(question => {
          let belongActivity;
          result.some((lesson, lIdx) =>
            lesson.activitys.some((activity, aIdx) => {
                const match = activity.activityKey === question.ActivityCourseKey;
                if (match) {
                belongActivity =
                    result[lIdx].activitys[aIdx];
                }
                return match;
            })
          );
          if (!belongActivity) return;
          // loop answers
          question.Answers.forEach(answer => {
            const questionKey = answer.QuestionKey;
            const isQuestionExist = belongActivity.questions.some(
              ques => questionKey === ques.questionKey
            );
            if (!isQuestionExist) {
              belongActivity.questions.push({
                questionKey,
                correctNum: 0,
                totalNum: 0,
                correctAnswer: answer.Detail.correctAnswers,
                studentsAnswer: []
              });
            }
            const _question = belongActivity.questions.filter(
              ques => questionKey === ques.questionKey
            )[0];
            _question.totalNum++;
            if (answer.Score === answer.TotalScore) {
              _question.correctNum++;
            }
            _question.studentsAnswer.push({
              [question.StudentId]: answer.Detail.studentAnswers
            });
          });
        });
        return result;
    }
}

export default new FormatData();