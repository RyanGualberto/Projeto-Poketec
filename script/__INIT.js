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
    new Person("Squirtle", 45, 75, 15, 30, 150, "fire"),
    new Person("Charmander", 80, 100, 20, 15, 100, "psychic"),
    new Person("Bulbasaur", 80, 100, 20, 15, 100, "")
]

const bosses = [
    new Person("Ratata", 90, 45, 20, 30, 55, "normal"),
    new Person("abobora", 90, 45, 20, 30, 55, "plant"),
    new Person("Ratata", 90, 45, 20, 30, 55, "normal")

]

function attackBoss(){
    document.innerHTML = "pocoto";
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