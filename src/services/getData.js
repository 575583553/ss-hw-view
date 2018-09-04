import Http from './http';
import Parser from './parser';
import config from '../config/config';
const { bookUrl, answewrUrl, sudentInfo, activityInfo, resource } = config;

class GetData {
  constructor() {
    this.parser = void 0;
  }

  async getStart() {
    return new Promise(async (resolve) => {
      if (this.parser) resolve();
      else {
        const bookInfo = await this.getBookInfo();
        this.parser = new Parser(bookInfo);
        resolve();
      }
    });
  }

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
    await this.getStart();
    const unit = this.parser.unit;
    return unit;
  }

  async getLesson() {
    await this.getStart();
    // const bookInfo = await this.getBookInfo();
    const answers = await this.getAnswerInfo();
    const activityInfo = await this.getActivityInfo();
    const lessonInfo = this.parser.parserLesson(
      answers,
      activityInfo.Activities,
    );
    return lessonInfo;
  }

  async getResult() {
    await this.getStart();
    // const bookInfo = await this.getBookInfo();
    const answers = await this.getAnswerInfo();
    const activityInfo = await this.getActivityInfo();
    const resultInfo = this.parser.parserResult(
      answers,
      activityInfo.Activities,
      resource,
    );
    return resultInfo;
  }
}

export default new GetData();
