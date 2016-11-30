import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as WindowsAzure from 'azure-mobile-apps-client';

/*
  Generated class for the Todo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
})
export class TodoPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {
    console.log('Hello TodoPage Page');

    var client = new WindowsAzure.MobileServiceClient('http://xmobile.azurewebsites.net');
  }

}
