import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonModule,
  FormControlRadioModule,
  FormInputModule,
  FormInputSearchModule,
  FormInputTextAreaModule,
} from '@arval/ngx-design-system';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule, Store } from '@ngxs/store';
import { StoreService } from 'src/app/legacy/features/core/store.service';
import { ColsSpanClassPrintPipe } from 'src/app/quotation/pipes/cols-span-class-generator.pipe';
import { NgxsStoreMock } from 'src/mocks/ngxs-store.mock';
import { PredefinedFormValues } from '../form-generator/form-generator.model';
import { AddressFormGbComponent } from '../form-order/address/address-form/address-form.component';
import { formDataContentGB } from './form-generator-gb.data';
import { FormGeneratorComponent } from './form-generator.component';

describe('FormGeneratorComponent', () => {
  let component: FormGeneratorComponent;
  let fixture: ComponentFixture<FormGeneratorComponent>;

  const formDataValues: PredefinedFormValues = {
    civility: 'a definir',
    vehicleToBeReplace: 'tesla',
    contactName: 'John Doe',
    firstName: 'Joe',
    lastName: 'Doe',
    companyName: 'Arval',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ButtonModule,
        FormControlRadioModule,
        FormInputModule,
        FormInputSearchModule,
        FormInputTextAreaModule,
        HttpClientModule,
        HttpClientTestingModule,
        NgxsModule.forRoot(),
        ReactiveFormsModule,
        TranslateModule.forRoot(),
      ],
      declarations: [FormGeneratorComponent, AddressFormGbComponent, ColsSpanClassPrintPipe],
      providers: [
        { provide: Store, useFactory: NgxsStoreMock.instance },
        { provide: StoreService },
        { provide: FormBuilder },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneratorComponent);
    component = fixture.componentInstance;
    component.predefinedFormValues = formDataValues;
    component.jsonFormData = formDataContentGB;
    fixture.detectChanges();
  });

  it('should return Tesla', () => {
    const ControlsToBePatch = ['civility', 'vehicleToBeReplace', 'contactName', 'firstName', 'lastName', 'companyName'];
    const controlName = 'vehicleToBeReplace';
    expect(component.patchValues(controlName, ControlsToBePatch)).toEqual('tesla');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
