import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layoutbarber';
import { AccountProfile } from 'src/sections/account/barber-profile';
import { AccountProfileDetails } from 'src/sections/account/account-profile-detailsbarber';
import { BarberAnnouncement } from 'src/sections/account/barber-announcement';

const Page = () => (
  <>
    <Head>
      <title>
        Account
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Account
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={12}
              >
                <AccountProfileDetails />
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={12}
              >
                <BarberAnnouncement />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
