import { Component } from '@angular/core';
import { Http } from '@angular/http';
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

  public data;

  constructor(public navCtrl: NavController, private http: Http) {}

  ionViewDidEnter() {
    console.log('Hello ListDataPage Page');
    this.http.get("http://webxapi.azurewebsites.net/api/products").subscribe(nxt => {
      this.data = nxt.json();
    }, err => console.log(err),
    () => {});
  }

}
