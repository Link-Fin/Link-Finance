import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './newsArticle.css';

const NewsArticle = ({ articleKey, headline, summary, url }) => {
  return (
    <div key={articleKey} className='usableBackground'>
      <div className='articleBackground'>
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
            <Typography>
              <Button href={url} target="_blank" rel="noopener noreferrer">{url}</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default NewsArticle