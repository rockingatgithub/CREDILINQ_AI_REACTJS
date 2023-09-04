import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




const ComapnyInformationTextFields = (props: any) => {

    let isError = false;
    let isStepCompleted = false;
    const [companyUEN, setCompanyUEN] = React.useState('')
    const [companyName, setCompanyName] = React.useState('')

    React.useEffect( () => {

        if (companyName.length >= 8 && companyUEN.length >= 8) {
            isStepCompleted = true
        } else {
            isStepCompleted = false
        }

        props.setCompanyInformation({ companyUEN, companyName, isStepCompleted })

    }, [companyUEN, companyName])

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
                value={companyUEN}
                onChange={event => setCompanyUEN(event.target.value)}
            />
            <TextField
                error={isError}
                id="outlined-error-helper-text-2"
                label="Company Name"
                helperText={isError ? "Company Name is required" : null}
                value={companyName}
                onChange={event => setCompanyName(event.target.value)}
            />
        </Box>
    );
}

export default ComapnyInformationTextFields