import {ValueImg} from './valueImg';

export class QuestionImg {
  constructor(
    public id?: string,
    public text?: string,
    public values?: ValueImg[],
  ) {
  }
}
