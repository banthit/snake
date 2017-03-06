import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
    selector: "app-home",
    templateUrl:"./app/home/home.component.html"
})

export class HomeComponent implements OnInit{
  public homes : any[];
  constructor(private homeService : HomeService){

  }
  ngOnInit(){
    this.homes = this.homeService.GetList();
  }

}
