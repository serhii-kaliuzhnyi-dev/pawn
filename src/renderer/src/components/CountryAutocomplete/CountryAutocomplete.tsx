import { Autocomplete, TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { countries } from './constants';

interface CountryAutocompleteProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  error?: boolean;
  helperText?: string;
}

const CountryAutocomplete = ({
  control,
  name,
  label,
  error,
  helperText,
}: CountryAutocompleteProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={countries}
          getOptionLabel={(option) => option.label}
          onChange={(_, value) => field.onChange(value ? value.label : '')}
          value={countries.find((c) => c.label === field.value) || null}
          renderInput={(params) => (
            <TextField {...params} label={label} error={error} helperText={helperText} required />
          )}
          fullWidth
        />
      )}
    />
  );
};

export default CountryAutocomplete;
