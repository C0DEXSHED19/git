import { useTheme } from '@mui/material/styles';
import {Image} from 'next/image';


export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <img src='/bmk.jpg' height={100}></img>
  
);
};
