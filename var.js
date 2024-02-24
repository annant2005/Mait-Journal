let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
const accordions=document.querySelectorAll('.accordion');
accordions.forEach(accordion=>{
    const icon=accordion.querySelector('.icon');
    const answer=accordion.querySelector('.cont');
    accordion.addEventListener('click',()=>{
       if(icon.classList.contains('active')){
        icon.classList.remove('active');
        answer.style.maxHeight=null;
       }
       else{
        icon.classList.add('active');
        answer.style.maxHeight=answer.scrollHeight+'px';
       }

})
})