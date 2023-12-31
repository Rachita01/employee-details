// data.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any[] = [];

  getData(): any[] {
    return this.data;
  }

  setData(newData: any[]): void {
    this.data = newData;
  }
}
