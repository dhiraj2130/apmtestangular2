import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  personList = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];
  displayPersonList = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];
  personname = '';
}


