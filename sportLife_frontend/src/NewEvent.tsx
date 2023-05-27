import React from 'react';
import ReactDOM from 'react-dom/client';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import { Button, Modal} from 'react-bootstrap';

import tableData from './tableData';

import './bootstrap.min.css';

export const NewEvent =() => {
    return(
        <Box>
      <Grid className='gridEvent2'>
        <Grid className='gridEvent'>
        
        <h1 style={{ color: 'black' }}>EVENTO 1</h1>
        <h3 style={{ color: 'black' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est qui distinctio in impedit, veritatis, natus ipsam cumque hic blanditiis soluta sint nulla itaque velit a asperiores obcaecati? Minima, possimus repellendus!</h3>
        </Grid>
       <Grid>
       <Table sx={{
        width:"50px",
       }}>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellidos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
{
  tableData.map(row =>(
    <TableRow
    key = {row.id}
    //sx = {{}}
    >
<TableCell>{row.first_name}</TableCell>
<TableCell>{row.last_name}</TableCell>

    </TableRow>
  ))
}
          </TableBody>
        </Table>
       </Grid>

      </Grid>
      <Grid>
        
      </Grid>
      </Box>
    )
}



export default NewEvent;