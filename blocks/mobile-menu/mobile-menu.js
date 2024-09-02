const mobileMenu = document.getElementById("mobileMenu");
const navigation = document.getElementById("headerNavigation")

const handleMobileMenuClick = (e) => {
    e.target.classList.toggle("mobile-menu_active");
    navigation.classList.toggle("navigation_open");
}

mobileMenu.addEventListener("click", (e) => handleMobileMenuClick(e));