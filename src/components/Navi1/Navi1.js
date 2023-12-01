import * as React from 'react';
import { Breadcrumbs, Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import './Navi1.css'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick} className="NavBar2">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Hotel
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Elle resort
        </Link>
      </Breadcrumbs>
      <Stack direction="row" spacing={2}>
      <Button style={{backgroundColor: "#264653", position: "200"}} className='login-btn' variant="contained" href='/login'>Login</Button>
      </Stack>

      </div>
  );
}