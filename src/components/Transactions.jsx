import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import axios from 'axios';

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            withdraw_acc: '',
            withdraw_pin: '',
            withdraw_amount: '',
            transfer_from_acc: '',
            transfer_to_acc: '',
            transfer_from_pin: '',
            transfer_amount: '',
            deposit_acc: '',
            deposit_amount: ''
        };
    }
    render() {
        return (
            <div style={{ display: 'flex', color: '#555', marginTop: 30 }}>
                <div style={{ flex: 1, padding: 15 }}>
                    <h2 style={{ textAlign: 'center', textDecorationLine: 'underline' }}>Withdraw</h2>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }} />
                        <table>
                            <tr>
                                <td>
                                    <Typography>Account Num</Typography>
                                </td>
                                <td>
                                    <TextField required value={this.state.withdraw_acc} onChange={e => this.setState({ withdraw_acc: e.target.value })} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography>PIN</Typography>
                                </td>
                                <td>
                                    <TextField type="password" required value={this.state.withdraw_pin} onChange={e => this.setState({ withdraw_pin: e.target.value })} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography>Amount</Typography>
                                </td>
                                <td>
                                    <TextField required value={this.state.withdraw_amount} onChange={e => this.setState({ withdraw_amount: e.target.value })} />
                                </td>
                            </tr>
                        </table>
                        <div style={{ flex: 1 }} />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }} />
                        <Button color='primary' onClick={async () => {
                            const response = await axios({
                                url: 'http://localhost:5000/withdraw',
                                method: 'GET',
                                params: {
                                    num: this.state.withdraw_acc,
                                    pin: this.state.withdraw_pin,
                                    amount: this.state.withdraw_amount
                                }
                            });

                            alert(response.data);
                        }} variant='contained' style={{ marginTop: 77 }}><Typography><b>Withdraw</b></Typography></Button>
                        <div style={{ flex: 1 }} />
                    </div>
                </div>
                <div style={{ borderLeft: '1px lightgrey solid' }} />
                <div style={{ flex: 1, padding: 15 }}>
                    <h2 style={{ textAlign: 'center', textDecorationLine: 'underline' }}>Transfer</h2>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }} />
                        <table>
                            <tr>
                                <td>
                                    <Typography>From Account</Typography>
                                </td>
                                <td>
                                    <TextField required value={this.state.transfer_from_acc} onChange={e => this.setState({ transfer_from_acc: e.target.value })} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography>PIN</Typography>
                                </td>
                                <td>
                                    <TextField type="password" required value={this.state.transfer_from_pin} onChange={e => this.setState({ transfer_from_pin: e.target.value })} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography>Amount</Typography>
                                </td>
                                <td>
                                    <TextField required value={this.state.transfer_amount} onChange={e => this.setState({ transfer_amount: e.target.value })} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography>To Account</Typography>
                                </td>
                                <td>
                                    <TextField required value={this.state.transfer_to_acc} onChange={e => this.setState({ transfer_to_acc: e.target.value })} />
                                </td>
                            </tr>
                        </table>
                        <div style={{ flex: 1 }} />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }} />
                        <Button color='primary' onClick={async () => {
                            const response = await axios({
                                url: 'http://localhost:5000/transfer',
                                method: 'GET',
                                params: {
                                    from: this.state.transfer_from_acc,
                                    pin: this.state.transfer_from_pin,
                                    amount: this.state.transfer_amount,
                                    to: this.state.transfer_to_acc
                                }
                            });

                            alert(response.data);
                        }} variant='contained' style={{ marginTop: 40 }}><Typography><b>Transfer</b></Typography></Button>
                        <div style={{ flex: 1 }} />
                    </div>
                </div>
                <div style={{ borderLeft: '1px lightgrey solid' }} />
                <div style={{ flex: 1, padding: 15 }}>
                    <h2 style={{ textAlign: 'center', textDecorationLine: 'underline' }}>Deposit</h2>

                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }} />
                        <table>
                            <tr>
                                <td>
                                    <Typography>Account Num</Typography>
                                </td>
                                <td>
                                    <TextField required value={this.state.deposit_acc} onChange={e => this.setState({ deposit_acc: e.target.value })} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography>Amount</Typography>
                                </td>
                                <td>
                                    <TextField required value={this.state.deposit_amount} onChange={e => this.setState({ deposit_amount: e.target.value })} />
                                </td>
                            </tr>
                        </table>
                        <div style={{ flex: 1 }} />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }} />
                        <Button color='primary' onClick={async () => {
                            const response = await axios({
                                url: 'http://localhost:5000/deposit',
                                method: 'GET',
                                params: {
                                    num: this.state.deposit_acc,
                                    amount: this.state.deposit_amount
                                }
                            });

                            alert(response.data);
                        }} variant='contained' style={{ marginTop: 110 }}><Typography><b>Deposit</b></Typography></Button>
                        <div style={{ flex: 1 }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Transactions;