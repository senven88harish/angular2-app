import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {

  title = "For loop of Angular2 js";

  fruits = [
    "Banana",
    "Orange",
    "Mango",
    "Apple"
  ];

  color: string;
}
