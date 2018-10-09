import ViewAMonth from '../../src/components/ViewAMonth.vue';
import {shallowMount} from '@vue/test-utils';

describe('ViewAMonth', () => {
    it('should have a component named barChart', () => {
        const wrapper = shallowMount(ViewAMonth);
        expect(wrapper.name()).toEqual('viewAMonth');
    });
});


describe('ViewAMonth methods', () => {
    const  wrapper = shallowMount(ViewAMonth);

    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());

    it('should fetch all the daily data for a month form', (done) => {
        moxios.stubRequest(`${apiURL}/daily-data`, {
            status: 404,
            response: {
                data: [
                    {   
                        chaptersMorning: '7-5-2018',
                        chaptersOthers: '7-6-2018',
                        month: '5b879d497f0b5daa557b3390',
                        notes: false,
                        prayer: true,
                        riserTime: "5:00am",
                        smr: false,
                        _v: 0,
                        _id: '5b879d497f0b5daa557b33ct'
                    }
                ] 
            }
        });

        moxios.wait(() => {
            expect(wrapper.find('h1').text()).toContain('CHARTS AND TABLES');
            done();
        });
    })

});
