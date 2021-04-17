import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = shallow(<App/>);
  });

  it('renders a list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  it('renders CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  it('renders number of events input', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});