const screen = document.querySelector(".screen");

class Person {
    constructor(name, life, mana, heal, def, atk, type){
        this.name = name;
        this.life = life;
        this.mana = mana;
        this.heal = heal;
        this.def = def;
        this.atk = atk;
        this.type = type;
    }
}

const players = [
    new Person("Squirtle", 45, 75, 15, 30, 150, "fire")
]

const bosses = [
    new Person("Ratata", 90, 45, 20, 30, 55, "normal")
]

function attackBoss(player, boss){
    boss.life = boss.life - (player.atk - boss.def)
    if (boss.life <= 0){
        return "0"
    }
    screen.innerHTML = attackBoss(players[0], bosses[0]);
    return boss.life
}

// console.log(person1.type)
// const $checkbox = document.querySelector('#buttons');



// $checkbox.addEventListener('change', function () {
//     $html.classList.toggle('verdadeiro')
//     setTimeout(function () {
//         //your code to be executed after 1 second
//     }, delayInMilliseconds);


//     function ataquePers() {
//         atk = aktPerson - defBoss
//         lifeBoss = lifeBoss - atk
//         $checkbox
//     }

//     function atkBoss() {
//         newLife = lifePerson - atkBoss1
//         lifePerson = newLife
//     }

//     function initGame() {
//         loaderTela;
//         enable.buttons()
//     }

//     // charizard.fabricacao = "MATUE";
//     // charizard.modelo = "Mustang";
//     // charizard.ano = 1969;

    
// })