const allExtentedLinks = document.querySelectorAll(".navigation__element_extended");
const allExtendedLinksA = document.querySelectorAll(".navigation__element_extended > a");

const handleClick = (e) => {
    const parentContainer = e.target.parentElement;
    if(parentContainer.classList.contains("navigation__element_open")) {
        parentContainer.classList.remove("navigation__element_open")
    } else {
    allExtentedLinks.forEach((element) => {
        element.classList.remove("navigation__element_open");
    });
    parentContainer.classList.toggle("navigation__element_open")
    }
};

allExtendedLinksA.forEach((element) => {
    element.addEventListener("click", (e) => handleClick(e));
})