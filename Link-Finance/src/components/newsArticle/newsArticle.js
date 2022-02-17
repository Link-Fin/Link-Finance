import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './newsArticle.css';

const newsArticle = ({ headline, summary, url }) => {
  return (
    <div className='usableBackground'>
      <Accordion className='articlesList'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="articleContent"
          id="articleHeader"
        >
          <Typography>{headline}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{summary}</Typography>
          <Typography><a href={url}>{url}</a></Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default newsArticle