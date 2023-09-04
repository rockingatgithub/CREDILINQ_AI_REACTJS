import { Box, Typography } from "@mui/material"
import Image from "next/image"
import logo from '@/public/images/crediLinqAI.svg'

const Navbar = (props: any) => {

    return <Box
        sx={{
            height: '126px',
            backgroundImage: 'url("https://smehealthcheck.credilinq.ai/static/images/header-bg.jpg")',
            backgroundSize: 'cover'
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