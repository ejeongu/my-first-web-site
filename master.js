var Links = {
  setColor : function(color) {
    var alist = document.querySelectorAll('a');
     var i = 0;
     while (i < alist.length) {
       alist[i].style.color = color;
       i = i + 1;
     }
  }
};
var Body = {
  setColor : function (color){
    document.querySelector('body').style.color = color;
  },
  setBGcolor : function (color){
    document.querySelector('body').style.backgroundColor = color;
    }
  }
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//function linkssetColor(color) {
   //var alist = document.querySelectorAll('a');
    //var i = 0;
  //  while (i < alist.length) {
    //  alist[i].style.color = color;
    //  i = i + 1;
    //}
//  }

  //function  bodysetcolor (color){
  //  document.querySelector('body').style.color = color;
//  }

//function bodysetbgcolor(color){
  //document.querySelector('body').style.color = color;
//}
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function nightDayHandler(self){
  //var target = document.querySelector('body');

  if(self.value == 'night'){
  Body.setBGcolor('black');
    //bodysetbgcolor('black');
  //  target.style.backgroundColor = 'black';
  Body.setColor('white');
  //bodysetcolor('white');
  //  target.style.color = 'white';
  Links.setColor('powderblue');
  //  linkssetcolor('powderblue');
   self.value = 'day';

//setcolor('powderblue')

  }
  else {
    Body.setBGcolor('white');
    //target.style.backgroundColor = 'white';
    Body.setColor('black');
    //target.style.color = 'black';
    Links.setColor('blue');
    self.value = 'night';
    //self.value = 'night';

    //setColor('blue')
  }
}
