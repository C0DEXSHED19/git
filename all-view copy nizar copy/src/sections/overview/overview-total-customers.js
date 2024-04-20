import PropTypes from 'prop-types';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';


export async function getValue(){

  try {
    const response = await axios.get('http://localhost:8080/api/v1/appointments/{barberId}/profile/appointmentsHistorySizes');
    console.log(response)
    console.log(response.data)
    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return {
    props: {
      data: [], // Provide a default empty array for the data prop
    },
  };

}

export const OverviewTotalCustomers = (props) => {
  const { sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Total Customers
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <UsersIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTotalCustomers.propTypes = {
  value: PropTypes.string.isRequired,

};

