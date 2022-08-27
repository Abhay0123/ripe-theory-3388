const faqs=document.getElementsByClassName('content');
for(let i=0;i<faqs.length;i++){
    faqs[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}


let body=document.querySelector('#body');
let div=document.querySelector('#div');
let select =document.querySelector('.option');
select.addEventListener('click',function(){
     if(div.style.display==='none'){
       div.style.display='block'
       body.style.position='absolute';
       div.style.position='absolute';
       div.style.width='400px';
       div.style.borderRadius='30px';
       div.style.marginLeft='490px';
       div.style.marginTop='-180px';
       div.style.boxShadow= ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
       div.style.height='520px';
       div.style.backgroundColor='white';

     }else{
        div.style.display='none';
     }
});

let bus=document.querySelector('#bus');
bus.addEventListener('click',function(){
    window.location.replace('cab.html')

});