import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './cn'
import en from './en'
Vue.use(VueI18n)
const messages = {
    'zh-CN': cn,
    'en-US': en
}
let code = localStorage.getItem('lang')
if (!code) {
    code = navigator.language
}
const i18n = new VueI18n({
    locale: code,
    messages
})
export default i18n