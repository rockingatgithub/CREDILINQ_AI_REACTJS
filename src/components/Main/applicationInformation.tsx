import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input';
import styles from './main.module.css'



const ApplicationInformationTextFields = () => {

    const isError = false

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
                />
                <TextField
                    error={isError}
                    id="outlined-error-helper-text-2"
                    label="Position within company"
                    helperText={isError ? "Position within company is required" : null}
                />
            </div>
            <div className={styles['input-box']} >
                <TextField
                    error={isError}
                    id="outlined-error-helper-text-1"
                    label="Email address"
                    helperText={EmailAddressHelperText}
                />
                <TextField
                    error={isError}
                    id="outlined-error-helper-text-2"
                    label="Re-enter email address"
                    helperText={isError ? "Email address is required" : null}
                />
            </div>
            <div className={styles['telphone-input']} >
                <MuiTelInput
                    error={isError}
                    id="outlined-error-helper-text-1"
                    label="Mobile Number"
                    helperText={isError ? "Email address is required" : null}
                />
            </div>
        </Box>
    )

}

export default ApplicationInformationTextFields