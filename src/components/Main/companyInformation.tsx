import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




const ComapnyInformationTextFields = (props: any) => {

    let isStepCompleted = false;
    const [companyUEN, setCompanyUEN] = React.useState('')
    const [companyName, setCompanyName] = React.useState('')
    const [companyUENTouched, setCompanyUENTouched] = React.useState(false)
    const [companyNameTouched, setCompanyNameTouched] = React.useState(false)
    const [companyUENError, setCompanyUENError] = React.useState(false)
    const [companyNameError, setCompanyNameError] = React.useState(false)


    React.useEffect( () => {

        if ((companyUENTouched && companyUEN.length >= 8) 
            && (companyNameTouched && companyName.length >= 8)) {
            isStepCompleted = true
        }
        if (companyUENTouched && companyUEN.length < 8) {
            setCompanyUENError(true)
            isStepCompleted = false
        }
        if (companyNameTouched && companyName.length < 8) {
            setCompanyNameError(true)
            isStepCompleted = false
        }

        if(companyName.length >= 8) {
            setCompanyNameError(false)
        }

        if(companyUEN.length >= 8) {
            setCompanyUENError(false)
        }

        props.setCompanyInformation({ companyUEN, companyName, isStepCompleted })

    }, [companyUEN, companyName, companyNameTouched, companyUENTouched])

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
                error={companyUENError}
                id="outlined-error-helper-text-1"
                label="Company UEN"
                helperText={companyUENError ? "Company UEN is required" : null}
                value={companyUEN}
                onChange={event => setCompanyUEN(event.target.value)}
                onBlur={() => setCompanyUENTouched(true)}
            />
            <TextField
                error={companyNameError}
                id="outlined-error-helper-text-2"
                label="Company Name"
                helperText={companyNameError ? "Company Name is required" : null}
                value={companyName}
                onChange={event => setCompanyName(event.target.value)}
                onBlur={() => setCompanyNameTouched(true)}
            />
        </Box>
    );
}

export default ComapnyInformationTextFields