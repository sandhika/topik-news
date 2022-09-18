import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopikListComponent } from './topik-list.component';

describe('TopikListComponent', () => {
  let component: TopikListComponent;
  let fixture: ComponentFixture<TopikListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopikListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
