window.onload=function(){

 var apple=0;
var scrollFunc = function (e) {
	
	
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta < 0) { //当滑轮向下滚动时

    if(document.getElementById("controller-2").checked==true){
		document.getElementById("sc").style.right="-261px";
        document.getElementById("sc").style.bottom="-121px";
        setTimeout("document.getElementById('sm').style.left='120px'",1000);
        setTimeout("document.getElementById('sm').style.top='-180px'",1000);
        document.getElementById("jz").style.opacity="1";
	};
			
               switch(apple){
				default:document.getElementById("controller-5").checked=true;				
			   apple=4;
			   break;	   
				   
				case 0:   
			   document.getElementById("controller-2").checked=true;
			    window.onmousewheel = function(){};
                setTimeout(function () {
                window.onmousewheel = scrollFunc; 
                }, 1000);				
			    apple+=1;
			    break;
			   
			   case 1:   			   
			   document.getElementById("controller-3").checked=true;
			   window.onmousewheel = function(){};
               setTimeout(function () {
               window.onmousewheel = scrollFunc; 
               }, 1000);
			   apple+=1;
			   break;
			   
			   case 2:   
			   document.getElementById("controller-4").checked=true;
			   window.onmousewheel = function(){};
               setTimeout(function () {
               window.onmousewheel = scrollFunc; 
               }, 1000);
			   apple+=1;
			   break;
			   
			   case 3:   
			   document.getElementById("controller-5").checked=true;
			   window.onmousewheel = function(){};
               setTimeout(function () {
               window.onmousewheel = scrollFunc; 
               }, 1000);
			   apple+=1;
			   break;
			   
			   case 4:   
			   document.getElementById("controller-1").checked=true;
			   window.onmousewheel = function(){};
               setTimeout(function () {
               window.onmousewheel = scrollFunc; 
               }, 1000);
			   apple+=1;
			   break;
			   		   
			   }
            }
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
			
	if(document.getElementById("controller-4").checked==true){
		    document.getElementById("sc").style.right="-261px";
            document.getElementById("sc").style.bottom="-121px";
            setTimeout("document.getElementById('sm').style.left='120px'",1000);
            setTimeout("document.getElementById('sm').style.top='-180px'",1000);
            document.getElementById("jz").style.opacity="1";
	};
			
                switch(apple){
			   
			   case 1:   			   
			   document.getElementById("controller-1").checked=true;
			   window.onmousewheel = function(){};
			   setTimeout(function () {
               window.onmousewheel = scrollFunc; 
               }, 1000);
			   apple-=1;
			   break;
			   
			   case 2:   
			   document.getElementById("controller-2").checked=true;
			   window.onmousewheel = function(){};
			   setTimeout(function () {
               window.onmousewheel = scrollFunc; 
               }, 1000);
			   apple-=1;
			   break;
			   
			   case 3:   
			   document.getElementById("controller-3").checked=true;
			   window.onmousewheel = function(){}; 
			   setTimeout(function () {
               window.onmousewheel = scrollFunc; 
               }, 1000);
			   apple-=1;
			   break;
			   
			   case 4:   
			   document.getElementById("controller-4").checked=true;
			   window.onmousewheel = function(){}; 
			   setTimeout(function () {
               window.onmousewheel = scrollFunc; 
               }, 1000);
			   apple-=1;
			   break;

               default:document.getElementById("controller-1").checked=true;
			   apple=0;
			   break;			   
			   }
            }
        } 
        
    }

    //给页面绑定滑轮滚动事件
     //滚动滑轮触发scrollFunc方法
    window.onmousewheel = scrollFunc;

  for(var i=0;i<5;i++){
	  var banana=document.getElementsByTagName("input")[i];
	  banana.index=i;
	  banana.onclick=function(){
		  n=this.index;
		  apple=n;
		  if(n==2){
		   document.getElementById("sc").style.right="-261px";
           document.getElementById("sc").style.bottom="-121px";
           setTimeout("document.getElementById('sm').style.left='120px'",1000);
           setTimeout("document.getElementById('sm').style.top='-180px'",1000);
           document.getElementById("jz").style.opacity="1";
		  };
	  };
  };
	
};
	
