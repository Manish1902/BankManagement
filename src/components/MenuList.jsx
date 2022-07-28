import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import UpdateIcon from '@material-ui/icons/Update';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import MoneyIcon from '@material-ui/icons/Money';
import { menuListStyles } from './MenuListStyles';

class MainListItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: 'welcome'
    };
  }

  handleClick = opened => {
    this.setState({ opened });
    this.props.onMenuChange(opened);
  };

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{
          __html: `
       .active, .active:hover {
        background-color: #282c34
      }
    `}} />
        <ListItem selected={this.state.opened === 'createaccount'} button onClick={() => { this.handleClick('createaccount'); }}>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary='Create Account' />
        </ListItem>
        <ListItem selected={this.state.opened === 'accounts'} button onClick={() => { this.handleClick('accounts'); }}>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary='Accounts' />
        </ListItem>
        <ListItem selected={this.state.opened === 'balance'} button onClick={() => { this.handleClick('balance'); }}>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary='Balance Enquiry' />
        </ListItem>
        <ListItem selected={this.state.opened === 'transactions'} button onClick={() => { this.handleClick('transactions'); }}>
          <ListItemIcon>
            <CompareArrowsIcon />
          </ListItemIcon>
          <ListItemText primary='Transactions' />
        </ListItem>
        <ListItem selected={this.state.opened === 'update'} button onClick={() => { this.handleClick('update'); }}>
          <ListItemIcon>
            <UpdateIcon />
          </ListItemIcon>
          <ListItemText primary='Update Account' />
        </ListItem>
        <ListItem selected={this.state.opened === 'close'} button onClick={() => { this.handleClick('close'); }}>
          <ListItemIcon>
            <CancelPresentationIcon />
          </ListItemIcon>
          <ListItemText primary='Close Account' />
        </ListItem>
      </div >
    );
  }
}

export default MainListItems;