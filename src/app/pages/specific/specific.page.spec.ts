import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecificPage } from './specific.page';

describe('SpecificPage', () => {
  let component: SpecificPage;
  let fixture: ComponentFixture<SpecificPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
