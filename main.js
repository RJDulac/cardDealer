var suits = ["spades", "hearts", "clubs", "diams"];
var cardFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var players = [];

function startDeal() {
    players = [];
    var num = Number(document.getElementById("players").value);
    //make players array multidimensional with loop
    for (var i = 0; i < num; i++) {
        players[i] = [];
    }
    var cards = buildCards();
    shuffleCards(cards);
    console.log(cards);
    deal(cards);
}

function buildCards() {
    var cards = [];
    for (s in suits) {
        var bgColor = (suits[s] === "hearts" || suits[s] === "diams") ? "red" : "black";
        for (c in cardFace) {
            var card = {
                suit: suits[s],
                num: cardFace[c],
                bgColor: bgColor,
                cardValue: (Number(c)+2)
            }
            cards.push(card);
        }
    }
    return cards;

}

//shuffle the deck
function shuffleCards(array) {
    //decrease numbers in array with loop
    for (var x = array.length - 1; x > 0; x--) {
        //randomizes the index
        var ran = Math.floor(Math.random() * (x + 1));
        var temp = array[x];
        //swap values each iteration
        array[x] = array[ran];
        array[ran] = temp;
    }
    return array;

}
function deal(cards) {
    var num = players.length;
    var output = document.getElementById("output");
    var p = 0;
    for (var i = 0; i < cards.length; i++) {
        //put cards into players hand
        players[p].push(cards[i]);
        p++;
        //put cards into next player's hand/spill over
        if (p >= num) {
            p = 0;
        }
    }
    for (var i = 0; i < num; i++) {
        output.innerHTML += "<p>Players: " + (i + 1) + "</p>";
        for (var x = 0; x < players[i].length; x++) {
            var p = players[i][x];
            output.innerHTML += "<span style=\"color:" + p.bgColor + "\">" + p.num + "&" + p.suit + ";</span>";
        }
    }

}

function clearCards() {
    players = [];
    output.innerHTML = "";
}