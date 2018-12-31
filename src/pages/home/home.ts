import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';	
import { ArchivedTodosPage } from '../archived-todos/archived-todos'; // we add page ArchivedTodos so now we import here.
import { TodoService } from '../../providers/todo-service/todo-service'; 


// NavController is used to navigate page. default
// AlertController is controller to import alert functionality
// reorderArray is used to get position of list or we can say to reorder list/array
// TodoService is service provider, so we can use it's function any where.
// ToastController is used to display message on screen when we add or delete item.

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public todos = [];	// create array to store todo list
	public reorderIsEnable = false;
	public archivedTodosPage = ArchivedTodosPage;	// create-object/assign-value to  `archivedTodosPage` ariable. This is used when you want to navigate through `navPush` method. 

  constructor(public navCtrl: NavController, private alertController:AlertController, private todoService:TodoService, private toastController:ToastController) {
  	// alertController is variable name which we use further to create alert. 

    this.todos = this.todoService.getTodos();
  }

  openTodoAlert() {
  	// `let` keyword is use to define variable.
  	// `create` function is create defination.
  	let addTodoAlert = this.alertController.create({
  		title: "Add to Todo",
  		message: "Enter your todo",
  		inputs: [
  					{
  						type: "text",
  						name: "addTodoInput"
  					}
  			],

			buttons:[
						{
							text: "Cancel",
						},
						{
							text: "Add Todo",
							// handler stores all input in alert box.
							handler:(inputData)=>{
								let todoText;
								todoText = inputData.addTodoInput;
								// this.todos.push(todoText);
                this.todoService.addTodo(todoText);

                // addTodoToast will display after if addTodoAlert popup box is disappear.
                addTodoAlert.onDidDismiss(()=>{
                  // display success message
                  let addTodoToast = this.toastController.create({
                    message: "Todo is added successfully",
                    duration: 3000,
                    position: "middle"
                  });
                  addTodoToast.present();
                });

							}
						}
				]
  	});

  	addTodoAlert.present();
  	// present function actually used to show alert box
  }

  toggleReorder() {
  	this.reorderIsEnable = !this.reorderIsEnable;
  }

  itemReordered($event) {
  	reorderArray(this.todos, $event);
  	// reorderArray is in-built function.
  	// this.todos is current array name.
  	// $event get position of reordered array. get new position 
  }

  goToArchivePage() {
  	this.navCtrl.push(ArchivedTodosPage);
  }

  archiveTodo(todoIndex) {
    this.todoService.archivedTodo(todoIndex);
    // addTodoToast will display after if addTodoAlert popup box is disappear.
    // display success message
    let archivedTodoToast = this.toastController.create({
      message: "Todo add to archived successfully",
      duration: 3000,
      position: "middle"
    });
    archivedTodoToast.present();
  }

  editTodo(todoIndex) {
    let editTodoAlert = this.alertController.create({
      title: "Edit Todo",
      message: "Edit your todo",
      inputs: [
          {
            type: "text",
            name: "editTotoInput",
            value: this.todos[todoIndex]
          }
        ],

      buttons: [
          {
            text: "Cancel",
          },
          {
            text: "Edit",
            handler: (inputData)=>{
              let todoText;
              todoText = inputData.editTotoInput;
              // this.todos.push(todoText);
              this.todoService.editTodo(todoText, todoIndex);

              // addTodoToast will display after if editTodoAlert popup box is disappear.
              editTodoAlert.onDidDismiss(()=>{
                // display success message
                let editTodoToast = this.toastController.create({
                  message: "Todo is edited successfully",
                  duration: 3000,
                  position: "middle"
                });
                editTodoToast.present();
              });
            }
          }
        ]
    });

    editTodoAlert.present();
    // present function actually used to show alert box
  }

}
