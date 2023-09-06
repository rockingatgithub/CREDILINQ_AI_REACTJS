import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import styles from './main.module.css'
import ComapnyInformationTextFields from './companyInformation';
import ApplicationInformationTextFields from './applicationInformation';
import UploadDocumentsTextFeild from './uploadDocuments';
import TermsAndConditionsFields from './termsandconditions';

// ===================== The main stepper component to combine all the steps together along with dynamically 
// rendering component in the steps. ==================

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
    const [allStepsCompleted, setAllStepsCompleted] = React.useState(false)

    // ============== Sending form data to backend ==================
    const submitHandler = async () => {

        const obj = {...companyInformation, ...applicationInformation, ...termsAndConditions}

        const body = new FormData()
        // @ts-ignore
        body.append('file', documentInformation.file)
        const Keys = Object.keys(obj)
        Keys.forEach(key => {
            // @ts-ignore
            body.append( key, obj[key] )
        })

        console.log("the final body", body)

        const response = await fetch('http://localhost:8000', {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        const parsedResponse = await response.json()
        if(response.status === 200) {
            if(parsedResponse.verified){
                alert("form verified")
            }
        }
    }

    // =============== stateArray is to share states with different components ===================
    const stateArray = [
        {
            info: companyInformation, setCompanyInformation,
        },
        {
            info: applicationInformation, setApplicationInformation
        },
        {
            info: documentInformation, setDocumentInformation
        },
        {
            info: termsAndConditions, setTermsAndConditions, submitHandler, allStepsCompleted
        }
    ]

    React.useEffect(() => {
        // @ts-ignore
        const areAllStepsCompleted = stateArray.every( steps => steps.info.isStepCompleted )
        setAllStepsCompleted(!areAllStepsCompleted)

    }, [companyInformation, applicationInformation, documentInformation, termsAndConditions])


    return (
        <Box>
            <Stepper
                orientation="vertical"
                className={styles.stepper}
            >
                {steps.map((step, index) => (
                    <Step key={step.label} active={true}>
                        <StepLabel sx={{
                            '& .MuiSvgIcon-root': {
                                // @ts-ignore
                                color: stateArray[index]?.info?.isStepCompleted ? '#509050' : '#1976d2'
                            }
                        }} >
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