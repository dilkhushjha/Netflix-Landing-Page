const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();

    // Add the border to current tab
    this.classList.add('tab-border');

    // Grab content items form DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')

    this.style.color = "#fff";

}


// Remove border function
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
    tabItems.forEach(item => item.style.color = "#8d8d8d");

}



// remove show function
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));
