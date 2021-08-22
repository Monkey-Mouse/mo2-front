import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './cn'
import en from './en'
Vue.use(VueI18n)
const messages = {
    'zh-CN': cn,
    'en-US': en
}
const i18n = new VueI18n({
    locale: 'zh-CN',
    messages
})
export default i18n