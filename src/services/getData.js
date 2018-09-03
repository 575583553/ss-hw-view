import Http from './http';
import FormatData from './formatData';
import config from '../config/config';
const { bookUrl, answewrUrl, sudentInfo, activityInfo, resource } = config;

class GetData {
  getBookInfo() {
    return Http.get({ url: bookUrl }).then((res) => res.data);
  }

  getAnswerInfo() {
    return Http.get({ url: answewrUrl }).then((res) => res.data);
  }

  getStudentInfo() {
    return Http.get({ url: sudentInfo }).then((res) => res.data);
  }

  getActivityInfo() {
    return Http.get({ url: activityInfo }).then((res) => res.data);
  }

  async getUnit() {
    const bookInfo = await this.getBookInfo();
    const unit = FormatData.unit(bookInfo);
    return unit;
  }

  async getLesson() {
    const bookInfo = await this.getBookInfo();
    const answers = await this.getAnswerInfo();
    const activityInfo = await this.getActivityInfo();
    const lessonInfo = FormatData.parserLesson(
      bookInfo,
      answers,
      activityInfo.Activities,
    );
    return lessonInfo;
  }

  async getResult() {
    const bookInfo = await this.getBookInfo();
    const answers = await this.getAnswerInfo();
    const activityInfo = await this.getActivityInfo();
    const resultInfo = FormatData.parserResult(
      bookInfo,
      answers,
      activityInfo.Activities,
      resource,
    );
    return resultInfo;
  }
}

export default new GetData();
