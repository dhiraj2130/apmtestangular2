/**
 * Created by dhiraj on 14/11/2016.
 */
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPersonPipe } from './fetch-person.pipe';

describe('fetch-person.pipe: filtersearch', () => {

  let pipe:FilterPersonPipe;

  beforeEach(() => {
    pipe = new FilterPersonPipe();
  });

  it('should filter list with a given name', async(() => {
    var personList = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];
    var filteredList = ['Sean'];
    expect(pipe.transform(personList,'Sean')).toEqual(filteredList);
  }));
});
