const firstPart = [
  "Asalto",
  "Yo soy",
  "Tensión",
  "Ninja",
  "Muerte",
  "Holocausto",
  "Emergencia",
  "Leyenda",
  "Combate",
  "Asesinato",
  "Ataque",
  "Vuelo",
  "Situación",
  "Rescate",
  "Secuestro",
  "Alarma",
  "Evacuación",
  "Venganza"
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
  "máximo",
  "salvaje",
  "crítico",
  "al límite",
  "límite",
  "a sangre fría",
  "capital",
  "abierto"
];

const generator = () => {
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

document
  .getElementById("generator-button")
  .addEventListener("click", generator);