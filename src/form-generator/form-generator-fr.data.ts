import { JsonFormData } from './form-generator.model';

export const formDataContentFR: JsonFormData = {
  blocs: [
    {
      id: '2',
      title: 'conducteur',
      bgColor: true,
      controls: [
        {
          name: 'civility',
          label: 'Civilité',
          value: ['madame', 'monsieur'],
          type: 'radio',
          colsSpan: {
            default: 12,
            lg: 6,
          },
          validators: {
            required: true,
          },
        },
        {
          name: 'lastName',
          label: 'nom:',
          placeholder: 'nom',
          value: '',
          type: 'text',
          colsSpan: {
            default: 12,
            lg: 6,
          },
          validators: {
            required: true,
          },
        },
        {
          name: 'firstName',
          label: 'prénom:',
          placeholder: 'prénom',
          value: '',
          type: 'text',
          colsSpan: {
            default: 12,
            lg: 6,
          },
          validators: {
            required: true,
          },
        },
        {
          name: 'companyName',
          label: 'quotation_form_company_name',
          type: 'text',
          disabled: true,
          colsSpan: {
            default: 12,
          },
          validators: {
            required: true,
          },
        },
        {
          name: 'emailAddress',
          label: 'quotation_form_email',
          type: 'email',
          messageError: 'quotation_invalid_format_error_message',
          colsSpan: {
            default: 12,
            lg: 6,
          },
          validators: {
            required: true,
            email: true,
          },
        },
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
            minLength: 10,
            maxLength: 10,
          },
        },
      ],
    },
    {
      id: '3',
      title: 'adresse de livraison',
      controls: [
        {
          name: 'houseNumberOrName',
          label: 'quotation_form_address_number',
          type: 'text',
          colsSpan: {
            default: 12,
            lg: 6,
          },
        },
        {
          name: 'street',
          label: 'quotation_form_address_street',
          type: 'text',
          colsSpan: {
            default: 12,
            lg: 6,
          },
        },
        {
          name: 'postCode',
          label: 'quotation_form_address_postal_code',
          type: 'text',
          colsSpan: {
            default: 12,
            lg: 6,
          },
        },
        {
          name: 'town',
          label: 'quotation_form_address_town',
          type: 'text',
          colsSpan: {
            default: 12,
            lg: 6,
          },
        },
      ],
    },
    {
      id: '4',
      bgColor: true,
      controls: [
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
          content: 'total',
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
          disabled: true,
          placeholder: '0',
          colsSpan: {
            default: 4,
          },
        },
      ],
    },
  ],
};
