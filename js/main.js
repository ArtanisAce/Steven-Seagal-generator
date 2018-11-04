const firstPart = [
  "Asalto",
  "Yo soy",
  "Tension",
  "Ninja",
  "Muerte",
  "Holocausto",
  "Emergencia",
  "Leyenda",
  "Combate",
  "Asesinato",
  "Ataque",
  "Vuelo",
  "Situacion",
  "Rescate",
  "Secuestro",
  "Alarma",
  "Evacuacion",
  "Venganza",
  "Herida"
];

const secondPart = [
  "desesperado",
  "normal",
  "o nada",
  "explosivo",
  "ciego",
  "frontal",
  "de emergencia",
  "mortal",
  "inmortal",
  "real",
  "honorable",
  "ofensivo",
  "infinito",
  "militar",
  "maximo",
  "salvaje",
  "critico",
  "al limite",
  "limite",
  "a sangre fria",
  "capital",
  "abierto",
  "nuclear"
];

const generator = () => {
  const movieBox = document.getElementById("movie");
  movieBox.classList.remove("movie-animation");
  // Triggering reflow
  void movieBox.offsetWidth;
  movieBox.classList.add("movie-animation");

  const firstWord = makeFirstPart();
  const secondWord =
    firstWord !== "Ninja" &&
    (firstWord.slice(-1) === "n" ||
      firstWord.slice(-1) === "a" ||
      firstWord === "Muerte")
      ? makeSecondPart(true)
      : makeSecondPart();
  const name = `${firstWord} ${secondWord} ${generateSequel()}`;

  document.getElementById("movie").innerHTML = name;
  // movieBox.classList.remove("movie-animation");
};

const makeFirstPart = () =>
  firstPart[Math.floor(Math.random() * firstPart.length)];

const makeSecondPart = (endInA = false) => {
  const generated = secondPart[Math.floor(Math.random() * secondPart.length)];
  return endInA &&
    (generated.slice(-1) !== "a" &&
      generated.slice(-1) !== "l" &&
      generated.slice(-1) !== "r" &&
      generated.slice(-1) !== "e")
    ? `${generated.slice(0, generated.length - 1)}a`
    : generated;
};

const generateSequel = () => {
  const sequelChance = Math.random() * 100;
  if (sequelChance < 25) {
    return Math.random() < 0.5
      ? sequelChance < 15
        ? `2 : 2`
        : 2
      : sequelChance < 15
        ? `3 : 2`
        : 3;
  } else {
    return "";
  }
};

const genButton = document.getElementById("generator-button");
genButton.addEventListener("click", generator);
