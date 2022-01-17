// import checkPropTypes from 'check-prop-types';
/** 
     * return shallow wrapper containing node(s) within the given data set value.
     * @param { shallowWrapper } wrapper - enzyme shallow wrapper to search within.
     * @param { string } val - value of data test attribute for search
     * @return { shallowWrapper }
     */

export const findByTestAttr = (wrapper: any, val: string) => {
    return wrapper.find(`[data-test='${val}']`)
}

// export const checkProps = (component:any, conformingProps:any) => {
//     const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
//     expect(propError).toBeUndefined;
// }