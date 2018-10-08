import ViewAMonth from '../../src/components/ViewAMonth.vue';
import {shallowMount} from '@vue/test-utils';
import sinon from 'sinon';

describe('ViewAMonth', () => {
    it('should have a component named barChart', () => {
        const wrapper = shallowMount(ViewAMonth);
        expect(wrapper.name()).toEqual('viewAMonth');
    });
});
