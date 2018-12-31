import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpClientModule } from '@angular/common/http';  // import http module.
// generate new page using `ionic generate page archivedTodos` command.
import { ArchivedTodosPage } from '../pages/archived-todos/archived-todos'; // we add page ArchivedTodos so now we import here.
import { TodoService } from '../providers/todo-service/todo-service'; 


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArchivedTodosPage   // declare ArchivedTodosPage.
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   // import additionaly
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArchivedTodosPage   // also define here.
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoService
  ]
})
export class AppModule {}
