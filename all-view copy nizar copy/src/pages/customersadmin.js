import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layoutadmin';
import { CustomersTable } from 'src/sections/customer/customers-tableadmin';
import { applyPagination } from 'src/utils/apply-pagination';
import axios from 'axios';

const now = new Date();

import { useEffect } from 'react';

const useCustomers = (page, rowsPerPage, data) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

export async function getServerSideProps(){

  try {
    console.log("hello")
    const response = await axios.get('http://localhost:8080/api/v1/users/admin-get-users');
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
  console.log("props? ",data)
 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage, data);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);
 

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
          Customers
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
                  Customers
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  
                  
                </Stack>
              </Stack>
            </Stack>
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
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
