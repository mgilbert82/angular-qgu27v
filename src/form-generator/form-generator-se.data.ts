import { JsonFormData } from './form-generator.model';

export const formDataContentSE: JsonFormData = {
  blocs: [
    {
      id: '1',
      title: '',
      controls: [
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
  ],
};
