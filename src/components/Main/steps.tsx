import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styles from './main.module.css'
import ComapnyInformationTextFields from './companyInformation';
import ApplicationInformationTextFields from './applicationInformation';
import UploadDocumentsTextFeild from './uploadDocuments';
import TermsAndConditionsFields from './termsandconditions';


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
        component: <TermsAndConditionsFields />
    }
];

const VerticalLinearStepper = () => {
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
                className={styles.stepper}
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

export default VerticalLinearStepper