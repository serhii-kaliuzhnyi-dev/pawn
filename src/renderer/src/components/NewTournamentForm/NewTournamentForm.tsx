import {
  Button,
  TextField,
  Typography,
  Autocomplete,
  Box,
  FormGroup,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonContainer, StyledGrid } from './styled';
import { countries } from '../CountryAutocomplete/constants';
import {
  DEFAULT_TOURNAMENT_FORM_VALUES,
  TOURNAMENT_FORM_SCHEMA,
} from './validation';
import dayjs from 'dayjs';
import CountryAutocomplete from '../CountryAutocomplete';

type TournamentFormValues = {
  name: string;
  city: string;
  country: string;
  startDate: Date | null;
  endDate: Date | null;
};

const TournamentForm = () => {
  const { t } = useTranslation();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TournamentFormValues>({
    defaultValues: DEFAULT_TOURNAMENT_FORM_VALUES,
    resolver: yupResolver(TOURNAMENT_FORM_SCHEMA),
  });

  const onSubmit = (data: TournamentFormValues) => {
    console.log('Form data:', data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ padding: 3, maxWidth: '1200px' }}>
      <Typography variant="h5" color="black" gutterBottom>
        {t('newTournament')}
      </Typography>
      <FormGroup>
        <StyledGrid container spacing={2}>
          <StyledGrid size={{ mobile: 12, laptop: 12, desktop: 12 }}>
            <TextField
              fullWidth
              label={t('name')}
              {...register('name')}
              error={Boolean(errors.name)}
              helperText={errors.name ? errors.name.message : ''}
              required
            />
          </StyledGrid>
          <StyledGrid size={{ mobile: 12, laptop: 6, desktop: 6 }}>
            <TextField
              fullWidth
              label={t('city')}
              {...register('city')}
              error={Boolean(errors.city)}
              helperText={errors.city ? errors.city.message : ''}
              required
            />
          </StyledGrid>
          <StyledGrid size={{ mobile: 12, laptop: 6, desktop: 6 }}>
            <CountryAutocomplete
              control={control}
              name="country"
              label={t('country')}
              error={Boolean(errors.country)}
              helperText={errors.country ? errors.country.message : ''}
            />
          </StyledGrid>
          <StyledGrid size={{ mobile: 6, laptop: 6, desktop: 6 }}>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label={t('start_date')}
                  onChange={(date) => field.onChange(date)}
                  value={dayjs(field.value)}
                />
              )}
            />
          </StyledGrid>
          <StyledGrid size={{ mobile: 6, laptop: 6, desktop: 6 }}>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label={t('end_date')}
                  onChange={(date) => field.onChange(date)}
                  value={dayjs(field.value)}
                />
              )}
            />
          </StyledGrid>
          <StyledGrid size={{ mobile: 12, laptop: 12, desktop: 12 }}>
            <ButtonContainer>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                sx={{ textTransform: 'none' }} // Prevent text from being uppercase
              >
                {t('continue')}
              </Button>
              <Button 
                variant="outlined" 
                sx={{
                  color: 'gray',
                  borderColor: 'gray',
                  textTransform: 'none', // Prevent text from being uppercase
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    borderColor: 'gray',
                  },
                }}
              >
                {t('cancel')}
              </Button>
            </ButtonContainer>
          </StyledGrid>
        </StyledGrid>
      </FormGroup>
    </Box>
  );
};

export default TournamentForm;
