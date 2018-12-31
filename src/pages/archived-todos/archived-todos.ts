import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../providers/todo-service/todo-service'; 


/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {

	public archivedTodos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService:TodoService) {
  	// this.archivedTodos = this.todoService.getArchivedTodos();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ArchivedTodosPage');
  	this.archivedTodos = this.todoService.getArchivedTodos();
  	// we can also write this function in this function.
  }

}
