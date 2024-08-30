const filters__elements = document.querySelectorAll(".filters__element");
const totalSum = document.querySelector(".filters__label_sum > .filters__price");

var sum = 0;

const handleCheckBoxClick = (e) => {
    if(e.target.checked) {
        sum += Number(e.target.getAttribute("price"));
    } else {
        sum -= Number(e.target.getAttribute("price"));
    }
    const convertSum = sum.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    totalSum.innerText = `${convertSum}₽`;
}

filters__elements.forEach((element) => {
    element.addEventListener("click", (e) => handleCheckBoxClick(e))
})
