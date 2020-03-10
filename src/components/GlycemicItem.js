import React from 'react';
import TableCell from '@material-ui/core/TableCell';

function GlycemicItem(props) {
  return(
    <React.Fragment>
      <TableCell component="th" scope="row">{props.item.name}</TableCell>
      <TableCell align="right">{props.item.GI}</TableCell>
    </React.Fragment>
  );
}

export default GlycemicItem;