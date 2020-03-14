import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styles: [`
    p {
      color: white;
      padding: 5px;
      align-content: center;
      border: darkgreen 5px solid;
      border-radius: 1ch;
      background-color: green;
  }`
]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

}
