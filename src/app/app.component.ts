import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userScore = 0;
  userAnswer = "";

  questionInfo;

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  checkAnswer(userAnswer){
    if(this.userAnswer === this.questionInfo.answer) {
      this.userScore += this.questionInfo.value;
    }
    else {
      this.userScore -= this.questionInfo.value;
    }

    this.getQuestionInfo();
  }

  ngOnInit(){
    this.getQuestionInfo()
  }


}
