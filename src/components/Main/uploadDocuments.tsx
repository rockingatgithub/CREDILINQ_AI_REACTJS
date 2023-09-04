import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import styles from './main.module.css'
import Data from '@/components/constants/ListData.tsx'
import BasicList from './basicList';


const UploadDocumentsTextFeild = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
            className={styles['document-box']}
        >
            <Paper
                className={styles['upload-box']}
                variant='outlined'
            >
                <input accept='application/pdf' type='file' multiple style={{ display: 'none' }} />
                <UploadFileIcon />
                <Typography sx={{textAlign: 'center'}} ><span>Click to upload</span> or drag and drop Bank Statements</Typography>
            </Paper>
            <BasicList listData={Data.UploadDocumentsData} styleName='document-instructions' />
        </Box>
    )
}

export default UploadDocumentsTextFeild