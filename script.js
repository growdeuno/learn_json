 var txt ='{"name":"bitcoin","ticker":"BTC","founder":"Satoshi Nakamoto"}';
    var parsed_txt = JSON.parse(txt);
    document.getElementById('name').innerHTML = parsed_txt.name;
    document.getElementById('ticker').innerHTML = parsed_txt.ticker;
    document.getElementById('founder').innerHTML = parsed_txt.founder;
