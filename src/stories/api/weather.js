import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import pick from 'lodash/pick';
import data from './data';
import forecast from './forecast';

const pickWeather = json =>
  pick(json, [
    'id',
    'name',
    'weather',
    'main',
    'wind',
    'visibility'
  ]);


storiesOf('Api.Weather', module)
  .add('Raw data', () => (
    <pre>
      {JSON.stringify(data[0], null, 2)}
    </pre>
  ))
  .add('Peaked data', () => (
    <pre>
      {JSON.stringify(pickWeather(data[0]), null, 2)}
    </pre>
  ))
  .add('Forecast data', () => (
    <pre>
      {JSON.stringify(forecast, null, 2)}
    </pre>
  ))