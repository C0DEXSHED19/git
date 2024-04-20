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
import { getInitials } from 'src/utils/get-initials';
import axios from 'axios';

async function SetStatus(){
  const response = await axios.post('http://localhost:8080/api/v1/appointments/profile/setStatus/4?state=Cancelled');
    console.log(response)
    console.log(response.data)
    if(response.status===200){
      location.reload()
    }
}
async function SetBlacklist(){
  const response = await axios.post('http://localhost:8080/api/v1/barbers/suspend/{userId}');
    console.log(response)
    console.log(response.data)
    if(response.status===200){
      location.reload()
    }
}

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Time
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => {
                const isSelected = selected.includes(customer.id);


                return (
                  <TableRow
                    hover
                    key={customer.userid}
                    selected={isSelected}
                  >
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Avatar src={customer.avatar}>
                          {getInitials(customer.user.name)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {customer.user.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {customer.user.email}
                    </TableCell>
                    
                    
                    <TableCell>
                      {customer.date}
                    </TableCell>
                    <TableCell>
                      {customer.start}
                    </TableCell>
                    <TableCell>
                      {customer.status}
                    </TableCell>
                    <TableCell>
                           
                    <Button
                  variant="contained" onClick={()=>SetBlacklist()}
                >
                    Blacklist
                </Button>
                <Button
                  variant="contained" onClick={()=>SetStatus()}
                >
                    Cancel 
                </Button>
                      {/* {createdAt} */}
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

CustomersTable.propTypes = {
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
