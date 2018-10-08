import DailyDataForm from '../../src/components/DailyDataForm.vue';
import {shallowMount} from '@vue/test-utils';

describe('DailyDataForm', () => {
    it('should have a component named dailyDataForm', () => {
        const wrapper = shallowMount(DailyDataForm);
        expect(wrapper.name()).toEqual('dailyDataForm');
    });
});
