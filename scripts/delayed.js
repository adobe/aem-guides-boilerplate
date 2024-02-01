// eslint-disable-next-line import/no-cycle
const contentSection = document.querySelector('.section.breadcrumbs-container')
const body = document.querySelector('body')

function changeScroller(isDesktop) {
    if(!isDesktop.matches || !hasVerticalScrollbar(contentSection)) { //mobile view
        body.classList.add('hide-content-scroll')
    } else {
        
    }
}

function hasVerticalScrollbar(element) {
  return element.scrollHeight > element.clientHeight;
}

function fireAppReadyEvent() {
    const customEvent = new Event('aem-app-ready');
    window.dispatchEvent(customEvent)
}

function addReadyClass() {
    body.classList.add('aem-app-rendered')
}

function handleScroll() {
  if(!hasVerticalScrollbar(contentSection)) {
    body.classList.add('hide-content-scroll')
    
  }
}

function handleMouseEnterInContent() {
  if(hasVerticalScrollbar(contentSection)) {
    body.classList.remove('hide-content-scroll')
  } else {
    body.classList.add('hide-content-scroll')
  }
}

function handleMouseLeaveFromContent() {
  if(hasVerticalScrollbar(contentSection)) {
    body.classList.add('hide-content-scroll')
  }
}

import { sampleRUM } from './aem.js';
const isDesktop = window.matchMedia('(min-width: 900px)');

// Core Web Vitals RUM collection
sampleRUM('cwv');
fireAppReadyEvent();
addReadyClass();

contentSection.addEventListener('scroll', handleScroll);
contentSection.addEventListener('mouseenter', handleMouseEnterInContent)
contentSection.addEventListener('mouseleave', handleMouseLeaveFromContent)
isDesktop.addEventListener("change", () => changeScroller(isDesktop));
changeScroller(isDesktop)

// add more delayed functionality here
