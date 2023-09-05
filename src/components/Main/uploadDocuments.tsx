import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import styles from './main.module.css'
import Data from '@/components/constants/ListData.tsx'
import BasicList from './basicList';

//  ======================== Upload document section of the form =====================

const UploadDocumentsTextFeild = (props: any) => {

    let isStepCompleted = false
    const [file, setFile] = React.useState(null)

    // ========================== The validation is added to check if a file has been added or not ===================
    React.useEffect(() => {
        if(file) {
            isStepCompleted = true
        } else {
            isStepCompleted = false
        }
        props.setDocumentInformation({file, isStepCompleted})
    }, [file])

    // ================= Below two methods support file upload using click as well as file drag and upload feature ===========
    const importData = () => {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
            // @ts-ignore
            let files = Array.from(input.files);
            // @ts-ignore
            setFile(files[0]);
        };
        input.click();
      }

      const importDragData = (event: any) => {
        event.preventDefault()
        // @ts-ignore
        setFile("item drop", event.dataTransfer.files[0])
      }

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
                onClick={importData}
                onDrop={importDragData}
                onDragOver={event => event.preventDefault()}
                
            >
                {/* @ts-ignore */}
                <input accept='application/pdf' type='file' multiple style={{ display: 'none' }} onChange={event => setFile(event.target.files[0])} />
                <UploadFileIcon />
                <Typography sx={{textAlign: 'center'}} ><span>Click to upload</span> or drag and drop Bank Statements</Typography>
            </Paper>
            <BasicList listData={Data.UploadDocumentsData} styleName='document-instructions' />
        </Box>
    )
}

export default UploadDocumentsTextFeild