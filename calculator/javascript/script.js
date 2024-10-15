
document.querySelector('table').addEventListener('click', function(e) {

   if(e.target.tagName !== 'TD'){
      return;
   }


    console.log(e.target);
 var a = e.target.innerHTML;

   var b = document.getElementById('row0');
   let l = b.innerHTML[b.innerHTML.length-1];

   if (a == 'AC') {
      b.innerHTML = '0';
   } else if (a == '=') { 
      b.innerHTML = eval(b.innerHTML);
   } else if(
      !(['(','0'].includes(l) && ['+','=','%', ")", ".", "*","/" ].includes(a)) && 
      !(['+','%', ".", "*","/","-" ].includes(l) && ['+','%', ")", ".", "*","/" ].includes(a)) &&
      !(l == '-' && ['-','+','%', ")", ".", "*","/" ].includes(a)) &&
      !(l == ')' && a.match(/[0-9]/)) &&
      !(l.match(/[0-9]/) && a == '(' && b.innerHTML != '0' )
   ){
      b.innerHTML =  (b.innerHTML == '0')?a:b.innerHTML+a;
   } 
    
  

   
});
