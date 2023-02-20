import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice2';
  list:any[] =[]
  data=0;

  addTask(item:string){
    this.list.push({id:this.list.length,name: item})
    console.log(this.list);
  }

  remove(id:number){
    this.list = this.list.filter(item => item.id !== id)
    console.log(this.list);
  }

  updateChild() {
    this.data = Math.floor(Math.random()*10);
  }


  userDetails = [
    {name:'Javeed', email:'javeed@test.com'},
    {name:'Ninja', email:'Ninja@test.com'},
    {name:'Sharif', email:'Sharif@test.com'},
    {name:'dumbu', email:'dumbu@test.com'}
  ]

  data1 = "X"

  updateData(event:any){
    console.log("hello"+event);
    this.data1 = event
  }
  name1:any
}
