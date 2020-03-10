import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import GlycemicItem from './GlycemicItem';

function GlycemicList(props) {  
  const items = props.items.map(
    (item, index) =>
    <TableRow key={index}>
      <GlycemicItem item={item} />
    </TableRow>
  );

  return(
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell>Food Name</TableCell>
            <TableCell align="right">Glycemic Index</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{items}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default GlycemicList;