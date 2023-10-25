import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Author, CounterPayload } from './app.types';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Syntaxis de props
  title = 'library-ui';
  imagen = 'https://www.realmadrid.com/img/vertical_380px/cristiano_550x650_20180917025046.jpg';
  ariaLabel = "Alert";


  counter = 0;

  colores = this.appService.parseColors(['red', 'yellow', 'green', 'blue']);
  authors: Author[] = [];
    

  constructor(
    private appService: AppService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.api.getAuthors().subscribe({
      next: data => {
        this.authors = data;
      },
      error: error => {
        console.log(error);
      }
    });
    this.api.getAuthorWithBooks('Carlos', 'Trejo').subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  // Syntaxis de metodos
  triggerAlert() {
    alert('Esto es una alerta');
  }

  increaseCounter() {
    this.counter += 1;
  }

  decreaseCounter() {
    this.counter = this.counter - 1;
  }

  onCounter(payload: CounterPayload) {
    this.colores[payload.index].counter = payload.counterHijo
    this.counter = this.appService.getCounterTotal(this.colores);
  }

  onLimitReached() {
    alert('Limite alcanzado');
  }

}
