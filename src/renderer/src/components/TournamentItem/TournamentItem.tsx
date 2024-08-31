import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import GroupIcon from '@mui/icons-material/Group';
import LoopIcon from '@mui/icons-material/Loop';
import GrainIcon from '@mui/icons-material/Grain';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledSection, FlexContainer, IconTextBox } from './styled';

const TournamentItem = ({ date, count, status, ratio, location }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledSection component="section">
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={null}
          aria-controls="panel-content"
          id="panel-header"
        >
           <Typography variant="h6">
            Tournament name
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              width: '100%',
              mt: 1 
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 2 
              }}
            >
              {[
                { Icon: AppRegistrationIcon, text: date },
                { Icon: GroupIcon, text: count },
                { Icon: LoopIcon, text: status },
                { Icon: GrainIcon, text: ratio }
              ].map(({ Icon, text }, index) => (
                <IconTextBox key={index}>
                  <Icon />
                  <Typography variant="body1">{text}</Typography>
                </IconTextBox>
              ))}
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1 
              }}
            >
              <LocationOnIcon />
              <Typography variant="body1">{location}</Typography>
            </Box> 
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <FlexContainer>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab magni totam maiores ipsum mollitia ullam! In quaerat fuga aliquam?
            </Typography>
          </FlexContainer>
        </AccordionDetails>
      </Accordion>
    </StyledSection>
  );
};

export default TournamentItem;
