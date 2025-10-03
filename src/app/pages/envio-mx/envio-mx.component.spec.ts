import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioMxComponent } from './envio-mx.component';

describe('EnvioMxComponent', () => {
  let component: EnvioMxComponent;
  let fixture: ComponentFixture<EnvioMxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioMxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
