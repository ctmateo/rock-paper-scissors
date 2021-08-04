function rpsGame(choice) {
 let humanChoice = choice.id;
 console.log("mychoice ", humanChoice)

 let iaChoice = numberRandom(rpsRandomChoice());
 console.log('computer ',iaChoice)

 let results = decideWinner(humanChoice,iaChoice);
 console.log(results)

 message = finalMessage(results)
 console.log(message)
 rpsFrontend(humanChoice,iaChoice,message)
}

function rpsRandomChoice(){
    return Math.floor(Math.random()*3);
}

function numberRandom(number){
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(hChoice, pcChoice){
    let datebase = {
        'rock': {'scissors': 1,'rock':0.5, 'paper':0},
        'paper': {'rock':1,'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    };

    let yourScore = datebase[hChoice][pcChoice]
    let computerScore = datebase[pcChoice][hChoice]

    return [yourScore,computerScore]
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0 && computerScore === 1){
        return {'message':'Has perdido', 'color':'rgb(241, 136, 136)'}
    }else if(yourScore === 0.5 && computerScore === 0.5){    
        return {'message':'Empate', 'color':'rgb(238, 180, 113)'}
    }else{
        return {'message':'Has ganado', 'color':'rgb(136, 143, 241)'}
    }
}

function rpsFrontend (imagehChoice, imagepcChoice, finalMessage){
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    let humanDiv = document.createElement('containerElement');
    let botDiv = document.createElement('div');
    let message = document.createElement('div');

    //background-color:rgb(241, 136, 136)

    humanDiv.innerHTML = "<img src='" + imageDatabase[imagehChoice] + "' style='background-color:rgb(136, 143, 241)'>"
    botDiv.innerHTML = "<img src='" + imageDatabase[imagepcChoice] + "' style='background-color:rgb(241, 136, 136)'>"
    message.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; display:flex; align-items: center; justify-content: center; font-size: 20px; padding:10px;'>" + finalMessage['message']+ "<h1>";

    document.getElementById('valuetwo').appendChild(humanDiv)
    document.getElementById('valuetwo').appendChild(botDiv)
    document.querySelector('body').appendChild(message)
}