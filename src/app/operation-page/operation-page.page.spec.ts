import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperationPagePage } from './operation-page.page';

describe('OperationPagePage', () => {
  let component: OperationPagePage;
  let fixture: ComponentFixture<OperationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
