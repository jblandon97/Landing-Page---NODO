import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  img: string = 'https://www.biografiasyvidas.com/biografia/m/fotos/miguel_angel_creacion_2.jpg';

  theme: string="";

  handleTheme(): void {
    this.theme = 'dark'
  }

}
