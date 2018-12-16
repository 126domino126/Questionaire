import {Value} from './value';

export class Question {
  constructor(
    public id?: string,
    public text?: string,
    public values?: Value[],
  ) {
  }
}
