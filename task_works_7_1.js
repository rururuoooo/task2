'use strict';

var pages =document.getElementsByTagName('li')
var Page = Array.from(pages);
for(let i=0; i<Page.length; i++){
  Page[i].setAttribute('id','page'+i);
  Page[i].setAttribute('class','pages')
}

document.getElementById('getid').addEventListener('click',function(){
  let genreid =document.getElementById('genreID').value;
  MakingTable(genreid,1,0);

  var pages =document.querySelectorAll('.pages');
console.log(pages)
pages.forEach(function(page) {
  page.addEventListener('click', function(e) {
    
    var P = e.target.id;
    console.log(P);
    if(P=== 'page1'){
      MakingTable(genreid,1,0);
    }else if(P==='page2'){
      console.log('a')
      MakingTable(genreid,1,11);
    }else if(P==='page3'){
      MakingTable(genreid,1,21);
    }else if(P==='page4'){
      MakingTable(genreid,2,0);
    }else if(P ==='page5'){
      MakingTable(genreid,2,11);
    }else if(P==='page6'){
      MakingTable(genreid,2,21);
    }else if(P==='page7'){
      MakingTable(genreid,3,0);
    }else if(P==='page8'){
      MakingTable(genreid,3,11);
    }else if(P==='page9'){
      MakingTable(genreid,3,21);
    }else if(P==='page10'){
      MakingTable(genreid,4,0);
    }else{
      MakingTable(genreid,4,0);
    }
  })
})
})

function MakingTable(genreId,Num,a){
  document.getElementById('maintable').innerHTML='';
  let DogWalkingRank= new XMLHttpRequest();//new演算子を利用してオブジェクトを生成
  DogWalkingRank.open('Get','https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId='+genreId+'&page='+Num+'&applicationId=1055535346158140281',true)
  //open( )メソッドを利用して、メソッド、URL、非同期処理の有無
  DogWalkingRank.responseType = 'json';
  DogWalkingRank.send(null);//nullは送るものがない
  DogWalkingRank.onload = function(e) {
    if (DogWalkingRank.readyState == 4) {//現在の通信状況,4は通信完了
      if (DogWalkingRank.status == 200 ) {//200は正常に通信出来ている
        let Ranking = DogWalkingRank.response;
          // 変数usersにデータを代入
        var defaulttr =document.createElement('tr');
        maintable.appendChild(defaulttr);
        var defaultRank =document.createElement('td');
        defaulttr.appendChild(defaultRank);
        defaultRank.innerHTML = '順位';
        var defaultimg =document.createElement('td');
        defaulttr.appendChild(defaultimg);
        defaultimg.innerHTML = '画像';
        var defaultname =document.createElement('td');
        defaulttr.appendChild(defaultname);
        defaultname.innerHTML = '商品名';
        var defaultprice =document.createElement('td');
        defaulttr.appendChild(defaultprice);
        defaultprice.innerHTML = '価格';


        for(let z=a; z<a+10;z++){
          let addtr =document.createElement('tr');
          maintable.appendChild(addtr);
          
          let addRank =document.createElement('td');
          addtr.appendChild(addRank);
          addRank.innerHTML =Ranking.Items[z].Item.rank;
          
          let addImg =document.createElement('td');
          addtr.appendChild(addImg);
          addImg.innerHTML ='<img width="100px" hight="100px" src="'+Ranking.Items[z].Item.mediumImageUrls[0].imageUrl+'">'
          
          let addName=document.createElement('td');
          addtr.appendChild(addName);
          addName.innerHTML =Ranking.Items[z].Item.itemName;
          
          let addPrice=document.createElement('td');
          addtr.appendChild(addPrice);
          addPrice.innerHTML =Ranking.Items[z].Item.itemPrice+'円';
        }
      }
    }
  }
  document.getElementById('table').style.display ='block';
}