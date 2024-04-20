import { useCallback, useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layoutclient';
import { BarbersTable } from 'src/sections/companies/company-tableclient';
import { CompaniesSearch } from 'src/sections/companies/companies-search';
import { applyPagination } from 'src/utils/apply-pagination';
import axios from 'axios';

const useBarbers = (page, rowsPerPage, data) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useBarberIds = (barbers) => {
  return useMemo(
    () => {
      return barbers.map((barber) => barber.id);
    },
    [barbers]
  );
};


export async function getServerSideProps(context) {


  try {

   if(typeof window!=='undefined'){

   }
    console.log("hello")
    let id = context.query.id;
    // id = id?id: localStorage.getItem('id')
    // localStorage.setItem('id', id)

    const response = await axios.get('http://localhost:8080/api/v1/users/displayBarbers');
    console.log(response)
    console.log(response.data)
    // data = response.data;

    return {
      props: {
        data: response.data
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
  console.log("props? ", data)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const barbers = useBarbers(page, rowsPerPage, data);
  const barbersIds = useBarberIds(barbers);
  const barbersSelection = useSelection(barbersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

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
                  Barbers
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                </Stack>
              </Stack>
            </Stack>
            <CompaniesSearch />
            <BarbersTable 


              
              count={data.length}
              items={barbers}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={barbersSelection.selected}
            />
          </Stack>
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
