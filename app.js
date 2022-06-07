let icons = document.querySelector('.icons'),
    player = document.querySelector('.player'),
    computer = document.querySelector('.computer'),
    draw = document.querySelector('.draw'),
    popubView = document.querySelector('.popub-view'),
    container = document.querySelector('.container'),
    startBtn = document.querySelector('.start'),
    timeGame = document.querySelector('.timeGame');

function start() {

    container.style.display = 'block';




    let playerCount = 0;
    let computerCount = 0;
    let drawCount = 0;

    player.innerHTML = `PLayer : ${playerCount}`;
    computer.innerHTML = `Computer : ${computerCount}`;
    draw.innerHTML = `Draw : ${drawCount}`;


    function getIcon() {
        let random = Math.random() * 10;
        if (random > 5) {
            return 'scissors'
        } else if (random < 3) {
            return 'hand'
        } else {
            return 'back';
        }
    }

    function getWinner(p, c) {
        if (p === 'scissors') {
            if (c === 'hand') {
                return 'player';
            } else if (c === 'back') {
                return 'computer';
            } else {
                return 'draw';
            }
        }
        if (p === 'hand') {
            if (c === 'scissors') {
                return 'computer';
            } else if (c === 'back') {
                return 'player';
            } else {
                return 'draw';
            }
        }
        if (p === 'back') {
            if (c === 'hand') {
                return 'computer';
            } else if (c === 'scissors') {
                return 'player';
            } else {
                return 'draw';
            }
        }
    }





    function getComputerChoise(winner, computerchoise) {
        if (winner === 'player') {
            playerCount++;
            popubView.innerHTML = 
                `
                <div class="popup">
                    <h2 class="winn">You win</h2>
                    <img  width="200px" src="./imgs/${computerchoise}.svg" alt="">
                  
                <div class="total">
                    <span> Computer is ${computerCount}</span>
                    <span> Player is ${playerCount}</span>
                    </div>
                </div>
                
                `
            
        }

        if (winner === 'computer') {
            computerCount++;
            popubView.innerHTML = 
                `
                <div class="popup">
                    <h2 class="lose">You lose</h2>
                    <img  width="200px" src="./imgs/${computerchoise}.svg" alt="">
                  
                <div class="total">
                    <span> Computer is ${computerCount}</span>
                    <span> Player is ${playerCount}</span>
                    </div>
                </div>
                
                `
            
        }
        if (winner === 'draw') {
            drawCount++;

            popubView.innerHTML = 
                `
                <div class="popup">
                    <h2 class="youDraw" >Draw</h2>
                    <img  width="200px" src="./imgs/${computerchoise}.svg" alt="">
                   
                <div class="total">
                    <span> Computer is ${computerCount}</span>
                    <span> Player is ${playerCount}</span>
                    </div>
                </div>
                
                `
            
        }

        player.innerHTML = `PLayer : ${playerCount}`;
        computer.innerHTML = `Computer : ${computerCount}`;
        draw.innerHTML = `Draw : ${drawCount}`;

        popubView.addEventListener('click', (e) => {
            if (e.target.classList.contains('popub-view')) {
                popubView.style.display = 'none';
            }
        });

    }


    icons.addEventListener('click', (e) => {
        let target = e.target;
        if (target.tagName = 'IMG') {
            popubView.style.display = 'block';
            let playerId = e.target.id
            let computerId = getIcon();
            let winnerIs = getWinner(playerId, computerId);
            getComputerChoise(winnerIs, computerId);
        }
        
    });

    function restartGame() {
        popubView.style.display = 'block';


        popubView.innerHTML = 
        `
        <div class="popup">
            <h2 class="youDraw" >Game Over</h2>
        <div class="total">
            <span> Computer is ${computerCount}</span>
            <span> Player is ${playerCount}</span>
            </div>
        </div>
        
        `

        playerCount = 0;
        computerCount = 0;
        drawCount = 0;

        player.innerHTML = `PLayer : ${playerCount}`;
        computer.innerHTML = `Computer : ${computerCount}`;
        draw.innerHTML = `Draw : ${drawCount}`;
    }



    startBtn.style.display = 'none';

    let time = setInterval(() => {
        timeGame.innerHTML--;
        if (timeGame.innerHTML === '0') {
            clearInterval(time);
            setTimeout(() => {
                location.reload();
            }, 4000);
            restartGame();
        }
    }, 1000);

    

}



startBtn.addEventListener('click', start);
