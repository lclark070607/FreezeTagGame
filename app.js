
function Player(name) {
    this.name = name;
    this.title = null;

    return this;
}
let m = new Player('Morrighan');
let b = new Player('Braeden');
let o = new Player('Owen');

function Team(teamName) {
    //add players to a team
    this.add = function (playerN) {
        this.title = [];
        this.title.push(playerN);
        this.title = teamName;
    };
    return this;
};


let c = new Team('Team Chasers');
c.add(m);
c.add(b);
console.log(m);

let r = new Team('Team Runners');
r.add(o);
console.log(r);












// function Players(name) {
//     this.name = name;
//     this.type = null;

//     this.tag = function() { //if the first is a chaser, the second player is frozen
//                             // if the first and second players are runners, the second player is unfrozen

//     },

//     this.getFlag = function() {  //if the player is a runner, get the flag

//     };

//     return this;
// }

// function Team(players) {
//     this.players = [];

//     this.add = function(playerName) {
//         this.players.push(playerName);
//     },
//     this.won = function() {

//     },

//     return this;
// }

