import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

async function DisplayBarberInfo(){
  const response = await axios.get('http://localhost:8080/api/v1/users/displayBarbers/barberprofile/{barberid}' );
    console.log(response)
    console.log(response.data)
    if(response.status===200){
      location.reload()
    }
}
export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    businessName: 'danny cuts',
    email: 'demo@devias.io',
    phone: '',
    workingDays: '',
    workingHours: '10 18',
    haircutprice: '10',
    beardtrimprice: '5'
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={12}
              >
                <TextField
                  fullWidth
                  label="Business name"
                  name="businessName"
                  onChange={handleChange}
                  required
                  value={values.businessName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Working days"
                  name="Mon-Fri"
                  onChange={handleChange}
                  required
                  type="text"
                  defaultValue={values.workingDays}
                  // value='hey'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Working hours range"
                  name="workinghours"
                  onChange={handleChange}
                  required
                  defaultValue={values.workingHours}
                  // value={values.workingHours}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Haircut Price"
                  name="haircutprice"
                  onChange={handleChange}
                  required
                  value={values.haircutprice}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Beard Trim Price"
                  name="beardtrimprice"
                  onChange={handleChange}
                  value={values.beardtrimprice}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Google maps location"
                  name="location"
                  onChange={handleChange}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Social Media Profile"
                  name="profilelink"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save details
          </Button>
        </CardActions>
      </Card>

      {/* <Card>
        <CardHeader
          subheader="Broadcast announcements to all your clients"
          title="Announcements"
        />
      </Card> */}
    </form>
    
  );
};
