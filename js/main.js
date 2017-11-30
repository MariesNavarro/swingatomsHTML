function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }

function preventLandscape(c){
  var wr = _('#logo');
  var t = _('#interfaz>h2')
  if(c === 'l'){
    wr.style.display = "none"
    t.style.marginTop = "70px"
  } else {
    wr.style.display = "block"
    t.style.marginTop = "0"
  }
}

// var arr = ['',
//            'img/montana.png',
//            'img/astronauta.png',
//            'img/wave2.png',
//            'img/wave1.png',
//             'img/wave0.png'];

// checkLoad();
// function checkLoad (){
//   var xhrList = [];
//   console.log(xhrList);
//   console.log(arr);
  // for(var i=0; i<=5; i++){
    // xhrList[i] = new XMLHttpRequest();
    // xhrList[i].open('GET', arr[i], true);
    // xhrList[i].responseType = "blob";
    // xhrList[i].onload = function (e){
    //   // if(this.readyState == 4){
    //   //   loadFinished++;
    //   //   console.log(loadFinished);
    //   //   // var num = Math.round(loadFinished/2.05);
    //   //   // p.innerHTML = num + "%";
    //   //   // if(loadFinished == 5){
    //   //   }
    //   }
    // }
//     xhrList[i].send();
// }

countPercentage();
function countPercentage(){
  var cN = 0;
  var wrloading = _('#loading');
  var p = _("#percentage");
  var c =  setInterval(function(){
    cN++;
    p.innerHTML = cN + "%";
    setTimeout(function(){
      wrloading.classList.remove('showDisplayFlex');
      wrloading.classList.add('hideDisplay');
    },4000);
  },400);


}
