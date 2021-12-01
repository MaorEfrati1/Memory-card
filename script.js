var images4X4 = [];
var images5X5 = [];

var click1_4X4Elt = "";
var click2_4X4Elt = "";
var click1_5X5Elt = "";
var click2_5X5Elt = "";
var click4X4 = -1;
var click5X5 = -1;

var win = 0;

var isPlayer1ArePlaying = true;

var scoreP1 = 0;
var scoreP2 = 0;

var scoreP1_4X4Elt = document.querySelector("#player1Score4X4");
var scoreP2_4X4Elt = document.querySelector("#player2Score4X4");

var scoreP1_5X5Elt = document.querySelector("#player1Score5X5");
var scoreP2_5X5Elt = document.querySelector("#player2Score5X5");


var player1Score4X4Elt = document.querySelector("#player1Score4X4");
var player2Score4X4Elt = document.querySelector("#player2Score4X4");

var player1Score5X5Elt = document.querySelector("#player1Score5X5");
var player2Score5X5Elt = document.querySelector("#player2Score5X5");

var timer4X4 = 0;
var timer4X4Elt = document.querySelector("#timer4X4");
var TurnOf4X4Elt = document.querySelector("#TurnOf4X4");

var timer5X5 = 0;
var timer5X5Elt = document.querySelector("#timer5X5");
var TurnOf5X5Elt = document.querySelector("#TurnOf5X5");


var box4X4Elts = document.getElementsByClassName("box4X4");
var box5X5Elts = document.getElementsByClassName("box5X5");

var joker = 'data:image/jpeg;base64,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';

var library4X4 = {
    pokemon: [
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png'
    ]
}

var library5X5 = {
    pokemon: [
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png',
        'data:image/jpeg;base64,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',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png'
    ]
}

var asideElt = document.querySelector("#aside");
var player1Aside = document.getElementById("player1Aside");
var player2Aside = document.getElementById("player2Aside");

var TotalWinsP1AsideElt = document.getElementById("TotalWinsP1Aside");
var TotalWinsP2AsideElt = document.getElementById("TotalWinsP2Aside");

var TotalWinsP1 = 0;
var TotalWinsP2 = 0;

var TotalScoreP1AsideElt = document.getElementById("TotalScoreP1Aside");
var TotalScoreP2AsideElt = document.getElementById("TotalScoreP2Aside");

var TotalScoreP1 = 0;
var TotalScoreP2 = 0;


var player1 = "";
var player2 = "";

var playersNameElt = document.querySelector("#playersName");
var player1TF = document.getElementById("Player1TF");
var player2TF = document.getElementById("Player2TF");

var player1Stats4X4 = document.getElementById("player1Stats4X4");
var player2Stats4X4 = document.getElementById("player2Stats4X4");

var player1Stats5X5 = document.getElementById("player1Stats5X5");
var player2Stats5X5 = document.getElementById("player2Stats5X5");

var gameSizeElt = document.querySelector("#gameSize");

var JokerElt = document.querySelector("#Joker");
var JokerProceedElt = document.querySelector("#jokerProceed");

var main4X4Elt = document.querySelector("#main4X4");
var main5X5Elt = document.querySelector("#main5X5");

var preElt = document.querySelector("#pre");
var themesElt = document.querySelector("#themes");

var post4X4Elt = document.querySelector("#post4X4");
var post5X5Elt = document.querySelector("#post5X5");

var final4X4Elt = document.querySelector("#final4X4");
var final5X5Elt = document.querySelector("#final5X5");

var again4X4Elt = document.querySelector("#again4X4");
var again5X5Elt = document.querySelector("#again5X5");

// Add Players Name
function addPlayersName() {
    if (player1TF.value != '' && player2TF.value != '') {
        playersNameElt.addEventListener("click", (e) => {
            if (e.target.classList.contains("playersNameSubmit")) {
                chooseGameSize();
                playersNameElt.classList.add("hidden");
                gameSizeElt.classList.remove("hidden");
                player1 = player1TF.value;
                player2 = player2TF.value;
                TurnOf4X4Elt.innerHTML = player1;
                TurnOf5X5Elt.innerHTML = player1;

            }
        })
    } else {
        alert("Please Enter Players Name!")
    }
}

// Choose Game Size
function chooseGameSize() {
    gameSizeElt.addEventListener("click", (e) => {
        if (e.target.classList.contains("main4X4")) {
            gameSizeElt.classList.add("hidden");
            main4X4Elt.classList.remove("hidden");
            asideElt.classList.remove("hidden");
            preElt.classList.remove("hidden");
            chooseTheme4X4();
            if (player1TF.value != '' && player2TF.value != '') {
                addPlayersNameToAside();
                addPlayersNameToStats4X4();
            }
        } else if (e.target.classList.contains("main5X5")) {
            gameSizeElt.classList.add("hidden");

            JokerElt.classList.remove("hidden");
            JokerProceedElt.addEventListener("click", (e) => {
                JokerElt.classList.add("hidden");
                main5X5Elt.classList.remove("hidden");
                asideElt.classList.remove("hidden");
                preElt.classList.remove("hidden");
                chooseTheme5X5();
                if (player1TF.value != '' && player2TF.value != '') {
                    addPlayersNameToAside();
                    addPlayersNameToStats5X5();
                }
            });

        }
    });
}


// initiate the game with chosen theme for 4X4 game size
function chooseTheme4X4() {
    themesElt.addEventListener("click", (e) => {
        if (e.target.classList.contains("themes")) {
            activateTheme4X4(e.target.id);
            preElt.classList.add("hidden");
        }
    });
}

function activateTheme4X4(theme) {
    // insert theme in images array
    for (let i = 0; i < 16; i++) {
        images4X4.push(library4X4[theme][i]);
    }
    // insert images in memory game
    for (let i = 0; i < 16; i++) {
        var rand = Math.floor(Math.random() * (images4X4.length - 1));
        box4X4Elts[i].innerHTML = "<img src='" + images4X4[rand] + "' alt='image' class='hidden'>";
        images4X4.splice(rand, 1);
    }
}

// initiate the game with chosen theme for 5X5 game size
function chooseTheme5X5() {
    themesElt.addEventListener("click", (e) => {
        if (e.target.classList.contains("themes")) {
            activateTheme5X5(e.target.id);
            preElt.classList.add("hidden");
        }
    });
}

function activateTheme5X5(theme) {
    // insert theme in images array
    for (let i = 0; i < 25; i++) {
        images5X5.push(library5X5[theme][i]);
    }
    // insert images in memory game
    for (let i = 0; i < 25; i++) {
        var rand = Math.floor(Math.random() * (images5X5.length - 1));
        box5X5Elts[i].innerHTML = "<img src='" + images5X5[rand] + "' alt='image' class='hidden'>";
        images5X5.splice(rand, 1);
    }
}

// Handle the play 4X4
main4X4Elt.addEventListener("click", game4X4);

function game4X4(e) {

    // make sure the box is playable
    if (e.target.classList.contains("play")) {
        //Click out remove 4X4
        e.target.classList.remove("Out");

        e.target.firstChild.classList.remove("hidden");
        // first click
        if (click4X4 < 1) {
            click1_4X4Elt = e.target;

            //Click 1 Animate
            click1_4X4Elt.classList.add("click");

            timer_4X4();
            click4X4 = 1;
        }
        // second click
        else if (e.target !== click1_4X4Elt) {
            //Click 1 cancel animate
            click1_4X4Elt.classList.remove("click");

            click2_4X4Elt = e.target;
            //Click 2 Animate
            click2_4X4Elt.classList.add("click");

            if (click1_4X4Elt.firstChild.src !== click2_4X4Elt.firstChild.src) {

                differentCards4X4();
            } else {
                sameCards4X4();
            }
            click4X4 = 0;
        }
    }
}

// Handle the play 5X5
main5X5Elt.addEventListener("click", game5X5);

function game5X5(e) {
    // make sure the box is playable
    if (e.target.classList.contains("play")) {

        //Click out remove 5X5
        e.target.classList.remove("Out");

        e.target.firstChild.classList.remove("hidden");
        // first click
        if (click5X5 < 1) {
            click1_5X5Elt = e.target;

            //Click 1 Animate
            click1_5X5Elt.classList.add("click");

            timer_5X5();
            click5X5 = 1;

        }

        // second click
        else if (e.target !== click1_5X5Elt) {
            //Click 1 cancel animate
            click1_5X5Elt.classList.remove("click");

            click2_5X5Elt = e.target;

            //Click 2 Animate
            click2_5X5Elt.classList.add("click");

            //is joker
            if (click2_5X5Elt.firstChild.src === joker || click1_5X5Elt.firstChild.src === joker) {
                jokerCheck();
            } else {
                if (click1_5X5Elt.firstChild.src !== click2_5X5Elt.firstChild.src) {
                    differentCards5X5();
                } else {
                    sameCards5X5();
                }
            }
            click5X5 = 0;
        }
    }
}

// timer 4X4
function timer_4X4() {
    let promise = new Promise((resolve, reject) => {

        if (click4X4 == -1) {
            timer = setInterval(() => {
                timer4X4++;
                timer4X4Elt.innerHTML = timer4X4;
            }, 1000);
            resolve('Promise Sucsses');
        } else {
            reject('Promise Failed')
        }
    });
}

// timer 5X5
function timer_5X5() {
    let promise = new Promise((resolve, reject) => {
        if (click5X5 == -1) {
            timer = setInterval(() => {
                timer5X5++;
                timer5X5Elt.innerHTML = timer5X5;
            }, 1000);
            resolve('Promise Sucsses');
        } else {
            reject('Promise Failed')
        }
    });
}

// different cards 4X4
function differentCards4X4() {
    main4X4Elt.removeEventListener("click", game4X4);

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //Click out add 4X4
            click1_4X4Elt.classList.add("Out");
            click2_4X4Elt.classList.add("Out");

            click1_4X4Elt.firstChild.classList.add("hidden");
            click2_4X4Elt.firstChild.classList.add("hidden");

            //Click 2 cancel animate
            click2_4X4Elt.classList.remove("click");

            main4X4Elt.addEventListener("click", game4X4);
        }, 800);
        resolve('Promise Sucsses');
    });
    if (isPlayer1ArePlaying == true) {
        isPlayer1ArePlaying = false;
        TurnOf4X4Elt.innerHTML = player2;
        if (scoreP1 > 0 && TotalScoreP1 > 0) {
            scoreP1 -= 2;
            TotalScoreP1 -= 2;
        }
        scoreP1_4X4Elt.innerHTML = scoreP1;
        TotalScoreP1AsideElt.innerHTML = TotalScoreP1;
    } else {
        isPlayer1ArePlaying = true;
        TurnOf4X4Elt.innerHTML = player1;
        if (scoreP2 > 0 && TotalScoreP2 > 0) {
            scoreP2 -= 2;
            TotalScoreP2 -= 2;
        }
        scoreP2_4X4Elt.innerHTML = scoreP2;
        TotalScoreP2AsideElt.innerHTML = TotalScoreP2;

    }


}

// different cards 5X5
function differentCards5X5() {
    main5X5Elt.removeEventListener("click", game5X5);
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //Click out add 5X5
            click1_5X5Elt.classList.add("Out");
            click2_5X5Elt.classList.add("Out");

            click1_5X5Elt.firstChild.classList.add("hidden");
            click2_5X5Elt.firstChild.classList.add("hidden");

            //Click 2 cancel animate
            click2_5X5Elt.classList.remove("click");

            main5X5Elt.addEventListener("click", game5X5);
        }, 800);
        resolve('Promise Sucsses');
    });
    if (isPlayer1ArePlaying == true) {
        isPlayer1ArePlaying = false;
        TurnOf5X5Elt.innerHTML = player2;
        if (scoreP1 > 0 && TotalScoreP1 > 0) {
            scoreP1 -= 2;
            TotalScoreP1 -= 2;
        }
        scoreP1_5X5Elt.innerHTML = scoreP1;
        TotalScoreP1AsideElt.innerHTML = TotalScoreP1;
    } else {
        isPlayer1ArePlaying = true;
        TurnOf5X5Elt.innerHTML = player1;
        if (scoreP2 > 0 && TotalScoreP2 > 0) {
            scoreP2 -= 2;
            TotalScoreP2 -= 2;
        }
        scoreP2_5X5Elt.innerHTML = scoreP2;
        TotalScoreP2AsideElt.innerHTML = TotalScoreP2;

    }
}

// same cards 4X4
function sameCards4X4() {

    win += 2;
    click1_4X4Elt.firstChild.classList.add("outlined");
    click2_4X4Elt.firstChild.classList.add("outlined");
    click1_4X4Elt.classList.remove("play");
    click2_4X4Elt.classList.remove("play");
    if (isPlayer1ArePlaying == true) {
        TurnOf4X4Elt.innerHTML = player1;
        scoreP1 += 10;
        scoreP1_4X4Elt.innerHTML = scoreP1;

        TotalScoreP1 += 10;
        TotalScoreP1AsideElt.innerHTML = TotalScoreP1;

    } else {
        TurnOf4X4Elt.innerHTML = player2;
        scoreP2 += 10;
        scoreP2_4X4Elt.innerHTML = scoreP2;

        TotalScoreP2 += 10;
        TotalScoreP2AsideElt.innerHTML = TotalScoreP2;
    }
    gameWin4X4();
}

// same cards 5X5
function sameCards5X5() {

    win += 2;
    click1_5X5Elt.firstChild.classList.add("outlined");
    click2_5X5Elt.firstChild.classList.add("outlined");
    click1_5X5Elt.classList.remove("play");
    click2_5X5Elt.classList.remove("play");
    if (isPlayer1ArePlaying == true) {
        TurnOf5X5Elt.innerHTML = player1;
        scoreP1 += 10;
        scoreP1_5X5Elt.innerHTML = scoreP1;

        TotalScoreP1 += 10;
        TotalScoreP1AsideElt.innerHTML = TotalScoreP1;

    } else {
        TurnOf5X5Elt.innerHTML = player2;
        scoreP2 += 10;
        scoreP2_5X5Elt.innerHTML = scoreP2;

        TotalScoreP2 += 10;
        TotalScoreP2AsideElt.innerHTML = TotalScoreP2;
    }
    gameWin5X5();
}

// game won 4X4
function gameWin4X4() {
    if (win === 16) {
        if (scoreP1 > scoreP2) {
            clearInterval(timer);
            TotalWinsP1++;
            TotalWinsP1AsideElt.innerHTML = TotalWinsP1;
            final4X4Elt.innerHTML = player1TF.value + " won with " + scoreP1 + " points <br> in " + timer4X4 + " seconds";
            post4X4Elt.classList.remove("hidden");
        } else {
            clearInterval(timer);
            TotalWinsP2++;
            TotalWinsP2AsideElt.innerHTML = TotalWinsP2;
            final4X4Elt.innerHTML = player2TF.value + " won with " + scoreP2 + " points <br> in " + timer4X4 + " seconds";
            post4X4Elt.classList.remove("hidden");
        }

    }
}

// game won 5X5
function gameWin5X5() {
    if (win === 24) {
        if (scoreP1 > scoreP2) {
            clearInterval(timer);
            TotalWinsP1++;
            TotalWinsP1AsideElt.innerHTML = TotalWinsP1;
            final5X5Elt.innerHTML = player1TF.value + " won with " + scoreP1 + " points <br> in " + timer5X5 + " seconds";
            post5X5Elt.classList.remove("hidden");
        } else {
            clearInterval(timer);
            TotalWinsP2++;
            TotalWinsP2AsideElt.innerHTML = TotalWinsP2;
            final5X5Elt.innerHTML = player2TF.value + " won with " + scoreP2 + " points <br> in " + timer5X5 + " seconds";
            post5X5Elt.classList.remove("hidden");
        }
    }
}

// reset game 4X4
again4X4Elt.addEventListener("click", resetGame4X4);

function resetGame4X4() {

    resetVar();

    scoreP1_4X4Elt.textContent = scoreP1;
    scoreP2_4X4Elt.textContent = scoreP2;

    timer4X4Elt.textContent = timer4X4;

    TurnOf4X4Elt.innerHTML = "";

    post4X4Elt.classList.add("hidden");

    main4X4Elt.classList.add("hidden");

    playersNameElt.classList.remove("hidden");

    cleanBoxes4X4();

}

// reset game 5X5
again5X5Elt.addEventListener("click", resetGame5X5);

function resetGame5X5() {

    resetVar();

    scoreP1_5X5Elt.textContent = scoreP1;
    scoreP2_5X5Elt.textContent = scoreP2;

    timer5X5Elt.textContent = timer5X5;

    TurnOf5X5Elt.innerHTML = "";

    post5X5Elt.classList.add("hidden");

    main5X5Elt.classList.add("hidden");

    playersNameElt.classList.remove("hidden");

    cleanBoxes5X5();

}

function resetVar() {
    click1_4X4Elt = "";
    click2_4X4Elt = "";
    click1_5X5Elt = "";
    click2_5X5Elt = "";
    click4X4 = -1;
    click5X5 = -1;

    win = 0;

    isPlayer1ArePlaying = true;

    timer4X4 = 0;
    timer5X5 = 0;

    scoreP1 = 0;
    scoreP2 = 0;
}

function cleanBoxes4X4() {
    for (let j = 0; j < 16; j++) {
        box4X4Elts[j].classList.add("play");
        box4X4Elts[j].firstChild.classList.add("hidden");
        box4X4Elts[j].classList.remove("click");
        box4X4Elts[j].classList.remove("out");
    }

}

function cleanBoxes5X5() {
    for (let i = 0; i < 25; i++) {
        box5X5Elts[i].classList.add("play");
        box5X5Elts[i].firstChild.classList.add("hidden");
        box5X5Elts[i].classList.remove("click");
        box5X5Elts[i].classList.remove("out");
    }
}

function addPlayersNameToAside() {
    player1Aside.innerHTML = player1TF.value;
    player2Aside.innerHTML = player2TF.value;
}


function addPlayersNameToStats4X4() {
    player1Stats4X4.innerHTML = player1TF.value;
    player2Stats4X4.innerHTML = player2TF.value;
}

function addPlayersNameToStats5X5() {
    player1Stats5X5.innerHTML = player1TF.value;
    player2Stats5X5.innerHTML = player2TF.value;
}


function jokerCheck() {
    main5X5Elt.removeEventListener("click", game5X5);

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //Click out add 5X5
            click1_5X5Elt.classList.add("Out");
            click2_5X5Elt.classList.add("Out");

            click1_5X5Elt.firstChild.classList.add("hidden");
            click2_5X5Elt.firstChild.classList.add("hidden");

            //Click 2 cancel animate
            click2_5X5Elt.classList.remove("click");
            main5X5Elt.addEventListener("click", game5X5);

        }, 800);
        resolve('Promise Sucsses');
    });
    if (isPlayer1ArePlaying == true) {
        isPlayer1ArePlaying = false;
        TurnOf5X5Elt.innerHTML = player2;
        if (scoreP1 > 4 && TotalScoreP1 > 4) {
            scoreP1 -= 6;
            TotalScoreP1 -= 6;
        }
        scoreP1_5X5Elt.innerHTML = scoreP1;
        TotalScoreP1AsideElt.innerHTML = TotalScoreP1;
    } else {
        isPlayer1ArePlaying = true;
        TurnOf5X5Elt.innerHTML = player1;
        if (scoreP2 > 4 && TotalScoreP2 > 4) {
            scoreP2 -= 6;
            TotalScoreP2 -= 6;
        }
        scoreP2_5X5Elt.innerHTML = scoreP2;
        TotalScoreP2AsideElt.innerHTML = TotalScoreP2;
    }
}