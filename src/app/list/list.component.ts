import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
tasks= [];
task={name:"", pr:'L'};
dateTime;

  constructor() { }

  ngOnInit() {
  }
 
  addTask(){
    
    this.tasks.push({name:this.task.name, status:false, priority:this.task.pr});
    this.task.name="";
    this.task.pr="";
  }
  removeTask(i){
    this.tasks.splice(i, 1);
  }
  editTask(i){
    this.task.name=this.tasks[i].name;  
    this.task.pr = this.tasks[i].priority;
  }
  updateTask(i){
    this.tasks[i].name=this.task.name;
    this.tasks[i].priority = this.task.pr;
    this.task.name="";
    this.task.pr="";
  }
 changeStatus(i){
   this.tasks[i].status=!this.tasks[i].status;
 }
 pending(){
    let count =0;
    for(let task of this.tasks){
      if(!task.status)count++;
    }
    return count;
  }
  createdAt(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.dateTime = date+' '+time;
    return this.dateTime;
  }
}
