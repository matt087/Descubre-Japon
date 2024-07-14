import { Component } from '@angular/core';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrl: './gastronomia.component.css'
})
export class GastronomiaComponent {
  dishes = [
    {
      name: 'Sushi',
      imageUrl: 'assets/images/sushi2.png',
      description: 'El sushi es un plato japonés que consiste en arroz avinagrado acompañado de pescado, mariscos o verduras.'
    },
    {
      name: 'Ramen',
      imageUrl: 'assets/images/ramen.jpg',
      description: 'El ramen es una sopa de fideos japonesa servida con carne, huevo, vegetales y un caldo sabroso.'
    },
    {
      name: 'Mochi',
      imageUrl: 'assets/images/mochi.jpg',
      description: 'El mochi es un pastelito de arroz glutinoso relleno con diversos ingredientes como pasta de frijol rojo o helado.'
    },
    // Agrega más platos según sea necesario
  ];
}
