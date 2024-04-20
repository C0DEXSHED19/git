'use client'
import Head from 'next/head';
import { Box, Button, Container, Stack, SvgIcon, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { padding } from '@mui/system';
// import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';



const Page = () => {
    return (
        <>
            <Head>
                <title>
                    Sign out
                </title>
            </Head>

                <Container maxWidth="xl">
                    <Stack spacing={5}>
                        
                            <Stack spacing={3} style={{paddingTop: '300px'}}>
                                <Typography variant="h1" textAlign='center' >
                                    You signed out
                                </Typography>

                                </Stack>
                            </Stack>
                </Container>

        </>
    )
}

export default Page