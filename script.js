const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    const faqArrow = this.querySelector(".faq-arrow");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.paddingBottom = null;
      faqArrow.style.transform = "rotate(0deg)";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.paddingBottom = 15 + "vh";
      faqArrow.style.transform = "rotate(180deg)";
    }
  });
}
