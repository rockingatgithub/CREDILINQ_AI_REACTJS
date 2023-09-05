import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from './main.module.css'
import VerticalLinearStepper from './steps';

// =================== The main form component which is sent to the main page component ===================
const Form = (props: any) => {
    return <Box>

        <form>
            <Paper
                elevation={3}
                className={styles.main}
            >
                <VerticalLinearStepper />
            </Paper>
        </form>

    </Box>

}

export default Form


