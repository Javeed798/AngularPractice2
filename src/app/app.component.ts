import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice2';
  list:any[] =[]

  addTask(item:string){
    this.list.push({id:this.list.length,name: item})
    console.log(this.list);
  }

  remove(id:number){
    this.list = this.list.filter(item => item.id !== id)
    console.log(this.list);
    
  }
}
