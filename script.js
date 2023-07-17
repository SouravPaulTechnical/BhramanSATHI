let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');
let loginBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let loginClose=document.querySelector('#form-close');

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
