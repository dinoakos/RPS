let icons = ['rock','paper','scissors'];
let ckep;
function choosen(kep){
    ckep=kep;
    switch(kep){
        case 'rock':
            window.alert('rock');
            repeatedGreetings();
            break;
        case 'paper':
            window.alert('paper');
            repeatedGreetings();
            break;
        case 'scissors':
            window.alert('scissors');
            repeatedGreetings();
            break;
    }
}


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async () => {
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
  
  switch(bot){
    case 1:
        document.getElementById('rock2').style="transform: translateY(-6vh)";
        document.getElementById('rock2').style="background-color: teal";
        break;
    case 2:
        document.getElementById('paper2').style="transform: translateY(-6vh)";
        document.getElementById('paper2').style="background-color: teal";
        break;
    case 3:
        document.getElementById('scissors2').style="transform: translateY(-6vh)";
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


}


  
  
  