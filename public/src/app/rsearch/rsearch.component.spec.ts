import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsearchComponent } from './rsearch.component';

describe('RsearchComponent', () => {
  let component: RsearchComponent;
  let fixture: ComponentFixture<RsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
