import React, { Component } from 'react';
import logo from './bank.png';
import './App.css';
import MainPage from './components/MainPage';
import MenuList from './components/MenuList';
import Accounts from './components/Accounts';
import CreateAccount from './components/CreateAccount';
import Transactions from './components/Transactions';
import Balance from './components/Balance';
import Update from './components/Update';
import Close from './components/Close';
import { List, Divider } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#383c54'
    }
  }
});

class App extends Component {
  state = {
    opened: 'welcome'
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ backgroundColor: 'white', height: '100vh' }}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />&nbsp;&nbsp;BANK MANAGEMENT SYSTEM
    </header>
          {/* <MainPage /> */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '0 8px'
            }}
          >
          </div>
          <Divider />
          <div style={{ display: 'flex', height: 657 }}>
            <List style={{ backgroundColor: '#fcfcfc', width: 250 }}>
              <MenuList onMenuChange={(x) => { this.setState({ opened: x }); }} />
            </List>
            <div style={{ flex: 1 }}>
              {
                this.state.opened === 'welcome' ?
                  <div style={{ fontFamily: 'serif', fontSize: 40, padding: 150, textAlign: 'center', fontStyle: 'italic' }}>
                    Welcome to Bank Management System created by<br /><br /><b>Manish Singh Talan<br /></b>
                  </div> : (
                    this.state.opened === 'accounts' ? <Accounts />
                      : (this.state.opened === 'transactions' ? <Transactions />
                        : (this.state.opened === 'balance' ? <Balance />
                          : (this.state.opened === 'update' ? <Update />
                            : (this.state.opened === 'createaccount' ? <CreateAccount />
                              : <Close />
                            )
                          )
                        )
                      )
                  )
              }
            </div>
          </div>
        </div>
      </MuiThemeProvider>);
  }
}

export default App;