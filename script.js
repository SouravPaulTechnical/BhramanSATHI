let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');
let loginBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let loginClose=document.querySelector('#form-close');
let menuBar=document.querySelector('#menubar');
let navBar=document.querySelector('.navbar');

window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

loginBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});
loginClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});

menuBar.addEventListener('click',()=>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

//header section JS ends here