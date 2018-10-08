import App from '../../src/App.vue';
import {shallowMount} from '@vue/test-utils';

describe('App template', () => {
    const wrapper = shallowMount(App);
    it('should render a header with a logo', () => { 
        const header = wrapper.find('header');
        expect(header.html()).toContain('img');
    });
    it('should render a left menu navigation', () => {
        //Check for button
        const button = wrapper.find('button');
        expect(button.text()).toContain('Add Month Form');

        //check for h1
        const h1 = wrapper.find('h1');
        expect(h1.text()).toContain('Months');
    });
});
