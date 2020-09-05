import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabpagePage } from './fabpage.page';

describe('FabpagePage', () => {
  let component: FabpagePage;
  let fixture: ComponentFixture<FabpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FabpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
