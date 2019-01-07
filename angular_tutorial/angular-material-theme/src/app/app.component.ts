import { Component, OnInit } from '@angular/core';
//import { OverlayContainer } from '@angular/material';
//import {OverlayModule} from '@angular/cdk/overlay';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material-theme';
  theme = 'custom-theme-light';
  themeClass: string;
  
  constructor(
    private OverlayContainer: OverlayContainer
  ){}
  
  ngOnInit(): void{
      var themeFromLocalStorage = localStorage.getItem("theme");
      console.log(themeFromLocalStorage);
      if(themeFromLocalStorage)
      this.theme = themeFromLocalStorage;
      this.OverlayContainer.getContainerElement().classList.add(this.theme);
  }

  onThemeChange(theme:string){
      console.log(theme);
   // this.OverlayContainer.themeClass = this.theme;
      this.theme = theme;
      const OverlayContainerClasses = this.OverlayContainer.getContainerElement().classList;
      const themeClassesToRemove = Array.from(OverlayContainerClasses).filter((item: string) => item.includes('-theme'));
      if(themeClassesToRemove.length){
        OverlayContainerClasses.remove(...themeClassesToRemove);
      }
      OverlayContainerClasses.add(theme);
      localStorage.setItem("theme",theme);
  }

}
