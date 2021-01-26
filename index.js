let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'
let intervalID = 0
let score = 0
let circleRadius=25
let circleX=300
let circleY =50


 let snow = [{x:canvas.width + 10 , y: 0}]

// create your images
let backImg = document.createElement('img')
backImg.src = 'images/bg.PNG'

let catImg = document.createElement('img')
catImg.src= 'images/cat.PNG'

 let blokImg =document.createElement('img')
 blokImg.src='images/block.PNG'

 let snowImg =document.createElement('img')
 snowImg.src= 'images/snow1.PNG'
//cat axis 
let catY = 200
let catX = 40

let catDecrement =0
let catForward=0

let catIncrement = 2
// event listeners to handle bord movement
document.addEventListener('mousedown', () => {
    // decrementing the cat Y value moves the cat to the top of the canvas
    catIncrement = -5
})

document.addEventListener('mouseup', () => {
    // incrementing the cat Y value moves the cat to the bottom of the canvas
    catIncrement = 2
})

// document.addEventListener('mouseforward', () => {
//     // incrementing the cat Y value moves the cat to the bottom of the canvas
//     catIncrement = 8
// })



function draw(){
    ctx.drawImage(backImg, 0,0)
     
    ctx.drawImage(catImg, catX, catY)
    ctx.drawImage(blokImg,290,240)

   
    
    // set it here else you will get NaN set up

    let constant = snowImg.height + 100
    // loop over a set of pipes to create the pipe animation
    for(let i=0; i< snow.length ;i++) {
        ctx.drawImage(snowImg, snow[i].x, snow[i].y)
        // ctx.drawImage(southPipe, pipes[i].x, pipes[i].y + constant)

        // make the pipes move towards the left on the x axis
        // decrementing the x value does that
        snow[i].x--

        // check if a pipe has reached a certain position
        if (snow[i].x == 50) {
            // increment the score
            score++
            // add a new pipe at a random y value
            snow.push({
                x: canvas.width - 30,
                y: -Math.floor(Math.random() * snowImg.height)
                
            })
        }
 }

        // Visualize it.............................
        // if( catX + catImg.width >= pipes[i].x && catX <= pipes[i].x + northPipe.width && (catY <= pipes[i].y + northPipe.height || catY+catImg.height >= pipes[i].y + constant) || catY + catImg.height >=  canvas.height - fgImg.height){

        //     clearInterval(intervalID);
        //     //DONT EVER DO THE NEXT TWO LINES. This is only for explanations
        //     alert('GAME OVER');
        //     location.reload(); ......................
        // }
        catX += 1
        catY +=1
    }
    // add your score text
    // ctx.font = '20px Verdana'
    // ctx.fillText('Score: ' + score, 10, canvas.height - 50)..........................
     
    // make the bird fall
    // putting a +ve "y" value does that
   
    
   
// create your interval here


window.addEventListener('load', () => {
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
     }, 1)
})
