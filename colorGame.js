/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares =document.querySelectorAll(".square");
var pickedColor =  pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function()
{
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor =pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
})


hardBtn.addEventListener("click", function()
{
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor =pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
    {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display="block"; 
              
    }
})


resetButton.addEventListener("click", function()
{
//generate new colors
colors = generateRandomColors(numOfSquares);
//pick a new random color from array
pickedColor = pickColor();
// change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;
this.textContent = "NEW COLORS";

//change colors of squares

for(var i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor="steelblue";
messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++)
{
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function()
    {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            messageDisplay.textContent ="Correct";
            resetButton.textContent ="Play Again!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent ="Try Again ";
        }
        
        //compare color to pickColor
    })

}

function changeColors(color)
{
    
    //loop through all squares
    for(var i=0; i<squares.length; i++)
    {
        //change each color to match color
        
        squares[i].style.backgroundColor = color;
        
    }
}


function pickColor()
{
    var random = Math.floor(Math.random() * colors.length );
    return colors[random]; 
}


function generateRandomColors(num)
{
    //make an array

    var arr = []
    //add num random color to arr

    for(var i=0; i<num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
        
        //return that array
    return arr;
}

function randomColor()
{
    //pick a red color from 0 - 255
    var r = Math.floor(Math.random() * 256 );
    //pick a green color from 0 - 255
    var g = Math.floor(Math.random() * 256 );
    //pick a blue color from 0 - 255
    var b =  Math.floor(Math.random() * 256 );
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/