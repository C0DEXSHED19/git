import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Clients',
    path: '/customersadmin',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Barbers',
    path: '/companiesadmin',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  
];
