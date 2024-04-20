import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import axios from 'axios';
export const BarbersTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;
  async function suspendBarber(id){
    console.log("suspend barber id: "+id)
    const response = await axios.delete('http://localhost:8080/api/v1/users/admin-deleteBarber/' + id);
      console.log(response)
      console.log(response.data)
      if(response.status===200){
        location.reload()
      }
  }

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                   Business Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Phone Number
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                {/* <TableCell>
                  Phone
                </TableCell> */}
                {/* <TableCell>
                  Signed Up
                </TableCell> */}
                <TableCell>
                  Suspend Account
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((barber) => {
                const isSelected = selected.includes(barber.id);
                // const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={barber.barberId}
                    selected={isSelected}
                  >
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        {/* <Avatar src={customer.avatar}>
                          {getInitials(customer.name)}
                        </Avatar> */}
                        <Typography variant="subtitle2">
                          {barber.businessName}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {barber.email}
                    </TableCell>
                    <TableCell>
                      {barber.number}
                    </TableCell>
                    <TableCell>
                      {barber.address}
                    </TableCell>
                    <TableCell>
                    <Button
                  variant="contained" onClick={()=>suspendBarber(barber.barberId)}
                >
                    Suspend
                </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

BarbersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
