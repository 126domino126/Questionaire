import {Component, OnInit} from '@angular/core';
import {Question} from '../Model/Question';
import {Value} from '../Model/Value';
import {CommentWrapper} from '../Model/commentWrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private inputs;

  private username = 'Anoným';
  private question1 = new Question(null, 'Od ktorého veku by mali ženy začať so samovyšetrovaním prsníkov?',
    [new Value('od 18 rokov', false, true)
      , new Value('od 20 rokov', false, false)
      , new Value('od 18 rokov', false, false)]);
  private question2 = new Question(null, 'U ktorých žien je zvýšený výskyt rakoviny prsníkov?',
    [new Value('u žien, ktoré nikdy nerodili alebo nekojili', false, true)
      , new Value('u žien, ktoré otehotneli až po 30. roku života', false, true)
      , new Value('u žien, ktoré mali nástup menopauzy až po 45. roku života', false, false)]);
  private question3 = new Question(null, 'Ako často by  mali ženy nad 30 rokov vykonávať samovyšetrenie prsníkov?',
    [new Value('každý týždeň', false, false)
      , new Value('každý mesiac', false, true)
      , new Value('každé tri mesiace', false, false)]);
  private question4 = new Question(null, 'Čo si všímame pri samovyšetrovaní Prsníkov? ',
    [new Value('hrčka', false, true)
      , new Value('výtok z bradavky', false, true)
      , new Value('vyrážky/ začervenanie ', false, true)
      , new Value('zmeny na bradavke', false, true)
      , new Value('zväčšenie alebo zmenšenie jedného prsníka', false, true)
      , new Value('výtok hnedastej alebo krvnej tekutiny z bradavky', false, true)
      , new Value('vťahovanie bradavky ', false, true)
      , new Value('kvapkanie', false, true)
    ]);

  private myRating = 3;
  private myComment: string;
  private rating: number[];
  private comments: CommentWrapper[];


  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    // if (this.myComment !== undefined || this.myComment !== null) {
    //   this.comments.push(new CommentWrapper(this.username, this.myComment));
    // }
    // this.rating.push(this.myRating);
  }

  getRating(): number {
    const sum = this.rating.reduce(function(a, b) { return a + b; });
    return  (this.rating.length === 0) ? sum / this.rating.length : 3;
  }
}
