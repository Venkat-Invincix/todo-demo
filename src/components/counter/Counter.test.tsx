import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Counter from './Counter';
Enzyme.configure({ adapter: new Adapter() });

describe('Counter component testing', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Counter />);
        const appComponent = wrapper.find("[data-test='counter-app']");
        expect(appComponent.length).toBe(1);
    });

    it('renders increment button', () => {

    });

    it('renders counter display', () => {

    });

    it('counter starts at 0 ', () => {

    });

    it('on click of button counter value increase', () => {

    });
})
