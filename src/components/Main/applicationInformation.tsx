import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input';
import styles from './main.module.css'



const ApplicationInformationTextFields = (props: any) => {

    let isStepCompleted = false
    const [fullName, setFullName] = React.useState('')
    const [position, setPosition] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [emailConfirmation, setEmailConfirmation] = React.useState('')
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [fullNameTouched, setFullNameTouched] = React.useState(false)
    const [positionTouched, setPositionTouched] = React.useState(false)
    const [emailTouched, setEmailTouched] = React.useState(false)
    const [emailConfirmationTouched, setemailConfirmationTouched] = React.useState(false)
    const [mobileTouched, setMobileTouched] = React.useState(false)
    const [isFullNameError, setIsFullNameError] = React.useState(false)
    const [isPositionError, setIsPositionError] = React.useState(false)
    const [isEmailError, setIsEmailError] = React.useState(false)
    const [isConfirmEmailError, setIsConfirmEmailError] = React.useState(false)
    const [isMobileError, setIsMobileError] = React.useState(false)

    React.useEffect( () => {

        if ((fullNameTouched && fullName.length >= 8) 
            && (positionTouched && position.length >= 4)
            && (emailTouched && email.length >= 8)
            && (email === emailConfirmation)
            && (mobileTouched && mobileNumber.length >= 8)
        ) {
            isStepCompleted = true
        }
        if (fullNameTouched && fullName.length < 8) {
            setIsFullNameError(true)
            isStepCompleted = false
        }
        if (positionTouched && position.length < 8) {
            setIsPositionError(true)
            isStepCompleted = false
        }

        if (emailTouched && email.length < 8) {
            setIsEmailError(true)
            isStepCompleted = false
        }

        if (emailConfirmationTouched && (emailConfirmation.length < 8 || email !== emailConfirmation) ) {
            setIsConfirmEmailError(true)
            isStepCompleted = false
        }

        if (mobileTouched && mobileNumber.length < 8) {
            setIsMobileError(true)
            isStepCompleted = false
        }

        if(fullName.length >= 8) {
            setIsFullNameError(false)
        }

        if(position.length >= 8) {
            setIsPositionError(false)
        }

        if(email.length >= 8) {
            setIsEmailError(false)
        }

        if(emailConfirmation.length >= 8 && email === emailConfirmation) {
            setIsConfirmEmailError(false)
        }

        if(mobileNumber.length >= 8) {
            setIsMobileError(false)
        }

        props.setApplicationInformation({ fullName, position, email, emailConfirmation, mobileNumber, isStepCompleted })

    }, [fullName, position, email, emailConfirmation, mobileNumber,
        fullNameTouched, positionTouched, emailTouched, emailConfirmationTouched, mobileTouched
    ])

    const EmailAddressHelperText = <span>
        <span style={{ display: 'block' }} >{isEmailError ? "Email address is required" : null}</span>
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
                    error={isFullNameError}
                    id="outlined-error-helper-text-1"
                    className={styles['name-input']}
                    label="Full Name"
                    helperText={isFullNameError ? "Full Name is required" : null}
                    value={fullName}
                    onChange={event=> setFullName(event.target.value)}
                    onBlur={() => setFullNameTouched(true)}
                />
                <TextField
                    error={isPositionError}
                    id="outlined-error-helper-text-2"
                    label="Position within company"
                    helperText={isPositionError ? "Position within company is required" : null}
                    value={position}
                    onChange={event=> setPosition(event.target.value)}
                    onBlur={() => setPositionTouched(true)}
                />
            </div>
            <div className={styles['input-box']} >
                <TextField
                    error={isEmailError}
                    id="outlined-error-helper-text-1"
                    label="Email address"
                    helperText={EmailAddressHelperText}
                    value={email}
                    onChange={event=> setEmail(event.target.value)}
                    onBlur={() => setEmailTouched(true)}
                />
                <TextField
                    error={isConfirmEmailError}
                    id="outlined-error-helper-text-2"
                    label="Re-enter email address"
                    helperText={isConfirmEmailError ? "Email address is required" : null}
                    value={emailConfirmation}
                    onChange={event=> setEmailConfirmation(event.target.value)}
                    onBlur={() => setemailConfirmationTouched(true)}
                />
            </div>
            <div className={styles['telphone-input']} >
                <MuiTelInput
                    error={isMobileError}
                    id="outlined-error-helper-text-1"
                    label="Mobile Number"
                    helperText={isMobileError ? "Email address is required" : null}
                    value={mobileNumber}
                    onChange={value => setMobileNumber(value)}
                    onBlur={() => setMobileTouched(true)}
                />
            </div>
        </Box>
    )

}

export default ApplicationInformationTextFields