import * as yup from 'yup';

import form from '@/data/form.json';

const {
  validationMessages: {
    required,
    min,
    max,
    namePattern,
    phonePattern,
    emailPattern,
  },
} = form;

export const schema = yup.object({
  name: yup
    .string()
    .required(required)
    .min(2, min)
    .max(30, max)
    .matches(/^[a-zA-Zа-яА-Я\s'-]+$/, namePattern),
  phone: yup
    .string()
    .required(required)
    .matches(/^\+?3?8?(0\d{9})$/, phonePattern),
  email: yup.string().email(emailPattern),
  privacyPolicy: yup.boolean().oneOf([true]).required(),
});
