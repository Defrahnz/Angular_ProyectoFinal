import { Component, OnInit } from '@angular/core';

interface NavBarToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isNavBarCollapsed = false;
  screenWidth = 0;

  onToggleNavBar(data: NavBarToggle): void{
    this.screenWidth = data.screenWidth;
    this.isNavBarCollapsed = data.collapsed;
  }

}
