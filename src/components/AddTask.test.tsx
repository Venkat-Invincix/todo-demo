import React from "react";

import { mount, shallow } from 'enzyme';

import { findByTestAttr } from "../../test/testUtils";
import AddTask from "./AddTask";

import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

const store = configureStore();

const setup = (initialState = {}) => {
    const wrapper = mount(
        <Provider store={store}>
            <AddTask />
        </Provider>
    ).children();
    return wrapper;
}

describe('Add Task Components', () => {
    describe('Render --->', () => {

        let wrapper: any;
        beforeEach(() => {
            wrapper = setup();
        })

        test('render component without error', () => {
            // console.log(wrapper.debug())
            const component = findByTestAttr(wrapper, "component-addtask")
            expect(component.length).toBe(1);
        })
        test('render input box', () => {
            const component = findByTestAttr(wrapper, "addtask-input")
            expect(component.length).toBe(1);
        })
        test('render submit button', () => {
            const component = findByTestAttr(wrapper, "addtask-submit-button")
            expect(component.length).toBe(1);
        })

    })
})