import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataparticipantComponent } from './dataparticipant.component';

describe('DataparticipantComponent', () => {
  let component: DataparticipantComponent;
  let fixture: ComponentFixture<DataparticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataparticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
