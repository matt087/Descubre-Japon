import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ResultadoService } from '../../services/resultado.service';

interface Resultado {
  nombreUsuario: string;
  respuestasCorrectas: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent {
  constructor(private aSer:AuthService, private rser:ResultadoService){
  }
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
    let nombreUsuario = this.aSer.getName()??'';
    const respuestasCorrectas = this.correctAnswers;
    console.log({nombreUsuario, respuestasCorrectas });
    this.rser.guardarResultado({ nombreUsuario, respuestasCorrectas }).subscribe(
      response => {
        console.log('Resultado guardado exitosamente:', response);
        this.aSer.logout();
      },
      error => {
        console.error('Error al guardar el resultado:', error);
      }
    );
  }
}
