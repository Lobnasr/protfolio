let navbar = document.querySelector(".navbar");
document.querySelector('#menu-btn').onclick = () =>
{
    cartitem.classList.remove("active");
    searchfrom.classList.remove("active");

    navbar.classList.toggle("active");
}
let cartitem = document.querySelector(".cart-items-container");
document.querySelector('#cart-btn').onclick = () =>
{
    navbar.classList.toggle("active");
    searchfrom.classList.remove("active");

    cartitem.classList.toggle("active");
}
let searchfrom = document.querySelector(".search-from");
document.querySelector('#search-btn').onclick = () =>
{
    navbar.classList.toggle("active");
    cartitem.classList.remove("active");

    searchfrom.classList.toggle("active");
}
window.onscroll = () => {
    cartitem.classList.remove("active");
    navbar.classList.remove("active");

    searchfrom.classList.remove("active");

}