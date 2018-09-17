var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var game = {
    wins: 0,
    losses: 0,
    randomNumber: 0,
    stone1: 0,
    stone2: 0,
    stone3: 0,
    stone4: 0,
    score: 0,

    startGame: function () {
        this.score = 0;
        this.randomNumber = Math.floor(Math.random() * 120) + 19;
        console.log("randomNumber: " + this.randomNumber);
        this.stone1 = Math.floor(Math.random() * 12) + 1;
        console.log("stone1: " + this.stone1);
        this.stone2 = Math.floor(Math.random() * 12) + 1;
        console.log("stone1: " + this.stone2);
        this.stone3 = Math.floor(Math.random() * 12) + 1;
        console.log("stone1: " + this.stone3);
        this.stone4 = Math.floor(Math.random() * 12) + 1;
        console.log("stone1: " + this.stone4);

        $("#image-1").on("click", function () {
            this.score += this.stone1;
            console.log(this.score);
        });


    },
}
game.startGame();
