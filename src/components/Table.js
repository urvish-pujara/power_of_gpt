import React from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
    tableContainer: {
        maxWidth: 600,
        margin: '0 auto',
    },
});

const CustomTable = ({ headers, data, tableHeader }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table>
                {tableHeader && (
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={headers.length} align="center">
                                {tableHeader}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                )}
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell key={header}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow >
                            {headers.map((header) => (
                                <TableCell key={header} align="right">
                                    {row[header]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
