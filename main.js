const mainB = document.getElementById('main');
 function colorChanging(x){
    mainB.style.backgroundColor=x;
    mainB.style.transition='.8s';
 }

function item1(){colorChanging("yellow")}
function item2(){colorChanging("green")}
function item3(){colorChanging("red")}
function item4(){colorChanging("gray")}
function item5(){colorChanging("pink")}
function item6(){colorChanging("blue")}
function items(){colorChanging("white")}
