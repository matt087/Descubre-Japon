import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sections = [
    {
      title: 'Bienvenidos a Japón',
      description: 'Japón, conocido como el "País del Sol Naciente", es una nación insular ubicada en el este de Asia. Compuesta por cuatro islas principales: Honshu, Hokkaido, Kyushu y Shikoku, así como numerosas islas más pequeñas, Japón se caracteriza por su rica historia, cultura vibrante y avances tecnológicos impresionantes.',
      image: '../../../assets/images/bandera.jpg'
    },
    {
      title: 'Historia y Cultura',
      subsections: [
        { subtitle: 'Festivales Japoneses', image: '../../../assets/images/festival.jpg' },
        { subtitle: 'Ropa Tradicional', image: '../../../assets/images/kimono.jpg' },
        { subtitle: 'Ceremonia del Té', image: '../../../assets/images/te.jpg' }
      ]
    },
    {
      title: 'Gastronomía',
      subsections: [
        { subtitle: 'Sushi y Sashimi', image: '../../../assets/images/sushi.png' },
        { subtitle: 'Ramen y Udon', image: '../../../assets/images/ramen.jpg' },
        { subtitle: 'Postres Japoneses', image: '../../../assets/images/dango.jpg' }
      ]
    },
    {
      title: 'Modernidad',
      subsections: [
        { subtitle: 'Avances Tecnológicos', image: '../../../assets/images/tech.jpg' },
        { subtitle: 'Cultura Pop', image: '../../../assets/images/manga.jpg' },
        { subtitle: 'Infraestructura', image: '../../../assets/images/tren.jpeg' }
      ]
    }
  ];
}
