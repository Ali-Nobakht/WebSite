import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditurComponent } from './editur.component';

describe('EditurComponent', () => {
  let component: EditurComponent;
  let fixture: ComponentFixture<EditurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
