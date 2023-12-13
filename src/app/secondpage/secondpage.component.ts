import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent {
  
  searchText: string = '';

  data: any[] = [];

  constructor(private dataService: DataService,private router: Router) {
    this.data = this.dataService.getData();
  }
}
