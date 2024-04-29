//const { debuglog } = require("util");

document.addEventListener('DOMContentLoaded', () => {
  //this will select the class name 'accordion-faq'
  const faqContainer = document.querySelector('.accordion-faq');
 
  //happens when you click on the icon
  faqContainer.addEventListener('click', (e)=> {
    const groupHeader = e.target.closest('.dropdown-heading'); 

    if(!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupbody = group.querySelector('.dropdown-paragraph');
    const icon = groupHeader.querySelector('.heading-icon');

    icon.classList.toggle('open');
    groupbody.classList.toggle('open');

    const otherGroups = faqContainer.querySelectorAll('.faq-dropdown');

    otherGroups.forEach((otherGroup) => {
      if(otherGroup!== group) {
        const otherGroupBody = otherGroup.querySelector('.dropdown-paragraph');
        const otherIcon = otherGroup.querySelector('.heading-icon');
        
        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('open');
      }
    });
  })
});

