import formatData from './formatData';
import info from '../../server/ssiBookInfo.json';
import answer from '../../server/ssiAnswer.json';
import activitys from '../../server/ssiActivity.json';

test('should have a parser result function', () => {
  expect(formatData.parserResult).toBeDefined();
});

test('should still work if params are not fully passed by calling parser result function', () => {
  const result1 = formatData.parserResult(info);
  const result2 = formatData.parserResult(undefined, answer);
  const result3 = formatData.parserResult(undefined, undefined, activitys);
});

test('should return an array by parser result function', () => {
  const result = formatData.parserResult();
  expect(Array.isArray(result)).toBeTruthy();
});

// todo: add test cases for parser result function
// result schema:
// [
//   {
//       unitKey: '', // bookInfo "Level": 4, Key
//       questions: [
//           {
//             lessonIdx: '', // bookInfo "Level": 8, Sequence
//             activityIdx: '', // bookInfo "Level": 16, Sequence
//             questionIdx: '', //Activityinfo
//             questionKey: '', //Activityinfo Questions Key
//             stimulus: [ //Activityinfo Questions Body  tests
//                 {
//                     id: '',
//                     text/image/audio: ''
//                 }
//             ],
//             options: [], // Activityinfo Questions options
//             correctAnswer: [ // Activityinfo Questions Body answers
//                 {
//                   option: $index
//                 }
//             ],
//             studentsAnswer: [ // Activityinfo Questions Key -> answerInfo.json  Answers studentAnswers
//                 {
//                     studentId: '',
//                     answers: [
//                         option: $index
//                     ]
//                 }
//             ]
//         }
//       ]
//   }
// ]
