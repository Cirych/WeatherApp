import React from 'react';
import { storiesOf, addDecorator, action, linkTo } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MobileTearSheet from './MobileTearSheet';

import weatherData from '../api/data';
import forecastData from '../api/forecast';

import CityInfo from '../../components/CityInfo';

const MobileDecorator = story => (
  <MuiThemeProvider>
    <MobileTearSheet customColor="lightblue">
      {story()}
    </MobileTearSheet>
  </MuiThemeProvider>
);

const cityInfoData = {
  ...weatherData[0],
  forecast: forecastData.list
};

storiesOf('Mobile.CityInfo', module)
  .addDecorator(MobileDecorator)
  .add('Info', () => (
    <CityInfo city={cityInfoData} />
  ))
