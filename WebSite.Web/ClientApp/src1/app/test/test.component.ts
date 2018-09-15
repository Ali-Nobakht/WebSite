import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
  oddNumber: number[] = [1,3,5,7,9];
  evenNumber: number[] = [2,4,6,8,10];
  onlyFalse: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
