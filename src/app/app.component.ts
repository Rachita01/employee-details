import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router:Router){}
  addClicked() {
    console.log('Add button clicked');
    this.router.navigate(['/addemployee'])
  }

  viewClicked() {
    console.log('View button clicked');
    this.router.navigate(['/secondpage']);
}
}
