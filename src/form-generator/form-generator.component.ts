import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressFormValues } from '../form-order/form-order.model';
import { JsonFormControls, JsonFormData, PredefinedFormValues } from './form-generator.model';
import { QuotationUserStateModel } from '../../../states/user/user-state.model';

@Component({
  selector: 'mav-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
})
export class FormGeneratorComponent implements OnInit, OnChanges {
  @Input() jsonFormData: JsonFormData;
  @Input() predefinedFormValues: PredefinedFormValues;
  @Input() public userQuotation!: QuotationUserStateModel;
  @Output() submitFormEvent = new EventEmitter<Object>();

  public myForm: FormGroup = this.fb.group({});
  public colsSpanClasses = '';
  public isInvalidAnticipatedMileage = true;
  private addressFormValues: AddressFormValues;
  private formFieldControlNames = [];
  private currentTerm: number;

  constructor(private fb: FormBuilder, private location: Location) {}

  ngOnInit() {
    this.formFieldControlNames = Object.keys(this.predefinedFormValues);
    this.jsonFormData.blocs.forEach((bloc) => {
      this.createForm(bloc.controls);
    });
    this.validateAnticipatedMileageOnExisting();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentTerm = this.userQuotation.currentTerm;
    this.updateDataThatHaveChanged(changes);
  }

  private updateDataThatHaveChanged(changes: SimpleChanges): void {
    this.formFieldControlNames
      .filter((controlName) => this.formFieldValueHasChanged(changes, controlName))
      .forEach((controlName) => {
        this.myForm.get(controlName)?.patchValue(this.predefinedFormValues[controlName]);
      });
  }

  private formFieldValueHasChanged(changes: SimpleChanges, controlName: string): boolean {
    return (
      !!changes?.predefinedFormValues?.currentValue?.[controlName] &&
      changes?.predefinedFormValues?.previousValue?.[controlName] !==
        changes?.predefinedFormValues?.currentValue?.[controlName]
    );
  }

  public backToPreviousPage(): void {
    this.location.back();
  }

  private createForm(controls: JsonFormControls[]): void {
    for (const control of controls) {
      const validatorsToAdd = [];
      if (control.validators) {
        for (const [key, value] of Object.entries(control.validators)) {
          switch (key) {
            case 'min':
              validatorsToAdd.push(Validators.min(value));
              break;
            case 'max':
              validatorsToAdd.push(Validators.max(value));
              break;
            case 'required':
              if (value) {
                validatorsToAdd.push(Validators.required);
              }
              break;
            case 'requiredTrue':
              if (value) {
                validatorsToAdd.push(Validators.requiredTrue);
              }
              break;
            case 'email':
              if (value) {
                validatorsToAdd.push(Validators.email);
              }
              break;
            case 'minLength':
              validatorsToAdd.push(Validators.minLength(value));
              break;
            case 'maxLength':
              validatorsToAdd.push(Validators.maxLength(value));
              break;
            case 'pattern':
              validatorsToAdd.push(Validators.pattern(value));
              break;
            case 'nullValidator':
              if (value) {
                validatorsToAdd.push(Validators.nullValidator);
              }
              break;
            case 'customValidatorFunction':
              if (value) {
                validatorsToAdd.push(value);
              }
              break;
            default:
              break;
          }
        }
      }
      this.myForm.addControl(
        control.name,
        this.fb.control(
          { value: this.patchValues(control.name, this.formFieldControlNames), disabled: control.disabled },
          validatorsToAdd,
        ),
      );
    }
  }

  public computeTotalMileage(): void {
    this.isInvalidAnticipatedMileage = true;
    const personalAnnual = this.myForm.value.personalAnnual ? parseInt(this.myForm.value.personalAnnual, 0) : 0;
    const businessAnnual = this.myForm.value.businessAnnual ? parseInt(this.myForm.value.businessAnnual, 0) : 0;
    this.myForm.get('businessContract')?.patchValue(this.computeContractValue(businessAnnual));
    this.myForm.get('personalContract')?.patchValue(this.computeContractValue(personalAnnual));
    this.myForm.get('totalAnnual')?.patchValue(personalAnnual + businessAnnual);
    this.myForm
      .get('totalContract')
      ?.patchValue(this.myForm.get('businessContract')?.value + this.myForm.get('personalContract')?.value);

    if (personalAnnual > 0 || businessAnnual > 0) {
      this.isInvalidAnticipatedMileage = false;
    }
  }

  private computeContractValue(businessAnnual: number): number {
    return (businessAnnual / 12) * this.currentTerm;
  }

  private validateAnticipatedMileageOnExisting(): void {
    this.isInvalidAnticipatedMileage = this.jsonFormData.blocs.some(
      (bloc) => bloc.title === 'quotation_form_anticipated_mileage',
    );
  }

  public onlyDecimalNumberKey(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  public patchValues(controlName: string, keys: string[]): string {
    if (keys?.includes(controlName)) {
      return this.predefinedFormValues[controlName];
    }
  }

  public updateAddressData($event: AddressFormValues): void {
    this.addressFormValues = $event;
  }

  public onSubmit(): void {
    if (this.myForm.valid) {
      const myFormValues = {
        ...this.myForm.getRawValue(),
        ...this.addressFormValues,
      };
      this.submitFormEvent.emit(myFormValues);
    }
  }
}
