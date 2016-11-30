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

  public itemText: string;
  public table;
  public todoData;

  constructor(public navCtrl: NavController) {
    var client = new WindowsAzure.MobileServiceClient('http://xmobile.azurewebsites.net');
    this.table = client.getTable('todoitem');
  }

  ionViewDidEnter() {
    console.log('Hello TodoPage Page');
    this.table.read().done(
      data => {
        this.todoData = data;
      },
      err => console.log(err)
    );
  }

  public addItem() {
    this.table.insert({ text: this.itemText, complete: false });
  }

}
