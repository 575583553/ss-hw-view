export default class Info {
  constructor(info = []) {
    this.info = info;
  }

  seek(number) {
    return this.info.filter((i) => i.Level === number);
  }

  get book() {
    return this.seek(2);
  }

  get unit() {
    return this.seek(4);
  }

  get lesson() {
    return this.seek(8);
  }

  get activity() {
    return this.seek(16);
  }
}
