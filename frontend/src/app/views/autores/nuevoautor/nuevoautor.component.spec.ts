import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoautorComponent } from './nuevoautor.component';

describe('NuevoautorComponent', () => {
  let component: NuevoautorComponent;
  let fixture: ComponentFixture<NuevoautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoautorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
