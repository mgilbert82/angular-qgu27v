import { JsonFormData } from './form-generator.model';

export const formDataContentGB: JsonFormData = {
  blocs: [
    {
      id: '1',
      title: '',
      controls: [
        {
          name: 'vehicleToBeReplace',
          label: 'quotation_form_vehicle_to_be_replaced',
          type: 'text',
          disabled: true,
          colsSpan: {
            default: 12,
          },
        },
        {
          name: 'contactName',
          label: 'quotation_form_contact_name',
          type: 'text',
          disabled: true,
          colsSpan: {
            default: 12,
            lg: 6,
          },
        },
        {
          name: 'companyName',
          label: 'quotation_form_company_name',
          type: 'text',
          disabled: true,
          colsSpan: {
            default: 12,
            lg: 6,
          },
        },
      ],
    },
    {
      id: '2',
      title: 'quotation_form_address_title',
      bgColor: true,
      controls: [
        {
          name: 'address',
          label: 'Address:',
          placeholder: 'address',
          value: '',
          type: 'addressGB',
          colsSpan: {
            default: 12,
          },
        },
      ],
    },
    {
      id: '3',
      controls: [
        {
          name: 'telephoneNumber',
          label: 'quotation_form_telephone',
          type: 'tel',
          messageError: 'quotation_invalid_format_error_message',
          colsSpan: {
            default: 12,
            lg: 6,
          },
          validators: {
            required: true,
            minLength: 11,
            maxLength: 11,
          },
        },
        {
          name: 'mobileNumber',
          label: 'quotation_form_mobile',
          type: 'tel',
          messageError: 'quotation_invalid_format_error_message',
          colsSpan: {
            default: 12,
            lg: 6,
          },
          validators: {
            required: true,
            minLength: 11,
            maxLength: 11,
          },
        },
        {
          name: 'emailAddress',
          label: 'quotation_form_email',
          type: 'email',
          messageError: 'quotation_invalid_format_error_message',
          colsSpan: {
            default: 12,
          },
          validators: {
            required: true,
            email: true,
          },
        },
        {
          name: 'deliveryInstructions',
          label: 'quotation_form_special_instruction',
          type: 'textarea',
          colsSpan: {
            default: 12,
          },
        },
      ],
    },
    {
      id: 'd4',
      title: 'quotation_form_anticipated_mileage',
      bgColor: true,
      controls: [
        {
          content: 'quotation_form_anticipated_mileage_personal',
          type: 'content',
          cssClasses: 'tw-flex tw-items-center',
          colsSpan: {
            default: 4,
          },
        },
        {
          name: 'personalAnnual',
          label: 'quotation_form_anticipated_mileage_annual',
          type: 'number',
          placeholder: '0',
          colsSpan: {
            default: 4,
          },
        },
        {
          name: 'personalContract',
          label: 'quotation_form_anticipated_mileage_contract',
          type: 'number',
          placeholder: '0',
          colsSpan: {
            default: 4,
          },
          disabled: true,
        },
        {
          content: 'quotation_form_anticipated_mileage_business',
          cssClasses: 'tw-flex tw-items-center',
          type: 'content',
          colsSpan: {
            default: 4,
          },
        },
        {
          name: 'businessAnnual',
          type: 'number',
          value: '0',
          placeholder: '0',
          colsSpan: {
            default: 4,
          },
        },
        {
          name: 'businessContract',
          type: 'number',
          value: '0',
          placeholder: '0',
          colsSpan: {
            default: 4,
          },
          disabled: true,
        },
        {
          content: 'quotation_form_anticipated_mileage_total',
          type: 'content',
          cssClasses: 'tw-flex tw-items-center',
          colsSpan: {
            default: 4,
          },
        },
        {
          name: 'totalAnnual',
          type: 'number',
          placeholder: '0',
          value: '0',
          colsSpan: {
            default: 4,
          },
          disabled: true,
        },
        {
          name: 'totalContract',
          type: 'number',
          placeholder: '0',
          value: '0',
          colsSpan: {
            default: 4,
          },
          disabled: true,
        },
      ],
    },
  ],
};
