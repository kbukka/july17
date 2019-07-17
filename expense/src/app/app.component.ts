import { Component } from '@angular/core';
import { TableService } from './table.service';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  [x: string]: any;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
      
   userModel= new User(1,'',60);

    constructor(private tableService : TableService){}

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
      
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
}
  


