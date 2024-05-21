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
    .matches(/^[А-ЯҐЄІЇа-яґєіїA-Za-z\s'-]+$/u, namePattern),
  phone: yup
    .string()
    .required(required)
    .matches(/^(\+38\d{10}|\+370\d{8})$/i, phonePattern),
  email: yup.string().email(emailPattern),
  privacyPolicy: yup.boolean().oneOf([true]).required(),
});
