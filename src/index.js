import x from './x.js'
import './style.less'
import './z.styl'
import png from './assets/1.png'

console.log(png);

const div = document.getElementById('app')

div.innerHTML = `
<img src="${png}">
`

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')   //有括号说明把import当成一个函数了
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误')
    })
}

div.appendChild(button)