import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';

const basicLayoutConfig = {
  content: 'six wide column',
  margin: 'five wide column'
}

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take the basic layout option after setting odd number', () => {
    component.contentWide = 1;
    component.ngOnInit();

    expect(component.layoutConfig).toEqual(basicLayoutConfig);
    
    component.contentWide = 10;
    component.ngOnInit();

    expect(component.layoutConfig).not.toEqual(basicLayoutConfig);
  })
});
