

function keisan(){
    let zeibetu = document.getElementById('zeibetu-js').value;
    let kekka = document.getElementById('zeikomi-js');

    if(Number(zeibetu)){
        let zeikomiMoney = zeibetu * 1.1;
        console.log(zeikomiMoney);
        kekka.innerHTML = Math.floor(zeikomiMoney);
    } else if(zeibetu === '5000兆円'){
       let hosii = '欲しい！';
       kekka.innerHTML = hosii;
    } else {
        let text = '半角数字で入力しなさい';
        console.log(text);
        kekka.innerHTML = text;
    }

}