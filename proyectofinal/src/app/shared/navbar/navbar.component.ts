import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface NavBarToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onToggleNavbar: EventEmitter<NavBarToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData= navbarData;
  constructor() { }

  @HostListener('windows:resize',['$event'])
  onResize(event: any){
    this.screenWidth =window.innerWidth;
    if(this.screenWidth <= 768 ){
      this.collapsed= false;
      this.onToggleNavbar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }
  ngOnInit(): void {
    this.screenWidth =window.innerWidth;
  }
  closeNavbar(): void{
    this.collapsed= false;
    this.onToggleNavbar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleNavbar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
