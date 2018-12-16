import {Component, OnInit} from '@angular/core';
import {Question} from '../Model/question';
import {Value} from '../Model/value';
import {CommentWrapper} from '../Model/commentWrapper';
import {QuestionImg} from '../Model/questionImg';
import {ValueImg} from '../Model/valueImg';
import {ResultsWrapper} from '../Model/resultsWrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public submitted = false;
  public username = 'Anoným';
  public question1 = new Question(null, 'Od ktorého veku by mali ženy začať so samovyšetrovaním prsníkov?',
    [new Value('od 18 rokov', false, true)
      , new Value('od 20 rokov', false, false)
      , new Value('od 21 rokov', false, false)]);
  public question2 = new Question(null, 'U ktorých žien je zvýšený výskyt rakoviny prsníkov?',
    [new Value('u žien, ktoré nikdy nerodili alebo nekojili', false, true)
      , new Value('u žien, ktoré otehotneli až po 30. roku života', false, true)
      , new Value('u žien, ktoré mali nástup menopauzy až po 45. roku života', false, false)]);
  public question3 = new Question(null, 'Ako často by  mali ženy nad 30 rokov vykonávať samovyšetrenie prsníkov?',
    [new Value('každý týždeň', false, false)
      , new Value('každý mesiac', false, true)
      , new Value('každé tri mesiace', false, false)]);
  public question4 = new Question(null, 'Čo si všímame pri samovyšetrovaní Prsníkov? ',
    [new Value('hrčka', false, true)
      , new Value('výtok z bradavky', false, true)
      , new Value('vyrážky/ začervenanie ', false, true)
      , new Value('zmeny na bradavke', false, true)
      , new Value('zväčšenie alebo zmenšenie jedného prsníka', false, true)
      , new Value('výtok hnedastej alebo krvnej tekutiny z bradavky', false, true)
      , new Value('vťahovanie bradavky ', false, true)
      , new Value('kvapkanie', false, true)
    ]);
  public question5 = new QuestionImg(null, 'Zoraď obrázky. V Akom poradí sa majú správne vyšetrovať prsníky?',
    [new ValueImg('/assets/img/1.jpg', null, '3')
      , new ValueImg('/assets/img/2.jpg', null, '6')
      , new ValueImg('/assets/img/3.jpg', null, '1')
      , new ValueImg('/assets/img/4.jpg', null, '2')
      , new ValueImg('/assets/img/5.jpg', null, '5')
      , new ValueImg('/assets/img/6.jpg', null, '7')
      , new ValueImg('/assets/img/7.jpg', null, '8')
      , new ValueImg('/assets/img/8.jpg', null, '4')
    ]);

  public myRating = 3;
  public myComment: string;
  public rating: number[];
  public comments: CommentWrapper[];
  public results: ResultsWrapper[];

  constructor() {
    this.comments = [];
    this.rating = [];
    this.results = [];
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.username, this.myComment);
    console.log(this.comments);
    if (this.myComment !== undefined && this.myComment !== null) {
      this.comments.push(new CommentWrapper(this.username, this.myComment));
    }
    console.log(this.rating, this.myRating);
    this.rating.push(this.myRating);
    this.results.push(new ResultsWrapper(
      this.username
      , this.checkQuestion(this.question1)
      , this.checkQuestion(this.question2)
      , this.checkQuestion(this.question3)
      , this.checkQuestion(this.question4)
      , this.checkQuestion(this.question5)
    ));
    console.log(this.results);
  }

  onClick() {
    this.submitted = false;
  }

  getRating(): number {
    const sum = this.rating.reduce(function (a, b) {
      return a + b;
    });
    return (this.rating.length === 0) ? sum / this.rating.length : 3;
  }

  checkQuestion(question: any) {
    return question.values.reduce((sum, next) => sum && (next.answer === next.marked), true);
  }

  getColor(value: Value): string {
    if (value.marked === null || (value.marked !== value.answer)) {
      return '#ff5b5b';
    }
    if (value.marked === value.answer && value.answer === true) {
      return '#69cc22';
    }
    if (value.marked === value.answer && value.answer) {
      return 'black';
    }
  }

  getColor2(value: Value): string {
    if (value.marked !== value.answer) {
      return '#ff5b5b';
    }
    if (value.marked === value.answer) {
      return '#44a300';
    }
  }
}
