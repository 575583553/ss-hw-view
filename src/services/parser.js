import Info from './seekInfo';

export default class Parser {
  constructor(info) {
    const allInfo = new Info(info);
    // this.book = allInfo.book;
    this.unit = allInfo.unit;
    this.lesson = allInfo.lesson;
    this.activity = allInfo.activity;
  }

  parseActivity(activitys = []) {
    const activityInfo = this.activity;
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

  parserResources(data = [], resource = '') {
    const parseItems = ['audio', 'image'];
    data.forEach((item) => {
      parseItems.forEach((parseItem) => {
        const existItem = item[parseItem];
        if (existItem)
          item[parseItem] = existItem.replace('resource://', resource);
      });
    });
    return data;
  }

  parserLesson(answer = [], activitys = []) {
    const result = [];
    const lessonInfo = this.lesson;
    const activityInfo = this.parseActivity(activitys);
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

  parserResult(answer = [], activitysInfo = [], resource) {
    let result = [];
    let questions = [];
    const units = this.unit;
    const lessonInfo = this.parserLesson(answer, activitysInfo);

    units.forEach((unit) => {
      result.push({
        unitKey: unit.Key,
        questions: [],
      });
    });

    lessonInfo.forEach((lesson) => {
      lesson.activitys.forEach((activity) => {
        activity.questions.forEach((question, idx) => {
          //Sort studentsAnswer
          question.studentsAnswer &&
            question.studentsAnswer.forEach((answer) => {
              answer.optionSelection.sort((a, b) => {
                return a.test - b.test;
              });
            });

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
                  options: this.parserResources(options, resource),
                  answers,
                  stimulus: this.parserResources(tests, resource),
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
