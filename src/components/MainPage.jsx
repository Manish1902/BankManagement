import '../App.css';
import React, { Component } from 'react';
// import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class MainPage extends Component {
    state = { showImage: false };

    onMenuClick = () => {
        // const response = await axios({
        //     url : 'http://localhost:5000/display_all',
        //     method : 'GET'
        // });

        // if(response){
        //     this.setState({menuList : response})
        // }
        this.setState({ showImage: true });
    }

    onAccountClick = () => {
        this.setState({ showAccountDetails: true });
    }
    onTransactionClick = () => {
        this.setState({ showTransactionDetails: true });
    }
    onBalanceClick = () => {
        this.setState({ showBalance: true });
    }
    onUpdateClick = () => {
        this.setState({ showUpdate: true });
    }
    onCloseAccountClick = () => {
        this.setState({ closeAccount: true });
    }
    onCreateClick = () => {
        this.setState({ createAccount: true });
    }
    onViewClick = () => {
        this.setState({ createAccount: false, viewAccount: true });
    }
    closeView = () => {
        this.setState({ viewAccount: false, viewAccountNow: true });
    }
    createdAccount = () => {
        // this.setState({createdAccount : true})
        alert("Account Created Successfully!!");
    }

    render() {
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ padding: 10, marginTop: 20 }} onClick={this.onMenuClick}>DISPLAY MENU</button>
                </div>
                {
                    this.state.showImage &&
                    <div style = {{marginLeft: 450}}>
                        <div style={{ align: 'center', marginTop: 20 }}>
                            <div>
                                <button style={{ padding: 10, marginTop: 20, backgroundColor: '#414652', color: 'white' }} onClick={this.onAccountClick}>ACCOUNT</button>
                                <button style={{ padding: 10, marginTop: 20, backgroundColor: '#414652', color: 'white' }} onClick={this.onTransactionClick}>TRANSACTIONS</button>
                                <button style={{ padding: 10, marginTop: 20, backgroundColor: '#414652', color: 'white' }} onClick={this.onBalanceClick}>BALANCE ENQUIRY</button>
                                <button style={{ padding: 10, marginTop: 20, backgroundColor: '#414652', color: 'white' }} onClick={this.onUpdateClick}>UPDATE ACCOUNT</button>
                                <button style={{ padding: 10, marginTop: 20, backgroundColor: '#414652', color: 'white' }} onClick={this.onCloseAccountClick}>CLOSE ACCOUNT</button>
                            </div>
                            {/* <img src={logo} alt="underConstruction" className="underConstruction" /> */}
                        </div>
                    </div>
                }
                {
                    this.state.showAccountDetails &&
                    <div style = {{marginLeft: 450}}>
                        <div style={{ align: 'center', marginTop: 20 }}>
                            <div style= {{display: 'flex'}}>
                                <button style={{ padding: 10, marginTop: 20, backgroundColor: '#218612', color: 'white' }} onClick={this.onCreateClick}>CREATE NEW ACCOUNT</button>
                                <button style={{ padding: 10, marginTop: 20, backgroundColor: '#218612', color: 'white' }} onClick={this.onViewClick}>VIEW EXISTING ACCOUNT</button>
                            </div>
                            {/* <img src={logo} alt="underConstruction" className="underConstruction" /> */}
                        </div>
                    </div>
                }
                {
                    <Dialog open={this.state.viewAccount} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Enter Account Number</DialogTitle>
                        <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Account Number"
                            type="number"
                            fullWidth
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.closeView} color="primary">
                            SHOW ACCOUNT DETAILS
                        </Button>
                        </DialogActions>
                    </Dialog> 
                }
                 {
                    this.state.createAccount &&
                    <div style = {{marginLeft: 455}}>
                        <div style={{ align: 'center', marginTop: 20 }}>
                            <div>
                            <form noValidate autoComplete="off">
                            <div>
                                <TextField id="standard-basic" label="Account Holder Name" />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Account Number" />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Account Type"/>
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Email Address"/>
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Phone Number"/>
                            </div>
                            <div>
                                <Button style = {{marginTop: 20}} onClick={this.createdAccount} color="primary" variant= "outlined">
                                    CREATE ACCOUNT
                                </Button>
                            </div>
                            </form>
                            </div>
                            {/* <img src={logo} alt="underConstruction" className="underConstruction" /> */}
                        </div>
                    </div>
                }
               
                 {
                    this.state.viewAccountNow &&
                    <div style = {{marginLeft: 455}}>
                        <div style={{ align: 'center', marginTop: 20 }}>
                            <div>
                                ACCOUNT HOLDER NAME : CHITRANG CHAUHAN
                            </div>
                            <div>
                                ACCOUNT NUMBER      : 123
                            </div>
                            <div>
                                ACCOUNT TYPE        : SA
                            </div>
                            <div>
                                EMAIL ADDRESS       : chitrang@dd.com
                            </div>
                            <div>
                                PHONE NUMBER        : 1122334455
                            </div>
                            <div>
                                BALANCE             : 153
                            </div>
                            {/* <img src={logo} alt="underConstruction" className="underConstruction" /> */}
                        </div>
                    </div>
                }
                 {
                    this.state.showTransactionDetails &&
                    <div style = {{marginLeft: 455}}>
                        <div style={{ align: 'center', marginTop: 20 }}>
                            <div>
                                
                            </div>
                            {/* <img src={logo} alt="underConstruction" className="underConstruction" /> */}
                        </div>
                    </div>
                }
                 {
                    this.state.showBalance &&
                    <div style = {{marginLeft: 455}}>
                        <div style={{ align: 'center', marginTop: 20 }}>
                            <div>
                                
                            </div>
                            {/* <img src={logo} alt="underConstruction" className="underConstruction" /> */}
                        </div>
                    </div>
                }
                 {
                    this.state.showUpdate &&
                    <div style = {{marginLeft: 455}}>
                        <div style={{ align: 'center', marginTop: 20 }}>
                            <div>
                                
                            </div>
                            {/* <img src={logo} alt="underConstruction" className="underConstruction" /> */}
                        </div>
                    </div>
                }
                {
                    this.state.closeAccount &&
                    <div style = {{marginLeft: 455}}>
                        <div style={{ align: 'center', marginTop: 20 }}>
                            <div>
                                
                            </div>
                            {/* <img src={logo} alt="underConstruction" className="underConstruction" /> */}
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default MainPage;
