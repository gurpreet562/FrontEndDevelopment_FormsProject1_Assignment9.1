import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName="sakshi"
  email="sakshi@gmail.com"

  city="Select Option"
  cities:any=[
    {name:"hyderabad"},
    {name:"kolkata"},
    {name:"noida"}

  ]

    onSubmit(value:any){
    console.log(value);
  }
}
