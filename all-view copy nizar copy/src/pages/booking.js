'use client'
import { useCallback, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Card,CardActions, CardHeader, CardContent, Container, Checkbox, Divider, Stack, TextField, Typography, Unstable_Grid2 as Grid, FormGroup, FormControlLabel } from '@mui/material';
// import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layoutclient';
import { Label } from "src/components/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "src/components/select"
import { Input } from "src/components/input"
import { padding } from '@mui/system';
import axios from 'axios';
import * as React from 'react';

async function DisplayBarberInfo(id){
    const response = await axios.get('http://localhost:8080/api/v1/users/displayBarbers/barberprofile/{barberid}' );
      console.log(response)
      console.log(response.data)
      if(response.status===200){
        location.reload()
      }
  }

async function bookBarber(id){
    console.log("book barber: "+id)
    const response = await axios.post('http://localhost:8080/api/v1/appointments/chooseAppointment/{barberId}/register-appointment' );
      console.log(response)
      console.log(response.data)
      if(response.status===200){
        location.reload()
      }
  }

// exportfunction ControlledCheckbox(){
//     const [checked, setChecked] = React.useState(true);
// }



const Page = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [checked, setChecked] = React.useState([false,false]);

    console.log(checked);
    
    const handleChange1 = (event) => {
        setChecked([event.target.checked, checked[1]]);
      };
    
    const handleChange2 = (event) => {
        setChecked([checked[0], event.target.checked]);
      };
        const [values, setValues] = useState({
          businessName: 'Cool Cuts',
          email: 'demo@devias.io',
          phone: '',
          workingDays: 'Monday Tuesday Wednesday Thursday Friday',
          workingHours: '10 18',
          haircutprice: '10',
          beardtrimprice: '5',
          location: '',
          social: ''
        })
      
    
    
    return (
        <>
            <Head>
                <title>
                    Barbers
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                        >
                            <Stack spacing={1}>
                                <Typography variant="h4">
                                    Barber profile
                                </Typography>
                                <Grid
                                xs={12}
                                md={6}
                                lg={12}
                                >
                                
                                </Grid>
                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                >
                                <Card>
        <CardHeader
         
          title=" "
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            

            <Grid
              container
              spacing={2}
            >
                <Grid
                xs={12}
                md={12}
              >
             <Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Announcement
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
        </Card>
              </Grid>
              <Grid
                xs={12}
                md={4}
              >
                
                
        <Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Business Name
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
        </Card>

              </Grid>
            <Grid
                xs={12}
                md={4}
            >   
        <Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Email address
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
        </Card>
                
              </Grid>
              <Grid
                xs={12}
                md={4}
              >
                <Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Phone Number
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
        </Card>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
            <Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Working Days
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
            </Card> 
              </Grid>
              
              <Grid
                xs={12}
                md={6}
              >
            <Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Working Hours
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
            </Card>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Haircut Price
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
        </Card>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Beard trim Price
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
        </Card>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Google Maps Location
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
        </Card>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
<Card variant="outlined" sx={{ minWidth: 10 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Social Media Profile
                </Typography>
                <Typography  component="div">
                    hello
                </Typography>
            </CardContent>
        </Card>
              </Grid>

            </Grid>
          </Box>
        </CardContent>
        <Divider />
      </Card>

                                </Stack>
                            </Stack>
                        </Stack>

                        <div key="1" className="px-4 py-12 space-y-6 md:space-y-8">
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold">Book your appointment</h1>
                                <p className="text-gray-500 dark:text-gray-400">Select your preferred service(s) and schedule an appointment</p>
                            </div>
                            <div className="space-y-4" style={{paddingBottom: '20px'}}>
                                <FormGroup style={{paddingBottom: '30px'}}>
                                    <FormControlLabel control={<Checkbox onChange={handleChange1} inputProps={{'aria-label':'controlled'}}/>} label="Haircut" />
                                    <FormControlLabel control={<Checkbox onChange={handleChange2} inputProps={{'aria-label':'controlled'}}/>} label="Beard trim" />
                                </FormGroup>
                                <div className="space-y-2" style={{paddingBottom: '30px'}}>
                                    <Label htmlFor="date">Date</Label>
                                    <Input id="date" type="date" value={selectedDate || ''} onChange={(e) => setSelectedDate(e.target.value)} />
                                </div>
                                <div className="space-y-2" style={{paddingBottom: '30px'}}>
                                    <Label htmlFor="time">Time</Label>
                                </div>
                                <Button variant="contained" onClick={()=>bookBarber(customer.userId)}>
                                    Book Appointment
                                </Button>
                            </div>
                        </div>
                    </Stack>
                </Container>
            </Box>

        </>
    )
}

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page