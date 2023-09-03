import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DoneIcon from '@mui/icons-material/Done';
import { Checkbox, FormControlLabel } from '@mui/material';

const UploadDocumentsData = [
    "PDFs (not scanned copies) of company's operating bank current account(s) statements for the past 6 months.Example: If today is 04 Sep 23, then please upload bank statements from Mar 23 to Aug 23 (both months inclusive)",
    "If your company is multi-banked, then please upload 6 months bank statements for each bank account",
    "If your file is password protected, we request you to remove the password and upload the file to avoid submission failure",
    "In case if you are facing any issue while uploading bank statements, Please contact us on support@credilinq.ai"
]

const TermsAndConditionsData = [
    'I confirm that I am the authorized person to upload bank statements on behalf of my company',
    'I assure you that uploaded bank statements and provided company information match and are of the same company, if there is a mismatch then my report will not be generated',
    'I understand that this is a general report based on the bank statements and Credilinq is not providing a solution or guiding me for my business growth',
    'I have read and understand the Terms & Conditions'
]

const ComapnyInformationTextFields = () => {

    const isError = false;

    return (
        <Box
            component="div"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '48%' },
            }}
        >
            <div>
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
            </div>
        </Box>
    );
}

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
                '& .MuiTextField-root': { m: 1, width: '48%' },
            }}
        >
            <div>
                <TextField
                    error={isError}
                    id="outlined-error-helper-text-1"
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
            <div>
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
            <div>
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

const UploadDocumentsTextFeild = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '48%'
                }}
            >
                <input accept='application/pdf' type='file' multiple style={{ display: 'none' }} />
                <UploadFileIcon />
                <Typography><span>Click to upload</span> or drag and drop Bank Statements</Typography>
            </Box>
            <BasicList listData={UploadDocumentsData} />
        </Box>
    )
}

const TermsAndConditionFields = () => {

    return (
        <Box>
            <FormControlLabel 
                control={<Checkbox />} 
                label="By ticking, you are confirming that you have understood and are agreeing to the details mentioned:"
            />
            <BasicList listData={TermsAndConditionsData} />
            <Button> SUBMIT </Button>
        </Box>
    )

}

const steps = [
    {
        label: 'Company Information',
        component: <ComapnyInformationTextFields />
    },
    {
        label: 'Applicant Information',
        component: <ApplicationInformationTextFields />
    },
    {
        label: 'Upload Documents',
        component: <UploadDocumentsTextFeild />
    },
    {
        label: 'Terms & Conditions',
        component: <TermsAndConditionFields />
    }
];

function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box>
            <Stepper activeStep={activeStep}
                orientation="vertical"
                sx={{
                    width: '90%',
                    margin: 'auto',
                }}
            >
                {steps.map((step, index) => (
                    <Step key={step.label} active={true}>
                        <StepLabel>
                            <Box
                                sx={{
                                    background: 'rgb(96, 26, 121)',
                                    color: 'white',
                                    borderRadius: '4px',
                                    padding: '8px',
                                    fontSize: '16px'
                                }}
                            >
                                {step.label}
                            </Box>
                        </StepLabel>
                        <StepContent>

                            <Box sx={{ mb: 2 }}>

                                {step.component}

                                {/* <div>
                <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                >
                    Back
                </Button>
                </div> */}
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}

const Form = (props: any) => {
    return <Box>

        <form>
            <Paper
                sx={{
                    width: '90%',
                    margin: 'auto'
                }}
                elevation={3}>

                <VerticalLinearStepper />

            </Paper>
        </form>

    </Box>

}

export default Form

const BasicList = (props:any) => {
    return (
        <Box sx={{ width: '48%', bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    {
                        props.listData.map( (data: string) =>
                            <ListItem>
                                <ListItemIcon>
                                    <DoneIcon />
                                </ListItemIcon>
                                <ListItemText primary={data} />
                            </ListItem>
                        )
                    }
                </List>
            </nav>
        </Box>
    );
}


