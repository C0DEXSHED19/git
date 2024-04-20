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

async function AnnouncementBarber(){
  const response = await axios.post('http://localhost:8080/api/v1/barbers/profile/announcement');
    console.log(response)
    console.log(response.data)
    if(response.status===200){
      location.reload()
    }
}
export const BarberAnnouncement = () => {
    const [values, setValues] = useState({
      text: "Write here..."
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
            //subheader="The information can be edited"
            title="Announcements"
          />
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ m: -1.5 }}>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  xs={12}
                  md={6}
                >
                  <TextField
                    fullWidth
                    helperText="Please write down the message you want to send"
                    label="Write here"
                    name="firstName"
                    onChange={handleChange}
                    //required
                    //value={values.text}
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="contained" onClick={()=>AnnouncementBarber()}>
              Submit
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