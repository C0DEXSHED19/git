import CogIcon from '@heroicons/react/24/solid/CogIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Barbers',
    path: '/companiesclient',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'History',
    path: '/history',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
];
