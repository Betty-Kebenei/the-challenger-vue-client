import App from '../../src/App.vue';
import {shallowMount} from '@vue/test-utils';
import moxios from 'moxios';

describe('App', () => {
    it('should have a component named app', () => {
        const wrapper = shallowMount(App);
        expect(wrapper.name()).toEqual('app');
    });
});

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

describe('App methods', () => {
    let wrapper;

    beforeEach(() => {
        moxios.install();

        wrapper = shallowMount(App);
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should set showCharts to true and month id', () => {
        wrapper.vm.fetchId(2);
        expect(wrapper.vm.showCharts).toBe(true)
        expect(wrapper.vm.monthId).toBe(2)
    });

    it('should fetch all the month forms', (done) => {
        moxios.stubRequest(`${apiURL}`, {
            status: 200,
            response: {
                data: [
                    {   
                        fromDate: '7-5-2018',
                        toDate: '7-6-2018',
                        _v: 0,
                        _id: '5b879d497f0b5daa557b33ct'
                    }
                ] 
            }
        });

        moxios.wait(() => {
            expect(wrapper.find('li').html()).toContain('strong');
            done();
        });
    })
});
