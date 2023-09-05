import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';
import styles from './main.module.css'

// ===================== This component renders list for upload documents and terms and conditions. ==================
const BasicList = (props: any) => {
    return (
        <Box 
            sx={{ width: '48%', bgcolor: 'background.paper' }}
            className={styles[props.styleName]}    
        >
            <nav aria-label="main mailbox folders">
                <List>
                    {
                        props.listData.map((data: string) =>
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

export default BasicList