import Http from './http';
import FormatData from './formatData';
import config from '../config/config';
const { bookUrl, answewrUrl, sudentInfo /* , resource */ } = config;

class GetData {
  getBookInfo() {
    return Http.get({ url: bookUrl });
  }

  getAnswerInfo() {
    return Http.get({ url: answewrUrl });
  }

  getStudentInfo() {
    return Http.get({ url: sudentInfo});
  }

  getUnit() {
    return this.getBookInfo().then((res) => {
      const unit = FormatData.unit(res.data);
      return unit;
    });
  }

  getLesson() {
    return this.getAnswerInfo().then((answer) => {
      return this.getBookInfo().then((book) => {
        const lessonInfo = FormatData.parserLesson(book.data, answer.data);
        return lessonInfo;
      });
    });
  }

  getStudentAnswer() {
    return this.getAnswerInfo().then(res => {
      return FormatData.parserAnswer(res.data);
    });
  }
}

export default new GetData();
