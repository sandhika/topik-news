import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopikDetailComponent } from './topik-detail.component';

describe('TopikDetailComponent', () => {
  let component: TopikDetailComponent;
  let fixture: ComponentFixture<TopikDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopikDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopikDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
