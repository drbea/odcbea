
// alert("hello");
// let x = 10;
// console.log(x);

// let msg = prompt("votre nom");
// alert("tu est ", msg);
// let n1 = parseInt(prompt("Donner un nombre: "));
// console.log("nombre 1:", n1);

// let n2 = parseInt(prompt("Donner un nombre: "));
// console.log("nombre 2:", n2);

// let n3 = parseInt(prompt("Donner un nombre: "));
// console.log("nombre 3:", n3);

// let plusGrand ;
// if ((n1 > n2 & n1 > n3) ||  (n1 == n2 & n1 > n3)) {
//     plusGrand = n1
// } else if ((n2 > n1 & n2 > n3) || (n2 == n3 && n2 > n1 )){
//     plusGrand = n2
// } else {
//     plusGrand = n3
// }
// alert("le plus grand est " +  plusGrand);


// let tab = ["23", "45", "45", "hello", "True"]
// tab.forEach(element => {
//     let div = document.createElement("div");
//     let h1 = document.createElement("h1");
//     h1.setAttribute("style", "color: red; border: 4px dashed #00000050")
//     h1.innerText = " element " + element
//     div.appendChild(h1)
//     document.querySelector("body").appendChild(div)
// });


// let nbrPairs = 0;
// for (let i = 1; i <= 10; i++) {
//     let nbr = prompt("Donner le nombre" + i + " : ")
//     if (nbr % 2 === 0){
//         nbrPairs += parseInt(nbr)
//     }
// }
// alert("la somme des element pairs est : " + nbrPairs)

// let listPerson = []
// for (let i=1; i < 6; i++){
//     let message = "User "+ i + " Entrer "
//     let person = {}
//     person.nom = prompt(message+ " votre nom: ");
//     person.prenom = prompt(message+ " votre prenomnom: ");
//     person.age = +prompt(message + " l'age de ");
//     listPerson.push(person);
// }

// listPerson.forEach(
//     person => {
//         let message = "N° " + listPerson.indexOf(person) + "\nNom : "+ person.nom + "\nPrenom: " + person.prenom + "\nage: " + person.age
//         if (person.age < 18){
//             let statut = "Mineur"
//             alert(message + "\nstatut: " + statut.toUpperCase())
//         } else if (person.age < 65){
//             let statut = "Majeur"
//             alert(message + "\statut: " + statut.toUpperCase())
//         } else {
//             let statut = "vieux"
//             alert(message + "\statut: " + statut.toUpperCase())
//         }
//     }
// )


// console.log("Mineurs")
// for(let person of listPerson){
//     let message = "Nom : "+ person.nom + "\nPrenom: " + person.prenom + "\nage: " + person.age
//     if (person.age < 18){
//         console.log(message)
//     }
// }

// console.log("Majeurs: ")
// for(let person of listPerson){
//     let message = "Nom : "+ person.nom + "\nPrenom: " + person.prenom + "\nage: " + person.age
//     if (person.age < 66 && person.age >= 18){
//         console.log(message)
//     }
// }

// console.log("Vieux: ")
// for(let person of listPerson){
//     let message = "Nom : "+ person.nom + "\nPrenom: " + person.prenom + "\nage: " + person.age
//     if (person.age > 65){
//         console.log(message)
//     }
// }


function alea_N(n = 1000){
    return Math.floor(Math.random() * n)
}

function estPair(nombre){
    return nombre % 2 === 0
}

function generer_tableau_n_element(n){
    let tab = [];
    for (let i = 1; i <= n; i++){
        tab.push(alea_N())
    }
    return tab
}

const N = 8;
let tab50 = generer_tableau_n_element(N) ;
console.log(tab50)

function afficher_parite_nombre(tableau){
    for(let nombre of tableau){
        let est_paire = estPair(nombre) ? "Paire": "Impaire";
        console.log(nombre + " -- " + est_paire)
    }
}


afficher_parite_nombre(tab50)

function minimum(tab){
   let min = tab[0];
   for (let i = 1; i < tab.length; i++) {
    if (min > tab[i]){
        min = tab[i]
    }
   }
   return min
}

function trier(tab){
    let newTab = [];
    let t = tab.length
    for(let i = 0; i > t ; i++){
        let min = minimum(tab);
        let idxMin = tab.indexOf(min);
        newTab.push(min);
        console.log(newTab)
        tab.splice(idxMin, 1);
        
    }
    return newTab

}
console.log("Avant le tri: ")
let x trier(tab50)
console.log("x = " + x)
console.log("Apres le tri: ")

// tab = trier(tab50)
// console.log(tab)