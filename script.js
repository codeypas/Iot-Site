burger=document.querySelector('.berger');
navbar=document.querySelector('.navbar');
navul=document.querySelector('.navul');
searchbar=document.querySelector('.searchbar');
burger.addEventListener('click',()=>{
    navul.classList.toggle('visible');
    searchbar.classList.toggle('visible');
    navbar.classList.toggle('fixheight');
})

// alert("result is out\nto see result visit blog")
// result=document.getElementById("result");
// alert.addEventListener('click',()=>{
//     result.classList.toggle('reload');
// })
