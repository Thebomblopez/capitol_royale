import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReventsComponent } from './revents.component';

describe('ReventsComponent', () => {
  let component: ReventsComponent;
  let fixture: ComponentFixture<ReventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
