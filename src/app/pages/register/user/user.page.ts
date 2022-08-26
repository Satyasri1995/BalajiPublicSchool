import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  skools;
  constructor() {
    this.skools=[
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
      {name:'Balaji Pblic School',branch:'Butchirajupalem',registerCode:12345},
    ];
   }

  ngOnInit() {
  }

  doRegister(skool){
    console.log(skool);
  }

}
