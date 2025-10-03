import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioEuComponent } from './envio-eu.component';

describe('EnvioEuComponent', () => {
  let component: EnvioEuComponent;
  let fixture: ComponentFixture<EnvioEuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioEuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioEuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
