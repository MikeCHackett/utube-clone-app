import React from 'react'
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h2' color='#312e81'>
          U<span style={{ color: '#a5f3fc' }}>tube</span>
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
