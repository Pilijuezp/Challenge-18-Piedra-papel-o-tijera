const options =[ 'piedra','papel','tijeras'];

function playerMove(){
    let move = prompt('Piedra,papel o tijeras').toLowerCase().trim();
    return jugada;
}

function botMove(){
    const random= Math.round(math.random()*2); //--. obtenemos un numero random de 0 a 2
    return options[random];
}

function definition (player){
    // let player = player();
    let botMove = bot();
    switch(true){
        case player==bot:
            alert(`Bot jugo ${bot}. Empate`);
        break
        case player=='piedra' && bot =='papel':
            alert(`Bot jugo ${bot}.` +'Gana bot');
        break
        case player=='piedra' && bot =='tijeras':
            alert(`Bot jugo ${bot}.` +'Gana player');
        break
        case player=='papel' && bot =='piedra':
            alert(`Bot jugo ${bot}.` +'Gana player');
        break
        case player=='papel' && bot =='tijeras':
            alert(`Bot jugo ${bot}.` +'Gana bot');
        break
        case player=='tijeras' && bot =='piedra':
            alert(`Bot jugo ${bot}.` +'Gana bot');
        break
        case player=='tijeras' && bot =='papel':
            alert(`Bot jugo ${bot}.` +'Gana player');
        break
    }
}