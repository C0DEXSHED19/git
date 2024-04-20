import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layoutbarber';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewSales } from 'src/sections/overview/overview-appointments';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import axios from 'axios';

const now = new Date();
export async function getServerSideProps(){

  try {
    console.log("hello")
    const response = await axios.get('http://localhost:8080/api/v1/appointments/profile/appointmentsAt/2024-04-20');
    console.log(response)
    console.log(response.data)
    // data = response.data;

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

const Page = (data) => {
  console.log(data)
  return (
      <>
    <Head>
      <title>
        Overview
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
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="$15"
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={data.data} 
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'This week',
                  data: [18, 16, 5, 8, 3, 14, 14]
                },
                {
                  name: 'Last week',
                  data: [12, 11, 4, 6, 2, 9, 9]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>

          
        </Grid>
      </Container>
    </Box>
  </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
