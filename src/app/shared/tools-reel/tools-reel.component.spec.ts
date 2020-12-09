import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsReelComponent } from './tools-reel.component';

describe('ToolsReelComponent', () => {
  let component: ToolsReelComponent;
  let fixture: ComponentFixture<ToolsReelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsReelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
