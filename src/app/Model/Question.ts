import {Value} from './Value';

export class Question {
  constructor(
    public id?: string,
    public text?: string,
    public values?: Value[],
  ) {
  }
}
