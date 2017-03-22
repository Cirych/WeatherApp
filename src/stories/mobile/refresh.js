import React from 'react';
import { storiesOf, addDecorator, action, linkTo } from '@kadira/storybook';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MobileTearSheet from './MobileTearSheet';


const MobileDecorator = story => (
  <MuiThemeProvider>
    <MobileTearSheet customColor="lightblue">
      {story()}
    </MobileTearSheet>
  </MuiThemeProvider>
)

import {List, ListItem} from 'material-ui/List';
import PullToRefresh from '../../components/PullToRefresh';

storiesOf('Mobile.PullToRefresh', module)
  .addDecorator(MobileDecorator)
  .add('1', () => (
    <PullToRefresh>
      <List>
        <ListItem primaryText="1" />
        <ListItem primaryText="1" />
        <ListItem primaryText="1" />
        <ListItem primaryText="1" />
        <ListItem primaryText="1" />
        <ListItem primaryText="5" />
        <ListItem primaryText="1" />
        <ListItem primaryText="1" />
        <ListItem primaryText="1" />
        <ListItem primaryText="1" />
      </List>
    </PullToRefresh>
  ))
