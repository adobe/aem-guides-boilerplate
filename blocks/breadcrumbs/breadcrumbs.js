const breadcrumbsElement = document.querySelector(`.breadcrumbs.block`);
const a_tags = breadcrumbsElement.querySelectorAll('[href]')

function isExteralURL(url) {
  if(!url) return false
  return url.startsWith('www.') || url.startsWith('http:') || url.startsWith('https:')
}

function isRelativePath(url) {
  if(!url) return false
  return url.charAt(0) === '.' || url.charAt(0) === '/'
}

a_tags.forEach(a_tag => {
  let url = a_tag.getAttribute('href')
  if(url && !isRelativePath(url) && !isExteralURL(url)) {
    url = '/' + url
  }
  a_tag.setAttribute('href', url)
})

