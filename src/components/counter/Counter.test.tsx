import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../../../test/testUtils';

import Counter from './Counter';
// Enzyme.configure({ adapter: new Adapter() });

describe('Counter component testing', () => {

    /**
    * Factory function to create a shallow wrapper for the app component.
    * @function setup
    * @param {object} props - Component props specific to this setup
    * @param { any } state - Initial state for setup
    * @return { shallowWrapper }
     */

    const setup = (props = {}, state = null) => {
        return shallow(<Counter {...props} />)
    }

    /** 
     * return shallow wrapper containing node(s) within the given data set value.
     * @param { shallowWrapper } wrapper - enzyme shallow wrapper to search within.
     * @param { string } val - value of data test attribute for search
     * @return { shallowWrapper }
     */

    // const findByTestAttr = (wrapper: any, val: string) => {
    //     return wrapper.find(`[data-test='${val}']`)
    // }

    it('renders without crashing', () => {
        const wrapper = setup();
        const appComponent = findByTestAttr(wrapper, 'counter-app');
        expect(appComponent.length).toBe(1);
    });

    it('renders increment button', () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, 'increment-button');
        expect(button.length).toBe(1);
    });

    it('render decrement button', () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, 'decrement-button');
        expect(button.length).toBe(1);
    })

    it('renders counter display', () => {
        const wrapper = setup();
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.length).toBe(1);
    });

    it('counter starts at 0 ', () => {
        const wrapper = setup();
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toBe("0");
    });
    /**
     * for event we use  @function .simulate("event-name")
     */
    it('on click of button counter value increase', () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, 'increment-button');
        button.simulate("click");
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toBe("1");
    });

    it('on click of decrement button counter value decrease', () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, 'increment-button');
        button.simulate("click");
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toBe("1");
        const decrButton = findByTestAttr(wrapper, 'decrement-button');
        decrButton.simulate("click");
        // expect(counterDisplay.text()).toBe("0");
    })
})
