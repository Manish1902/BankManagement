import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';
import axios from 'axios';


class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: []
        };
    }

    componentDidMount() {
        this.retrieveAccounts();
    }

    async retrieveAccounts() {
        const response = await axios({
            url: 'http://localhost:5000/accounts',
            method: 'GET'
        });

        this.setState({ accounts: response.data });
    }

    render() {
        return (
            <div style={{ padding: 40 }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Accountholder Name</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell align="right">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.accounts.map((row) => (
                                <TableRow key={row.num}>
                                    <TableCell component="th" scope="row">
                                        {row.num}
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default Accounts;