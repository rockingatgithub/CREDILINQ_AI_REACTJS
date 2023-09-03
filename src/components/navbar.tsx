import { Box, Typography } from "@mui/material"
import Image from "next/image"
import logo from '@/public/images/crediLinqAI.svg'

const Navbar = (props: any) => {

    return <Box
        sx={{
            background: 'linear-gradient(266.33deg, rgb(213, 3, 125) 3.04%, rgb(118, 3, 113) 16.97%, rgb(25, 5, 83) 45.49%)',
            height: '100px'
        }}
    >
        <Box
            sx={{
                width: '80%',
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'auto',
                alignItems: 'center'
            }}
        >

            <span>
                <Image src={logo} 
                    alt="main-image" 
                    width="100"
                    height="100"
                />
            </span>

            <Typography 
                component="p"
                sx={{
                    color: 'white',
                    fontSize: '24px',
                    height: '30px'
                }}
            >
                SME HealthCheck - Get Started
            </Typography>

        </Box>
    </Box>

}

export default Navbar