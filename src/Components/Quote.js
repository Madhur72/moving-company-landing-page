import { Paper ,Typography} from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "../App.css"
const Quote = ({text,option1,option2}) => {
  return (
    
      <Paper elevation={12} sx={{width:"400px",height:"100px"}}>
        <div className='quote-container'>
      <Typography>{text}</Typography>
            <FormControl>
              <RadioGroup row defaultValue={option1}>
                <FormControlLabel
                  value={option1}
                  control={<Radio />}
                  label={option1}
                />
                <FormControlLabel
                  value={option2}
                  control={<Radio />}
                  label={option2}
                />
              </RadioGroup>
            </FormControl>
            </div>
      </Paper>
  )
}

export default Quote
