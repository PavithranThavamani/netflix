const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//functions

function selectItem(e) {

    //remove border for previous tab
    removeBorder();

    removeShow();

    //add border for clicked tab
    this.classList.add('tab-border');

    //grab clicked tab's content
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}


//listen for 'click'

tabItems.forEach(item => item.addEventListener('click', selectItem));