import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Facebook } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { Data } from '../providers/data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  homePage: any = HomePage;
  aboutPage: any = AboutPage;

  constructor(
    public platform: Platform,
    public dataService: Data,
    public menu: MenuController) {

    platform.ready().then(() => {
      // StatusBar.styleDefault();
      // Splashscreen.hide();
    });
  }

  openPage(page): void{

  }

  logout(): void{

  }
}
