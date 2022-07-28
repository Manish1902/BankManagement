import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import axios from 'axios';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: '',
            pin: '',
            new_pin: '',
            confirm_pin: '',
            new_name: '',
            new_phone: '',
            new_email: ''
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
                                <Typography>Account Number*</Typography>
                            </td>
                            <td>
                                <TextField required value={this.state.num} onChange={e => this.setState({ num: e.target.value })} />
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
                                <Typography>New PIN</Typography>
                            </td>
                            <td>
                                <TextField type="password" value={this.state.new_pin} onChange={e => this.setState({ new_pin: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>Confirm PIN</Typography>
                            </td>
                            <td>
                                <TextField type="password" value={this.state.confirm_pin} onChange={e => this.setState({ confirm_pin: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>New Name</Typography>
                            </td>
                            <td>
                                <TextField value={this.state.new_name} onChange={e => this.setState({ new_name: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>New Phone</Typography>
                            </td>
                            <td>
                                <TextField value={this.state.new_phone} onChange={e => this.setState({ new_phone: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>New Email</Typography>
                            </td>
                            <td>
                                <TextField value={this.state.new_email} onChange={e => this.setState({ new_email: e.target.value })} />
                            </td>
                        </tr>
                    </table>
                    <div style={{ flex: 1 }} />
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }} />
                    <Button color='primary' onClick={async () => {
                        if (this.state.new_pin === this.state.confirm_pin) {
                            const response = await axios({
                                url: 'http://localhost:5000/update',
                                method: 'GET',
                                params: Object.assign({}, ...(Object.keys(this.state).filter(x => this.state[x]).map(x => ({ [x]: this.state[x] }))))
                            });

                            alert(response.data);

                        }

                        else {
                            alert("New PIN and Confirm PIN do not match")
                        }

                    }} variant='contained' style={{ marginTop: 40 }}><Typography><b>Update Account</b></Typography></Button>
                    <div style={{ flex: 1 }} />
                </div>
            </>
        );
    }
}

export default Update;