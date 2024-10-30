player(100, 22)

function player(victory, defeat){
    let winRecord = victory - defeat;
    let level = classification(victory);
    console.log(`O herói tem saldo de ${winRecord} vitórias e está no nível de ${level}`);
    
}
function classification(victory){
    if(victory < 10){        /*se eu deixasse como no enunciado "Se vitórias for menor do que 10 = Ferro
        Se vitórias for entre 11 e 20 = Bronze" teria um erro lógico e retornaria "Imortal"*/
        return "Ferro";
    }else if(victory >= 10 && victory <= 20){
        return "Bronze";
    }else if(victory > 20 && victory <= 50){
        return "Prata";
    }else if(victory > 50 && victory <= 80){
        return "Ouro";
    }else if(victory > 80 && victory <= 90){
        return "Diamante";
    }else if(victory > 90 && victory <= 100){
        return "Lendário";
    }else{
        return "Imortal";
    }
}