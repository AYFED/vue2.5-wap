import { shallowMount, mount } from '@vue/test-utils'
import Cell from '../cell.vue';
import Vue from 'vue';


describe('Cell.vue', () => {
    const wrapper = shallowMount(Cell, {

    });

    it('文案展示', () => {
        wrapper.setProps({ title: '测试title', subTitle: '测试subTitle', desc: '测试desc', showIcon:true });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.ayui-cell-title').text()).toBe('测试title');
            expect(wrapper.find('.ayui-cell-sub-title').text()).toBe('测试subTitle');
            expect(wrapper.find('.ayui-cell-desc').text()).toBe('测试desc');
            expect(wrapper.find('.ayui-cell-icon').isEmpty()).toBe(false);

        })
    });

    it('链接', () => {
        wrapper.setProps({ title: '测试title', subTitle: '测试subTitle', desc: '测试desc', showIcon: true, isLink: true, linkUrl:'http://m.jd.com' });

        return Vue.nextTick().then(function () {
            expect(wrapper.classes('ayui-cell-link')).toBe(true);
            expect(wrapper.attributes('href')).toBe('http://m.jd.com');
        })
    });
});
