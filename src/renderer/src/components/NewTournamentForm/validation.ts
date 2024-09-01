import * as yup from 'yup';

export const DEFAULT_TOURNAMENT_FORM_VALUES = {
  name: '',
  city: '',
  country: '',
  startDate: new Date(),
  endDate: new Date()
};

export const TOURNAMENT_FORM_SCHEMA = yup.object().shape({
  name: yup.string().required('Name is required'),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required'),
  startDate: yup.date().required('Start date is required').nullable(),
  endDate: yup.date().required('End date is required').nullable()
});
