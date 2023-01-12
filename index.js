




const basketballGame = document.querySelector('#game');
const TemplateBasketballGame = document.querySelector('#element-3');


let cloneBasketballGame = TemplateBasketballGame.content.cloneNode(true)
basketballGame.appendChild(cloneBasketballGame)

const field = document.getElementById('game-container')
const ball = document.getElementById('ball')
const team1 = document.getElementById('team-1')
const team2 = document.getElementById('team-2')
let team1Score = 0;
let team2Score = 0;
const textNotification = document.getElementById('score-notification')


function scoreNotification(text, color){
const showNotification = new CustomEvent('notificationText', {
    detail: {
      name: text,
      textColor: color
    }
  });
  let disableTextTime = 3000
  setTimeout(() => {
    textNotification.style.visibility = 'hidden'
    freezeClic = false
   }, disableTextTime);
  textNotification.dispatchEvent(showNotification)
}



let freezeClic = false; 

document.addEventListener('click', e => {
    if (freezeClic) {
        e.stopPropagation();
        e.preventDefault();
    }
}, true);

  textNotification.addEventListener('notificationText', (e) => {
    textNotification.textContent = e.detail.name
    textNotification.style.color = e.detail.textColor
  })

 
  
field.onclick = function(event) {

    ball.style.transform = 'none'
  
    let fieldCoords = this.getBoundingClientRect();

  
const divider = 2
    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / divider,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / divider
    };



const hoopACoordsX1 = 11.5
const hoopACoordsX2 = 26.5
const hoopACoords12 = 136.5
const hoopACoordsY2 = 151.5
 
    if(ballCoords.left < hoopACoordsX2
        && ballCoords.left > hoopACoordsX1
        && ballCoords.top < hoopACoordsY2
        && ballCoords.top > hoopACoords12){
            team1Score++
        team1.innerText = `Team A:${team1Score}`
        textNotification.style.visibility = 'visible'
        scoreNotification('Team A scored', 'blue');
        freezeClic = true
    } 


const hoopBCoordsX1 = 136.5
const hoopBCoordsX2 = 151.5
const hoopBCoordsY1 = 530.5
const hoopBCoordsY2 = 545.5

    if(ballCoords.top < hoopBCoordsX2
        && ballCoords.top > hoopBCoordsX1
        && ballCoords.left < hoopBCoordsY2
        && ballCoords.left > hoopBCoordsY1){
            team2Score++
            team2.innerText = `Team B:${team2Score}`
            textNotification.style.visibility = 'visible'
            scoreNotification('Team B scored', 'red')
            freezeClic = true
    }


 
    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }

    if (ballCoords.left < 0) {
        ballCoords.left = 0
    }

    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
    
  }
  








/* END TASK 3 */
