const faqs=document.getElementsByClassName('content');
for(let i=0;i<faqs.length;i++){
    faqs[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}