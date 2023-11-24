let icons = ['rock','paper','scissors'];
let ckep;
function choosen(kep){
    ckep=kep;
    switch(kep){
        case 'rock':
            window.alert('rock');
            document.getElementById('rock').style="background-color: teal";
            repeatedGreetings();
            break;
        case 'paper':
            window.alert('paper');
            document.getElementById('paper').style="background-color: teal";
            repeatedGreetings();
            break;
        case 'scissors':
            window.alert('scissors');
            document.getElementById('scissors').style="background-color: teal";
            repeatedGreetings();
            
            break;
    }
}


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async () => {
    disableIcons();
    for(let i=0; i<10;i++){
        await sleep(200)
        document.getElementById('rock2').style="transform: translateY(4vh)";
        await sleep(20)
        document.getElementById('paper2').style="transform: translateY(4vh)";
        await sleep(20)
        document.getElementById('scissors2').style="transform: translateY(4vh)";
        await sleep(200)
        document.getElementById('rock2').style="transform: translateY(-4vh)";
        await sleep(20)
        document.getElementById('paper2').style="transform: translateY(-4vh)";
        await sleep(20)
        document.getElementById('scissors2').style="transform: translateY(-4vh)";
    }
  
  await sleep(200)
  document.getElementById('rock2').style="transform: translateY(0vh)";
  document.getElementById('paper2').style="transform: translateY(0vh)";
  document.getElementById('scissors2').style="transform: translateY(0vh)";
  
  let bot=Math.floor(Math.random()*3)+1;
  
  await sleep(210)
  switch(bot){
    case 1:
        document.getElementById('rock2').style="transform: translateY(-6vh)";
        document.getElementById('paper2').style="transform: translateY(0vh)";
        document.getElementById('scissors2').style="transform: translateY(0vh)";
        document.getElementById('rock2').style="background-color: teal";
        break;
    case 2:
        document.getElementById('paper2').style="transform: translateY(-6vh)";
        document.getElementById('rock2').style="transform: translateY(0vh)";
        document.getElementById('scissors2').style="transform: translateY(0vh)";
        document.getElementById('paper2').style="background-color: teal";
        break;
    case 3:
        document.getElementById('scissors2').style="transform: translateY(-6vh)";
        document.getElementById('paper2').style="transform: translateY(0vh)";
        document.getElementById('rock2').style="transform: translateY(0vh)";
        document.getElementById('scissors2').style="background-color: teal";
        break;
}

await sleep(1000)
    if( (ckep=='rock' && bot==2 ) || (ckep=='paper' && bot==3) || (ckep=='scissors' && bot==1)){
        window.alert("Te vesztettél");
        
    }

    if( (ckep=='rock' && bot==3 ) || (ckep=='paper' && bot==1) || (ckep=='scissors' && bot==2)){
        window.alert("Te Nyertél");
        
    }
    if( (ckep=='rock' && bot==1 ) || (ckep=='paper' && bot==2) || (ckep=='scissors' && bot==3)){
        window.alert("Döntetlen");
        
    }
    enableIcons();


}

function disableIcons(){
    document.getElementById('rock').onclick="#";
    document.getElementById('paper').onclick="#";
    document.getElementById('scissors').onclick="#";
}
function enableIcons(){
    document.getElementById('rock').setAttribute("onclick","choosen('rock')");
    document.getElementById('paper').setAttribute("onclick","choosen('paper')");
    document.getElementById('scissors').setAttribute("onclick","choosen('scissors')");
}

  
  
  