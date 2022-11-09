
let perso = {
    name: "John",
    health: 10,

}
const musics = [
    " Wejdene - Anissa ",
    " Post Malone - Hateful ",
    " Lizzo -  ",
    " Giveon - ",
    " Sam Smith - Diamonds ",
]

let trajet = {
    radio: music [0],
    feuxrouges: 30,
    changements: [0],

}

putMusic() {
    return Math.floor(Math.random()* 5-0+1)
}


function takeTaxi (perso, trajet){
    while(trajet.feuxrouges > 0) {

        console.log(musics + " il reste" + trajet.feuxrouges + "de feux restants")

        if (perso.health > 0|| musics ≠ [0]){
            console.log(musics + " il reste" + trajet.feuxrouges + "de feux restants")

        } else (musics [0]){
            perso.health -= (putMusic - perso.health)
            perso.changements (takeTaxi) 
            console.log(musics + " il reste" + trajet.feuxrouges + "de feux restants")
         } 
        

    }
}

