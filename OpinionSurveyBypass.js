javascript:(function () {

  var f1 = window.frames[0];
  f2 = f1.window.frames[1];
  f3 = f2.frames[1];

  var text = f3.document.getElementsByTagName("body")[0].innerHTML;
  var regex = /id.*?(rdBtn.*?Y)"/g;
  
  while ((m = regex.exec(text)) !== null ) {
    f3.document.getElementById(m[1]).checked = true;
  }
  
  f3.document.getElementById("txtAnsLike").value = "非常棒!";
  f3.document.getElementById('btnIns').click();

})();
