import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import axios from 'axios';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pin: '',
            confirmPin: '',
            phone: '',
            email: ''
        };
    }
    render() {
        return (
            <>
                <div style={{ display: 'flex', marginTop: 60 }}>
                    <div style={{ flex: 1 }} />
                    <table>
                        <tr>
                            <td width={200}>
                                <Typography>Accountholder Name*</Typography>
                            </td>
                            <td>
                                <TextField required value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>PIN*</Typography>
                            </td>
                            <td>
                                <TextField type="password" required value={this.state.pin} onChange={e => this.setState({ pin: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>Confirm PIN*</Typography>
                            </td>
                            <td>
                                <TextField type="password" required value={this.state.confirmPin} onChange={e => this.setState({ confirmPin: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>Phone*</Typography>
                            </td>
                            <td>
                                <TextField type="number" value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>Email*</Typography>
                            </td>
                            <td>
                                <TextField type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                            </td>
                        </tr>
                    </table>
                    <div style={{ flex: 1 }} />
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }} />
                    <Button color='primary' onClick={async () => {
                        if (this.state.confirmPin === this.state.pin) {
                            const response = await axios({
                                url: 'http://localhost:5000/createAccount',
                                method: 'GET',
                                params: this.state
                            });

                            alert("Account has been created. Please note account number " + response.data + ".");
                        }
                        else {
                            alert("PIN and Confirm PIN do not match")
                        }

                    }} variant='contained' style={{ marginTop: 40 }}><Typography><b>Create Account</b></Typography></Button>
                    <div style={{ flex: 1 }} />
                </div>
            </>
        );
    }
}

export default CreateAccount;