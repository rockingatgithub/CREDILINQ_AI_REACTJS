import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




const ComapnyInformationTextFields = () => {

    const isError = false;

    return (
        <Box
            component="div"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '48%',
                '@media screen and (max-width: 675px)': {
                    width: '100%',
                  },
                },
                display: 'flex',
                justifyContent: 'space-between',
                '@media screen and (max-width: 675px)': {
                    flexWrap: 'wrap',
                  }
            }}
        >
            <TextField
                error={isError}
                id="outlined-error-helper-text-1"
                label="Company UEN"
                helperText={isError ? "Company UEN is required" : null}
            />
            <TextField
                error={isError}
                id="outlined-error-helper-text-2"
                label="Company Name"
                helperText={isError ? "Company Name is required" : null}
            />
        </Box>
    );
}

export default ComapnyInformationTextFields