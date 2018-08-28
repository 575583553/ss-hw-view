import Http from './http';
import FormatData from './formatData';
import config from '../config/config';
const {
  bookUrl,
  answewrUrl,
  sudentInfo,
  activityInfo /* , resource */,
} = config;

class GetData {
  getBookInfo() {
    return Http.get({ url: bookUrl });
  }

  getAnswerInfo() {
    return Http.get({ url: answewrUrl });
  }

  getStudentInfo() {
    return Http.get({ url: sudentInfo });
  }

  getUnit() {
    return this.getBookInfo().then((res) => {
      const unit = FormatData.unit(res.data);
      return unit;
    });
  }

  getActivityInfo() {
    return Http.get({ url: activityInfo });
  }

  getLesson() {
    return this.getAnswerInfo().then((answer) => {
      return this.getBookInfo().then((book) => {
        return this.getActivityInfo().then((activity) => {
          const lessonInfo = FormatData.parserLesson(
            book.data,
            answer.data,
            activity.data,
          );
          return lessonInfo;
        });
      });
    });
  }

  getStudentAnswer() {
    return this.getAnswerInfo().then((res) => {
      return FormatData.parserAnswer(res.data);
    });
  }
}

export default new GetData();
