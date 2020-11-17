import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TabelaGrafico({dataToShow}) {
  const classes = useStyles();

    const {heaters, rows} = dataToShow;
   
    if(!dataToShow.rows)
        return('Loading')
    else
        return (
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    {heaters.map(title =>{
                        return(<StyledTableCell align="left">{title}</StyledTableCell>);
                    })}
                
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.index}>
                    {row.datas.map( (data) =>{
                        return(
                            <StyledTableCell scope="row">
                                {data}
                            </StyledTableCell>
                        )
                    })}

                    
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        );
}