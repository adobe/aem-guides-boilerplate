/**
 * Migrates the tree view of TOC from left panel to hamburger menu, or vice versa based on the media (desktop/mobile)
 * @param {MediaQueryList} isDesktop the window.matchMedia object
 */
export function migrateTree(isDesktop) {
    if(!isDesktop.matches) { //move the tree to header nav-sections: mobile view
        const treeUlParent = document.querySelector(".sidenav.block");
        const mapTitle = document.querySelector(".title-span");
        let title = ""
        if(mapTitle) {
            title = mapTitle.textContent
        }
        if(treeUlParent) {
            const treeUl = treeUlParent.querySelector('.tree')
            if(treeUl) {
                const headerNav = document.getElementsByClassName("nav-sections")[0];
                if(headerNav) {
                    treeUl.remove()
                    headerNav.appendChild(treeUl)
                    const mapTitleNode = headerNav.querySelector('h3')
                    mapTitleNode.textContent = title
                }
            }
        }
    } else { // desktop view
        const treeUlParent = document.querySelector(".nav-sections");
        if(treeUlParent) {
            const treeUl = treeUlParent.querySelector('.tree')
            if(treeUl) {
                const headerNav = document.querySelector(".sidenav.block");
                if(headerNav) {
                    treeUl.remove()
                    headerNav.appendChild(treeUl)
                }
            }
        }
    }
  }