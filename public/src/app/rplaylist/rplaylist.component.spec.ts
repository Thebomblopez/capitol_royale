import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RplaylistComponent } from './rplaylist.component';

describe('RplaylistComponent', () => {
  let component: RplaylistComponent;
  let fixture: ComponentFixture<RplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
