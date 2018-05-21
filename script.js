// const flipResultDiv = document.getElementById("coinFlipResult");
var coin = {
    state: 0,
    // randomly set this.state to be either 0 or 1
    flip: function getRandom() {
        this.state = Math.round(Math.random());
        console.log(this.state);
    },
// return “H” or “T” depending on whether this.state is 0 or 1
    toString: function () {
        if (this.state === 0) {    
            return "H";
        } else {
            return "T";
        }        
    },
// set the properties of the image element to show either heads or tails
    toHTML: function() {
        var img = document.createElement("img");
        if (this.state === 0) {
            img.src = "coin_heads.jpg"
        } else {
            img.src = "coin_tails.jpg"
        }
        coinFlipResult.appendChild(img);
    }
};

// Runs a loop to append text to the DOM based on whether the state is 0 or 1
for(i=0; i<20; i++){
    coin.flip()
    coinFlipResult.innerHTML += coin.toString()
} 

// Runs a loop to append images to the DOM based on whether the state is 0 or 1
for(i=0; i<20; i++){
    coin.flip()
    coin.toHTML();
} 