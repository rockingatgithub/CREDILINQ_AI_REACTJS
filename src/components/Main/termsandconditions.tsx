import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Checkbox, FormControlLabel } from '@mui/material';
import Data from '@/components/constants/ListData.tsx'
import BasicList from './basicList';


const TermsAndConditionsFields = (props: any) => {

    let isStepCompleted = false
    const [isChecked, setIsChecked] = React.useState(false)

    React.useEffect(() => {

        if (isChecked) {
            isStepCompleted = true
        } else {
            isStepCompleted = false
        }

        props.setTermsAndConditions({ isChecked, isStepCompleted })
    }, [isChecked])

    return (
        <Box>
            <FormControlLabel
                control={<Checkbox onChange={event => setIsChecked(event.target.checked)} />}
                label="By ticking, you are confirming that you have understood and are agreeing to the details mentioned:"
            />
            <BasicList listData={Data.TermsAndConditionsData} styleName='terms-and-conditions' />
            <Button
                variant="contained"
                sx={{
                    marginBottom: '16px',
                    float: 'right'
                }}
                onClick={props.submitHandler}
            >
                SUBMIT
            </Button>

        </Box>
    )

}

export default TermsAndConditionsFields