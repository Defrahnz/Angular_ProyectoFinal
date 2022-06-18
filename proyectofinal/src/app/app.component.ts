import { Component } from '@angular/core';

interface NavBarToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyeto14';

    
  isNavBarCollapsed = false;
  screenWidth = 0;

  onToggleNavBar(data: NavBarToggle): void{
    this.screenWidth = data.screenWidth;
    this.isNavBarCollapsed = data.collapsed;
  }

}
