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
        Component:  (props: any) => <ComapnyInformationTextFields { ...props } />
    },
    {
        label: 'Applicant Information',
        Component: (props: any) => <ApplicationInformationTextFields { ...props } />
    },
    {
        label: 'Upload Documents',
        Component: (props: any) => <UploadDocumentsTextFeild { ...props } />
    },
    {
        label: 'Terms & Conditions',
        Component: (props: any) => <TermsAndConditionsFields { ...props } />
    }
];

const VerticalLinearStepper = () => {

    const [companyInformation, setCompanyInformation] = React.useState({})
    const [applicationInformation, setApplicationInformation] = React.useState({})
    const [documentInformation, setDocumentInformation] = React.useState({})
    const [termsAndConditions, setTermsAndConditions] = React.useState({})

    const stateArray = [
        {
            companyInformation, setCompanyInformation
        },
        {
            applicationInformation, setApplicationInformation
        },
        {
            documentInformation, setDocumentInformation
        },
        {
            termsAndConditions, setTermsAndConditions
        }
    ]

    React.useEffect(() => {

        console.log("any state changed!", companyInformation, applicationInformation, documentInformation, termsAndConditions)

    }, [companyInformation, applicationInformation, documentInformation, termsAndConditions])


    return (
        <Box>
            <Stepper
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
                                <step.Component { ...stateArray[index] } />
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default VerticalLinearStepper