import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RplayingComponent } from './rplaying.component';

describe('RplayingComponent', () => {
  let component: RplayingComponent;
  let fixture: ComponentFixture<RplayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RplayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
