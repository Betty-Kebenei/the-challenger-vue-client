import MonthForm from '../../src/components/MonthForm.vue';
import {shallowMount} from '@vue/test-utils';

describe('MonthForm', () => {
    it('should have a component named monthForm', () => {
        const wrapper = shallowMount(MonthForm);
        expect(wrapper.name()).toEqual('monthForm');
    });
});
