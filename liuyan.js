window.onload=function(){
  let name=document.querySelector('.username');
  let text=document.querySelector('textarea');
  let btn=document.querySelector('.tijiao');
  let span=document.querySelector('.rest span');
  let total=120;
  //1.
  // text.onkeyup=function(){
  // 	  let length=text.value.length;
  // 	  span.innerText=`${total-length}`;
  // }
  // btn.onclick=function(e){
  // 	   if(e.type=='click'){
  // 	   	   fn();
  // 	   }
  // 	   if(e.type=='keydown'){
  // 	   	   if(e.keyCode==13 && e.shiftKey){
  // 	   	   	   fn();
  // 	   	   }
  // 	   }
  // }
  // 2.
  //  3.
  text.onkeyup=function(){
      let length=text.value.length;
      span.innerText=`${total-length}`;
  }
  btn.onclick=function(e){
    if(e.type=='click'){
      fn();
    }
    if(e.type=='keydown'){
      if(e.shiftKey && e.keyCode==13){
          fn();
      }
    }
  }
  function fn(){
  	 let use=name.value;     
  	 let val=text.value;      
     let left=document.querySelector('.left');
     let lis=document.createElement('li');
     // let lis=document.querySelector('li');
     lis.innerHTML=
         `<img src="img/big.jpg" alt="">
          <div class="box11">
             <h4>${use}</h4>
             <p>${val}</p>
          </div>`
     left.prepend(lis);
     name.value='';
     text.value='';
  }
  
     let uls=document.querySelector('ul');
     uls.onmouseover=function(e){
           let element=e.target;
           if(element.nodeName=='LI'){
              element.onmouseover=function(e){
                 if(e){
                   element.style.background='#ccc';
                 }
              }
           }

     }
     uls.onmouseout=function(e){
           let element=e.target;
           if(element.nodeName=='LI'){
              element.onmouseout=function(e){
                 if(e){
                   element.style.background='';
                 }
              }
           }

     }







}
