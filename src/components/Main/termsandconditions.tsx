import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Checkbox, FormControlLabel } from '@mui/material';
import Data from '@/components/constants/ListData.tsx'
import BasicList from './basicList';


const TermsAndConditionsFields = () => {

    return (
        <Box>
            <FormControlLabel
                control={<Checkbox />}
                label="By ticking, you are confirming that you have understood and are agreeing to the details mentioned:"
            />
            <BasicList listData={Data.TermsAndConditionsData} styleName='terms-and-conditions' />
            <Button
                variant="contained"
                sx={{
                    marginBottom: '16px',
                    float: 'right'
                }}
            >
                SUBMIT
            </Button>

        </Box>
    )

}

export default TermsAndConditionsFields