/*
* @Author: AIAI
* @Date:   2017-09-26 08:46:21
* @Last Modified by:   AIAI
* @Last Modified time: 2017-09-26 09:06:14
*/
//$函数
  function $(select,ranger){
      if(typeof select=='string'){
      	  ranger=ranger||document;
      	  var first=select.charAt (0);
      	  if(fisrt=='.'){
      	  	 return getClass(select.substring(1),ranger);
      	  }else if(first =='#'){
      	  	 return document.getElementById(select.substring(1));
      	  }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
      	  	 return ranger.getElementsByTagName(select);
      	  }else if(typeof select=='function'){
      	  	window.addEventListener('load',select)
      	  }
      }
  }
  //Windows调用
  $(function(){
     let box=$('.box')[0];
  })