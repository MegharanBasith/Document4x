import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkDownLoadComponent } from './mark-down-load.component';

describe('MarkDownLoadComponent', () => {
  let component: MarkDownLoadComponent;
  let fixture: ComponentFixture<MarkDownLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkDownLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkDownLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
