const allExtentedLinks = document.querySelectorAll(".navigation__element_extended");
const allExtendedLinksA = document.querySelectorAll(".navigation__element_extended > a");

const handleClick = (e) => {
    const elementContainer = e.target.closest(".navigation__element_extended");
    if(elementContainer.classList.contains("navigation__element_open")) {
        elementContainer.classList.remove("navigation__element_open")
    } else {
    allExtentedLinks.forEach((element) => {
        element.classList.remove("navigation__element_open");
    });
    elementContainer.classList.toggle("navigation__element_open")
    }
};

allExtendedLinksA.forEach((element) => {
    element.addEventListener("click", (e) => handleClick(e));
})