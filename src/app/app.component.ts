import { Component } from '@angular/core';
import { Disciplines } from './mock-discipline';
import {Discipline} from './discipline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  showDet: boolean;
  disciplineSelected: any;
  disciplines = Disciplines;
  showK: boolean;
  showP: boolean;
  GetList(): Discipline[] {
    return Disciplines;
  }
  Select(): any{
    return this.disciplines.filter(x => x.id === this.disciplineSelected);
  }
  showDetail(): void {
    this.showDet = !this.showDet;
  }
}
