import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '17_zdarzenia_formularze_rychter_szymon';

  imie: string = "";
  status: string = "";
  ocena: number = 0;
  submit() {
    console.log(`${this.imie} ${this.ocena} ${this.status}`);
  }
}