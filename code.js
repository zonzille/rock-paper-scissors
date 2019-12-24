// partie joueur
let playerInput = prompt("Papier, caillou ou ciseau ?", "papier");
let playerSelection = function () {
  return playerInput.toLowerCase();
}
if(playerSelection() !== "papier" && playerSelection() !== "caillou" && playerSelection() !== "ciseau") {
  alert("Mot non reconnu ! Fais attention à l'orthographe de caillou, papier ou ciseau")
};
console.log("toi : " + playerSelection())

// partie ordinateur
let elements = [
  "papier",
  "caillou",
  "ciseau"
];
let computerSelection = Math.floor(Math.random() * elements.length);

function computerSelectionFunction() {
  switch (computerSelection) {
    case 0: return ("papier")
      break;
    case 1: return ("caillou")
      break;
    case 2: return ("ciseau")
      break;
    default: return ("euh...");
  }
}
console.log("l'ordinateur : " + computerSelectionFunction());

// comparaison
function playRound(playerSelection, computerSelectionFunction) {
  if (this.playerSelection() === this.computerSelectionFunction()) {
    return "égalité !"
  } else if (this.playerSelection() === "caillou" && this.computerSelectionFunction() === "papier") {
    return "défaite ! le papier enveloppe le caillou"
  } else if (this.playerSelection() === "caillou" && this.computerSelectionFunction() === "ciseau") {
    return "victoire ! la pierre explose les cizo"
  } else if (this.playerSelection() === "papier" && this.computerSelectionFunction() === "caillou") {
    return "victoire ! le papier enveloppe le caillou"
  } else if (this.playerSelection() === "papier" && this.computerSelectionFunction() === "ciseau") {
    return "défaite ! les ciseaux coupent le papel"
  } else if (this.playerSelection() === "ciseau" && this.computerSelectionFunction() === "papier") {
    return "victoire ! les ciseaux coupent le papel"
  } else if (this.playerSelection() === "ciseau" && this.computerSelectionFunction() === "caillou") {
    return "défaite ! la pierre explose les cizo"
  } else {
    return "euh......"
  }
}
console.log(playRound())