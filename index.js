let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'
let intervalID = 0
let score = 0
let circleRadius=25


let blokX = 290;
let blokY = 240;
// let snowX=30
// let snowY=90

let isLeftArrow = false
let isRightArrow = false
let isUpArrow =false
let isDownArrow =false

let startBtn = document.querySelector('#start')
let startInfo = document.querySelector('#startInfo')
let restartBtn = document.querySelector('#restart')
let restartInfo = document.querySelector('#restartinfo')
let conginfor =document.querySelector('#congs')

 let snow = [{x:canvas.width + 10 , y: 0}]

// create your images
let backImg = document.createElement('img')
backImg.src = './images/bg.png'

let catImg = document.createElement('img')
catImg.src= './images/cat.png'

 let blokImg =document.createElement('img')
 blokImg.src='./images/block.png'

 let snowImg =document.createElement('img')
 snowImg.src= './images/snow1.png'
//cat axis 
let catY = 220
let catX = 40
let catWidth = 80
let catHeight = 50

let catDecrement =0
let catForward=0

let catIncrement = 2

//handle arrow key click events here
document.addEventListener('keydown', (event) => {
    if (event.keyCode== 39 || event.key == "ArrowRight") {
       isRightArrow = true;
       isLeftArrow = false;
    }
    else if (event.keyCode == 37 || event.key == "ArrowLeft") {
       isRightArrow = false;
       isLeftArrow = true;
    }

    else if (event.keyCode == 40 || event.key == "ArrowDown") {
        isUpArrow = false;
        isDownArrow = true;

    }
    else if (event.keyCode == 38 || event.key == "ArrowUp") {
        isDownArrow = false;
        isUpArrow = true;
        
    }
    })

document.addEventListener('keyup', (event) => {
    isRightArrow = false;
    isLeftArrow = false;
    isUpArrow = false;
    isDownArrow = false;
})



function draw(){
        ctx.drawImage(backImg, 0,0)
     
        ctx.drawImage(catImg, catX, catY, catWidth, catHeight)

        ctx.drawImage(blokImg, blokX, blokY)
    //scores
        ctx.font = '25px Verdana'
        ctx.fillText('Score: ' + score, 10, canvas.height - 10)  
        // if(catImg.x==5){
        //     score+=10
        // }

        for(let i=0; i< snow.length; i++) {
                ctx.drawImage(snowImg, snow[i].x, snow[i].y)
                
                snow[i].x--

            //  if snow has reached a certain position
            if (snow[i].x == 50) {
                // increment the score
                score+=10
                // add a new snow at a random y value
                snow.push({
                    x: canvas.width - 30,
                    y: Math.floor(Math.random() * snowImg.height)  
                })
            }   

            if( ((catX + catWidth >= snow[i].x   && catX <= snow[i].x + snowImg.width) && 
                (catY >=  snow[i].y)) && catY + catImg.height <  snow[i].y + snowImg.height){
                    clearInterval(intervalID);
                 restartBtn.style.display='block'
                canvas.style.display='none'
                restartInfo.style.display='block' 
            

                
            }     
                // clearInterval(intervalID);
            //     //SNOW COLLISION if () {
            //     //     console.log('Game Ended')
            //     //     alert('Game Over')
            //         clearInterval(intervalID);
            //     // }
           
        }
            if(isLeftArrow){
                catX-=1
            }

            if(isRightArrow){
                catX+=1
            }

            if(isUpArrow){

                catY-=1
            }

            if(isDownArrow){
                catY+=1
            }

            if( ((catX >= blokX && catX + catImg.width <= blokX + blokImg.width) && 
            (catY+catImg.height >= blokY)) || catY + catImg.height >=  canvas.height){
                clearInterval(intervalID);
                restartBtn.style.display='block'
                canvas.style.display='none'
                restartInfo.style.display='block'
                console.log('game overrrr')
                
                
                
               
            }
//           wining game
            if(catX>=canvas.width){
                clearInterval(intervalID);
                canvas.style.display='none'
                conginfor.style.display='block'


                // window.addEventListener('load', () => {
                //     canvas.style.display = 'none'
                //     restartBtn.addEventListener ('click', () =>{
                //         restartgame() 
                //     })
                // })
            }
}
//          game sound
         

        function startGame(){
            startInfo.style.display = 'none'
            canvas.style.display = 'block'
            intervalID = setInterval(() => {
                requestAnimationFrame(draw)
            }, 10)
        }
    
    //  restarting the game
            function restartgame(){
                restartInfo.style.display='none'
                restartBtn.style.display='none'
                catY = 220
                catX = 40
                
                
                 startGame()
            }


        window.addEventListener('load', () => {
            canvas.style.display = 'none'
            restartInfo.style.display = 'none'
            conginfor.style.display='none'
            startInfo.style.display='block'
            


            restartBtn.addEventListener ('click', () =>{
                // restartBtn.style.display='block' 
                 
                 console.log("restart button click")
                 restartgame()   
        })

            startBtn.addEventListener('click', () =>{
                startGame() 
                 console.log("start button click")
                 
               

            })
        })