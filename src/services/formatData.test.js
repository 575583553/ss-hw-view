const _ = require('lodash');
import formatData from './formatData';
import info from '../../server/ssiBookInfo.json';
import answer from '../../server/ssiAnswer.json';
import activitys from '../../server/ssiActivity.json';

test('should have a well working seekInfo function', () => {
  const mockInfo = [
    { Level: 2, info: 'info' },
    { Level: 4, info: 'info' },
    { Level: 2, info: 'info2' },
  ];
  const result = formatData.seekInfo(mockInfo, 2);
  expect(result).toEqual([
    { Level: 2, info: 'info' },
    { Level: 2, info: 'info2' },
  ]);
});

test('should have a well working book function', () => {
  testSeekInfoCalledCorrectlyWith('book', 2);
});

test('should have a well working unit function', () => {
  testSeekInfoCalledCorrectlyWith('unit', 4);
});

test('should have a well working lesson function', () => {
  testSeekInfoCalledCorrectlyWith('lesson', 8);
});

test('should have a well working activity function', () => {
  testSeekInfoCalledCorrectlyWith('activity', 16);
});

test('should have a well working parseActivity function', () => {
  const expectResult = [
    {
      activityKey: '697a0238-3d99-e811-814a-02bc62143fc0',
      questions: [
        {
          questionKey: 'Key',
          TotalScore: 4,
          score: 0,
        },
      ],
      lessonKey: 'a8f3c59c-c8db-4f9f-af28-26a045f2d1b4',
      Sequence: 0,
    },
  ];
  const spy = jest.spyOn(formatData, 'activity').mockImplementation(() => [
    {
      CreatedBy: null,
      CreatedStamp: '2018-08-06T06:06:42.673Z',
      LastUpdatedBy: null,
      LastUpdatedStamp: '2018-08-06T06:06:42.673Z',
      State: 0,
      ActivityKeys: [expectResult[0].activityKey],
      Key: '6a7a0238-3d99-e811-814a-02bc62143fc0',
      ContentKey: null,
      Name: 'Activity 5 - Lesson 2.1',
      ParentNodeKey: expectResult[0].lessonKey,
      TopNodeKey: '5ba2a706-6356-4b6f-a94d-b2977dd47b9b',
      Code: 'ss-multiple-select-activity5-lesson2-11',
      Theme: '',
      Type: 1,
      Level: 16,
      CoursePlanKey: '60210202-769c-40dd-8660-97e60fdbb639',
      Sequence: expectResult[0].Sequence,
      Title: '',
      SubTitle: '',
      Description: '',
      Body: null,
    },
  ]);
  const mockInfo = [];
  const mockActivity = [
    {
      Key: '697a0238-3d99-e811-814a-02bc62143fc0',
      Questions: [
        {
          Key: 'Key',
          Body: { answers: [1, 2, 3, 4] },
        },
      ],
    },
    {
      Key: 'distractor',
      Questions: [],
    },
    {
      Key: 'distractor2',
      Questions: [],
    },
  ];
  const result = formatData.parseActivity(mockInfo, mockActivity);
  expect(spy).toHaveBeenCalledWith(mockInfo);
  expect(result).toEqual(expectResult);

  spy.mockRestore();
});

test('should have a well working parserLesson function', () => {
  const mockAnswer = [
    {
      StudentId: 'question.StudentId',
      ActivityKey: 'activity.Key',
      Answers: [
        {
          QuestionKey: 'question.Key',
          Score: 1,
          TotalScore: 1,
          Detail: {
            studentAnswers: {
              optionSelection: 'answer.Detail.studentAnswers.optionSelection',
            },
          },
        },
      ],
    },
  ];

  const expectLesson = [
    {
      Sequence: 0,
      ParentNodeKey: 'lesson.ParentNodeKey',
      Key: 'lesson.Key',
      lessonKey: 'lesson.Key',
      activitys: [],
    },
  ];

  const expectActivities = [
    {
      activityKey: 'activity.Key',
      questions: [
        {
          questionKey: 'question.Key',
          TotalScore: 4,
          score: 0,
        },
      ],
      lessonKey: 'lesson.Key',
      Sequence: 0,
    },
  ];

  const expectQuestions = [
    {
      questionKey: 'question.Key',
      TotalScore: 4,
      score: 0,
      correctNum: 1,
      totalNum: 1,
      studentsAnswer: [
        {
          studentId: 'question.StudentId',
          score: 1,
          TotalScore: 1,
          optionSelection: 'answer.Detail.studentAnswers.optionSelection',
        },
      ],
    },
  ];

  const expectResult = _.cloneDeep(expectLesson);
  delete expectResult[0].Key;
  expectResult[0].activitys = _.cloneDeep(expectActivities);
  delete expectResult[0].activitys[0].lessonKey;
  expectResult[0].activitys[0].questions = _.cloneDeep(expectQuestions);

  const lessonSpy = jest
    .spyOn(formatData, 'lesson')
    .mockImplementation(() => expectLesson);

  const parseActivitySpy = jest
    .spyOn(formatData, 'parseActivity')
    .mockImplementation(() => expectActivities);

  const result = formatData.parserLesson(
    'mockInfo',
    mockAnswer,
    'mockActivities',
  );

  expect(lessonSpy).toHaveBeenCalledWith('mockInfo');
  expect(parseActivitySpy).toHaveBeenCalledWith('mockInfo', 'mockActivities');

  expect(result).toEqual(expectResult);

  parseActivitySpy.mockRestore();
  lessonSpy.mockRestore();
});

test('should have a well working parserResource function', () => {
  const mockData = [
    {
      audio: 'resource://test.audio',
      image: 'resource://test.image',
      text: 'resource://test.text',
    },
  ];
  const mockResource = 'resourceHeader://';
  const emptyResult = formatData.parserResources();
  const result = formatData.parserResources(mockData, mockResource);

  expect(emptyResult).toEqual([]);
  expect(result).toEqual([
    {
      audio: 'resourceHeader://test.audio',
      image: 'resourceHeader://test.image',
      text: 'resource://test.text',
    },
  ]);
});

test('should have a parser result function', () => {
  expect(formatData.parserResult).toBeDefined();
});

test('should still work if params are not fully passed by calling parser result function', () => {
  const result1 = formatData.parserResult(info);
  const result2 = formatData.parserResult(undefined, answer);
  const result3 = formatData.parserResult(
    undefined,
    undefined,
    activitys.Activities,
  );
});

test('should return an array by parser result function', () => {
  const result = formatData.parserResult();
  expect(Array.isArray(result)).toBeTruthy();
});

test('should contain unitKey and questions in each object among result array by parser result function', () => {
  const result = formatData.parserResult(info, answer, activitys.Activities);

  result.forEach((res) => {
    expect(res).toHaveProperty('unitKey');
    expect(res).toHaveProperty('questions');
  });
});

test('should contain certain property in each object.questions among result array by parser result function', () => {
  const result = formatData.parserResult(info, answer, activitys.Activities);
  const requiredProperty = [
    'unitKey',
    'lessonIdx',
    'activityIdx',
    'questionIdx',
    'questionKey',
    'studentsAnswer',
  ];

  result[0].questions.forEach((ques) => {
    requiredProperty.forEach((prop) => {
      expect(ques).toHaveProperty(prop);
    });
  });
});

test('should call unit, parserLesson and parserResources correctly when calling parseResult function', () => {
  const unitSpy = jest.spyOn(formatData, 'unit');
  const parserLessonSpy = jest.spyOn(formatData, 'parserLesson');
  const parserResourcesSpy = jest.spyOn(formatData, 'parserResources');

  formatData.parserResult(info, answer, activitys.Activities);

  expect(unitSpy).toHaveBeenCalledWith(info);
  expect(parserLessonSpy).toHaveBeenCalledWith(
    info,
    answer,
    activitys.Activities,
  );
  expect(parserResourcesSpy).toHaveBeenCalled();

  unitSpy.mockRestore();
  parserLessonSpy.mockRestore();
  parserResourcesSpy.mockRestore();
});

test('should have a well working parseResult function', () => {
  const unitSpy = jest.spyOn(formatData, 'unit').mockImplementation(() => [
    {
      Key: 'unit.Key',
    },
  ]);
  const parserLessonSpy = jest
    .spyOn(formatData, 'parserLesson')
    .mockImplementation(() => [
      {
        Sequence: 0,
        ParentNodeKey: 'unit.Key',
        lessonKey: 'lesson.Key',
        activitys: [
          {
            activityKey: 'activity.Key',
            questions: [
              {
                questionKey: 'question.Key',
                TotalScore: 4,
                score: 0,
                correctNum: 1,
                totalNum: 1,
                studentsAnswer: [
                  {
                    studentId: 'question.StudentId',
                    score: 1,
                    TotalScore: 1,
                    optionSelection: [
                      {
                        test: '2',
                        option: '2',
                      },
                      {
                        test: '0',
                        option: '0',
                      },
                      {
                        test: '1',
                        option: '1',
                      },
                    ],
                  },
                ],
              },
            ],
            Sequence: 0,
          },
        ],
      },
    ]);

  const mockActivitysInfo = [
    {
      Questions: [
        {
          Key: 'question.Key',
          Body: {
            tests: ['tests'],
            options: ['options'],
            answers: ['answers'],
          },
        },
      ],
    },
  ];

  const expectResult = [
    {
      unitKey: 'unit.Key',
      questions: [
        {
          unitKey: 'unit.Key',
          lessonIdx: 0,
          activityIdx: 0,
          questionIdx: 0,
          questionKey: 'question.Key',
          studentsAnswer: [
            {
              studentId: 'question.StudentId',
              score: 1,
              TotalScore: 1,
              optionSelection: [
                {
                  test: '0',
                  option: '0',
                },
                {
                  test: '1',
                  option: '1',
                },
                {
                  test: '2',
                  option: '2',
                },
              ],
            },
          ],
          options: ['options'],
          answers: ['answers'],
          stimulus: ['tests'],
        },
      ],
    },
  ];

  const result = formatData.parserResult([], [], mockActivitysInfo);

  expect(result).toEqual(expectResult);

  unitSpy.mockRestore();
  parserLessonSpy.mockRestore();
});

function testSeekInfoCalledCorrectlyWith(type, level) {
  const spy = jest.spyOn(formatData, 'seekInfo');
  formatData[type](info);
  expect(spy).toHaveBeenCalledWith(info, level);
  spy.mockRestore();
}
