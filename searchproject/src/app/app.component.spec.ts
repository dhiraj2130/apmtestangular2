/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPersonPipe } from './fetch-person.pipe';

describe('App: Searchproject', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent, FilterPersonPipe
      ],
    });

  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should initialise the personlist, searchstring', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.personname).toBe('');
    expect(app.personList).toBeDefined();
    var personList = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];
    expect(app.personList).toEqual(personList);
  });

  xit(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  it('should diplay all persons in ngfor  tag', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    app.personList=['Sean'];
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelectorAll('span').length).toBe(1);
  });

});
