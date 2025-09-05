import * as React from 'react';
import {Box,Button} from '@mui/material';
import TextField from '@mui/material/TextField';


export default function EnterName() {
  return (
    <>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' },"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center" }}
      noValidate
      autoComplete="off"

    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined"  style={{"width":"100%"}}/>
     <TextField id="outlined-basic" label="Outlined" variant="outlined"  style={{"width":"100%"}}/>
     <Button variant='contained'>Next</Button>
      
    </Box>
    </>
  );
}
