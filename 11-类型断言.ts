// const aLink = document.getElementById('link') as HTMLAnchorElement
const aLink = <HTMLAnchorElement>document.getElementById('link')
console.log(aLink.href)
aLink.href = 'https://www.baidu.com'
