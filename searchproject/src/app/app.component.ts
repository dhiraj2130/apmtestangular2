import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title
  personList
  personname ='';

  ngOnInit(){
    this.title = 'app works!';
    this.personList = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];
    this.personname = '';
  }
}


