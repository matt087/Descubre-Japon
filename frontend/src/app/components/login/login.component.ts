import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  questions = [
    {
      question: '¿Cuál es el festival más famoso de Kioto?',
      options: ['Tanabata Matsuri', 'Gion Matsuri', 'Obon'],
      answer: 'Gion Matsuri',
      userAnswer: ''
    },
    {
      question: '¿Qué es un kimono?',
      options: ['Un tipo de sushi', 'Una prenda tradicional japonesa', 'Una ceremonia del té'],
      answer: 'Una prenda tradicional japonesa',
      userAnswer: ''
    },
    {
      question: '¿Cuál de estos es un postre japonés tradicional?',
      options: ['Sushi', 'Ramen', 'Mochi'],
      answer: 'Mochi',
      userAnswer: ''
    },
    {
      question: '¿En qué fecha se celebra el Tanabata Matsuri?',
      options: ['7 de julio', '15 de agosto', '31 de diciembre'],
      answer: '7 de julio',
      userAnswer: ''
    },
    {
      question: '¿Qué es el ramen?',
      options: ['Una sopa de fideos japonesa', 'Un tipo de kimono', 'Una danza tradicional'],
      answer: 'Una sopa de fideos japonesa',
      userAnswer: ''
    }
  ];

  showResults = false;
  correctAnswers = 0;

  checkAnswers() {
    this.correctAnswers = this.questions.filter(q => q.userAnswer === q.answer).length;
    this.showResults = true;
  }
}
