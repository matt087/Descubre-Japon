import { Component } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {
  festivals = [
    {
      name: 'Gion Matsuri',
      imageUrl: 'assets/images/matsuri.jpg',
      description: 'El Gion Matsuri es uno de los festivales más famosos de Kioto, celebrado durante todo el mes de julio. Su evento principal es el desfile de carrozas, conocido como Yamaboko Junko, que se lleva a cabo el 17 de julio. Las carrozas, adornadas con tapices y decoraciones tradicionales, recorren las calles de la ciudad, ofreciendo un espectáculo visual impresionante.'
    },
    {
      name: 'Tanabata Matsuri',
      imageUrl: 'assets/images/tanabata.jpg',
      description: 'El Tanabata Matsuri, conocido como el festival de las estrellas, se celebra en Japón el 7 de julio. Este festival tiene su origen en una leyenda que cuenta la historia de dos amantes, Orihime y Hikoboshi, que solo pueden encontrarse una vez al año, en esta fecha. Durante el festival, la gente escribe sus deseos en tiras de papel coloridas llamadas tanzaku y las cuelga en ramas de bambú, esperando que se hagan realidad.'
    },
    // Agrega más festivales según sea necesario
  ];

  traditionalClothing = [
    {
      name: 'Kimono',
      imageUrl: 'assets/images/kimono2.jpeg',
      description: 'El kimono es una prenda tradicional japonesa...'
    },
    {
      name: 'Yukata',
      imageUrl: 'assets/images/yukata.jpg',
      description: 'El yukata es un tipo de kimono ligero usado en festivales de verano...'
    },
    // Agrega más tipos de ropa tradicional según sea necesario
  ];
}
