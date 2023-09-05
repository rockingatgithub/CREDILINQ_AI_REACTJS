import { Box } from "@mui/material";

// ================== The footer section is to show a blank gradient box ==================

const Footer = (props:any) => {
    return <>
        <Box
            sx={{
                height: 35,
                background: 'linear-gradient(266.33deg, rgb(213, 3, 125) 3.04%, rgb(118, 3, 113) 16.97%, rgb(25, 5, 83) 45.49%)'
            }}
        />
    </>
}

export default Footer;