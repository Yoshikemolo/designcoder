import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapperComponent } from './swapper.component';

describe('SwapperComponent', () => {
  let component: SwapperComponent;
  let fixture: ComponentFixture<SwapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
