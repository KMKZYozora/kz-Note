const menuList = [
  {
    Title: 'JavaScript',
    href: 'contents//JavaScript//README.md'
  },
  {
    Title: 'PowerShell(未実装)',
    href: '#'
  }
]






let index = 0;
while(index <= menuList.length){
  let $element = document.createElement('li')
  $element.innerHTML = '<a href='+ menuList[index].href +'>'+ menuList[index].Title +'</a>'
  let $menu = document.getElementById('menu')
  $menu.appendChild($element)
  index++;
}
