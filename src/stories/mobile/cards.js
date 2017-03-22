import React from 'react';
import { storiesOf, addDecorator, action, linkTo } from '@kadira/storybook';
//import { muiTheme } from 'storybook-addon-material-ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MobileTearSheet from './MobileTearSheet';


import CardCity from '../../components/CardCity';
import CardMenu from '../../components/CardMenu';
import Swiper from '../../components/Swiper';
import City from '../../components/City';

import weatherData from '../api/data';

//addDecorator(MuiThemeProvider);

const MobileDecorator = story => (
  <MuiThemeProvider>
    <MobileTearSheet customColor="lightblue">
      {story()}
    </MobileTearSheet>
  </MuiThemeProvider>
);


const styles = {
  Swiper: {
    margin: 8,
  },
  CardCity: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  CardMenu: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
};

const actions = {
  removeLocation: action('REMOVE_LOCATION'),
  selectLocation: action('SELECT_LOCATION')
}

storiesOf('Mobile.Cards', module)
  .addDecorator(MobileDecorator)
  .add('Cards', () => (
    <div>
      {
        weatherData.map(({ id, ...city }) =>
          <CardCity key={id} {...city} />
        )
      }
    </div>
  ))
  .add('CardMenu', () => (
    <div>
      <CardMenu />
      <CardMenu style={styles.CardMenu} />
      <div style={{ height: '100px', border: '1px solid black' }}>
        <CardMenu style={styles.CardMenu} />
      </div>
    </div>
  ))
  .add('CardWithMenuSwip', () => (
    <Swiper>
      <CardCity {...weatherData[0]} />
      <CardMenu />
    </Swiper>
  ))
  .add('City', () => (
    <City name="Мурманск" main={{ temp: '-25' }} />
  ))
  .add('Cities', () => (
    <div>
      {
        weatherData.map(({ id, ...city }) =>
          <City key={id} {...city} {...actions} />
        )
      }
    </div>
  ));


/*
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ListItemCity, { Tmp, ListCss } from '../components/ListItemCity';




storiesOf('Mobile.UI.List', module) //<MuiThemeProvider muiTheme={getMuiTheme()}>
  .addDecorator(MobileDecorator)
  .add('ListItems', () => (
    <List>
      <ListItemCity city="St Petersburg" />
      <ListItemCity city="Moscow" />
      <ListItem primaryText="Inbox0" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Inbox1" leftIcon={<ContentInbox />} onClick={action('clicked')} />
    </List>
  ))
  .add('Temp', () => (
    <Tmp />
  ));


storiesOf('Mobile.Css.List', module)
  .add('ListItems', () => (
    <ListCss>
      <div>111</div>
      <div>222</div>
    </ListCss>
  ));



import SwipeableViews from 'react-swipeable-views';
import SwipeMenu from '../components/SwipeMenu';
storiesOf('Mobile.Swiper', module)
  .addDecorator(MobileDecorator)
  .add('Swipe1', () => (
    <SwipeableViews
      index='0'
      //onChangeIndex={this.handleChange}
      style={{ margin: '8px' }}
    >
      <CardCity city="St. Petersburg" temp="5" />
      <CardCity city="Moscow" temp="25" />
    </SwipeableViews>
  ))
  .add('SwipeMenu1', () => (
    <SwipeMenu style={{ margin: '8px' }}>
      <CardCity city="St. Petersburg" temp="5" />
    </SwipeMenu>
  ))


/*
import Button from './Button';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
*/

