import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {

  @Input() userAnswer;
  @Input() userScore;
  @Input() questionInfo;

  @Output() getNewQuestion = new EventEmitter();

  checkAnswer(){
    if(this.userAnswer === this.questionInfo.answer) {
      this.userScore += this.questionInfo.value;
    }
    else {
      this.userScore -= this.questionInfo.value;
    }
    this.userAnswer="";
    this.getNewQuestion.emit(this.userScore);
  }

  constructor() { }

  ngOnInit() {
  }

}
