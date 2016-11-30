import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListData page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-data',
  templateUrl: 'list-data.html'
})
export class ListDataPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListDataPage Page');
  }

}
