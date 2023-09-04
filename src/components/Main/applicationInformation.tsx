import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input';
import styles from './main.module.css'



const ApplicationInformationTextFields = (props: any) => {

    let isError = false
    let isStepCompleted = false
    const [fullName, setFullName] = React.useState('')
    const [position, setPosition] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [emailConfirmation, setEmailConfirmation] = React.useState('')
    const [mobileNumber, setMobileNumber] = React.useState('')

    

    React.useEffect( () => {

        if (fullName.length >= 8 
            && position.length >= 8
            && email.length >= 8
            && emailConfirmation === email
            && mobileNumber.length >= 8
            ) {
            isStepCompleted = true
        } else {
            isStepCompleted = false
        }

        props.setApplicationInformation({ fullName, position, email, emailConfirmation, mobileNumber, isStepCompleted })

    }, [fullName, position, email, emailConfirmation, mobileNumber])

    const EmailAddressHelperText = <span>
        <span style={{ display: 'block' }} >{isError ? "Email address is required" : null}</span>
        <span> The report will be delivered on this email address </span>
    </span>

    return (
        <Box
            component="div"
            sx={{
                '& .MuiTextField-root': { width: '48%',
                '@media screen and (max-width: 675px)': {
                    width: '100%',
                  },
            },
            }}
        >
            <div className={styles['input-box']} >
                <TextField
                    error={isError}
                    id="outlined-error-helper-text-1"
                    className={styles['name-input']}
                    label="Full Name"
                    helperText={isError ? "Full Name is required" : null}
                    value={fullName}
                    onChange={event=> setFullName(event.target.value)}
                />
                <TextField
                    error={isError}
                    id="outlined-error-helper-text-2"
                    label="Position within company"
                    helperText={isError ? "Position within company is required" : null}
                    value={position}
                    onChange={event=> setPosition(event.target.value)}
                />
            </div>
            <div className={styles['input-box']} >
                <TextField
                    error={isError}
                    id="outlined-error-helper-text-1"
                    label="Email address"
                    helperText={EmailAddressHelperText}
                    value={email}
                    onChange={event=> setEmail(event.target.value)}
                />
                <TextField
                    error={isError}
                    id="outlined-error-helper-text-2"
                    label="Re-enter email address"
                    helperText={isError ? "Email address is required" : null}
                    value={emailConfirmation}
                    onChange={event=> setEmailConfirmation(event.target.value)}
                />
            </div>
            <div className={styles['telphone-input']} >
                <MuiTelInput
                    error={isError}
                    id="outlined-error-helper-text-1"
                    label="Mobile Number"
                    helperText={isError ? "Email address is required" : null}
                    value={mobileNumber}
                    onChange={value => setMobileNumber(value)}
                />
            </div>
        </Box>
    )

}

export default ApplicationInformationTextFields