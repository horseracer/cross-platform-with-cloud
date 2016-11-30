import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  ionViewDidLoad() {
    console.log('Hello TodoPage Page');
  }

}
