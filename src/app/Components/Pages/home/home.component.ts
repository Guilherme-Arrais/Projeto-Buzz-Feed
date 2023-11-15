import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../Data/quizz_questions.json';

  @Component({
    selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  })

  export class HomeComponent implements OnInit {
    img_logo:string="https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/subbuzz-images/unknown/67cfa87c31e1b31d325fa377343406d9.jpg"
    title:string = ""

    questions:any
    questionSelected:any

    answers:string[] = []
    answerSelected:string =""

    questionIndex:number =0
    questionMaxIndex:number=0

    finished:boolean = false

    constructor() { }

    ngOnInit(): void {
      if(quizz_questions){
        this.finished = false
        this.title = quizz_questions.title

        this.questions = quizz_questions.questions
        this.questionSelected = this.questions[this.questionIndex]

        this.questionIndex = 0
        this.questionMaxIndex = this.questions.length

        console.log(this.questionIndex)
        console.log(this.questionMaxIndex)
      }

    }

    playerChoose(value:string){
      this.answers.push(value)
      this.nextStep()

    }

    async nextStep(){
      this.questionIndex+=1

      if(this.questionMaxIndex > this.questionIndex){
          this.questionSelected = this.questions[this.questionIndex]
      }else{
        const finalAnswer:string = await this.checkResult(this.answers)
        this.finished = true
        this.answerSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results ]
      }
    }

    async checkResult(anwsers:string[]){

      const result = anwsers.reduce((previous, current, i, arr)=>{
          if(
            arr.filter(item => item === previous).length >
            arr.filter(item => item === current).length
          ){
            return previous
          }else{
            return current
          }
      })

      return result
    }
  }
