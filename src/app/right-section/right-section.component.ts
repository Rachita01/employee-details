import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css'],
})
export class RightSectionComponent {
  constructor(private dataService: DataService) {}
  name: string = '';
  email: string = '';
  phone: string = '';

  submitClicked() {
    // console.log('Name:', this.name);
    // localStorage.setItem('Name',JSON.stringify(this.name));
    // console.log('Email:', this.email);
    // localStorage.setItem('Email',JSON.stringify(this.email));
    // console.log('Phone:', this.phone);
    // localStorage.setItem('Phone',JSON.stringify(this.phone));
    const newData = {
      name:this.name,
      email:this.email,
      phone:this.phone
    }
    
    this.dataService.setData([...this.dataService.getData(), newData]);

    this.name = '';
    this.email = '';
    this.phone = '';
  
  }
}
