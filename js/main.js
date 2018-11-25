const firstPart = [
  { word: "Alerta", genre: "f" },
  { word: "Asalto", genre: "m" },
  { word: "Amanecer", genre: "m"},
  { word: "Yo soy", genre: "m" },
  { word: "Tension", genre: "f" },
  { word: "Ninja", genre: "m" },
  { word: "Muerte", genre: "f" },
  { word: "Holocausto", genre: "m" },
  { word: "Emergencia", genre: "f" },
  { word: "Leyenda", genre: "f" },
  { word: "Combate", genre: "m" },
  { word: "Asesinato", genre: "m" },
  { word: "Ejecucion", genre: "f"},
  { word: "Ataque", genre: "m" },
  { word: "Vuelo", genre: "m" },
  { word: "Infierno", genre: "m" },
  { word: "Situacion", genre: "f" },
  { word: "Justicia", genre: "f"},
  { word: "Secuestro", genre: "m" },
  { word: "Evacuacion", genre: "f" },
  { word: "Venganza", genre: "f" },
  { word: "Herida", genre: "f" },
  { word: "Peligro", genre: "m" },
  { word: "Destruccion", genre: "f" },
  { word: "Aniquilacion", genre: "f" },
  { word: "Defensa", genre: "f" },
  { word: "Karate", genre: "m" },
  { word: "Devastacion", genre: "f" },
  { word: "Hecatombe", genre: "f" },
  { word: "Rehen", genre: "m" },
  { word: "Decision", genre: "f"},
  { word: "Tiempo", genre: "m"},
  { word: "Fuerza", genre: "f"},
  { word: "Mercenario", genre: "m"},
  { word: "Condena", genre: "f"},
  { word: "Francotirador", genre: "m"},
  { word: "Codigo", genre: "m"}
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
  "total",
  "critico",
  "al limite",
  "limite",
  "a sangre fria",
  "abierto",
  "nuclear",
  "destructivo",
  "defensivo",
  "a muerte",
  "capital",
  "perfecto",
  "extremo"
];

const generator = () => {
  const movieBox = document.getElementById("movie");
  movieBox.classList.remove("movie-animation");
  // Triggering reflow
  void movieBox.offsetWidth;
  movieBox.classList.add("movie-animation");

  const firstWord = makeFirstPart();
  const secondWord =
    firstPart.find(option => option.word === firstWord).genre === "f"
      ? makeSecondPart(true)
      : makeSecondPart();
  const name = `${firstWord} ${secondWord} ${generateSequel()}`;

  document.getElementById("movie").innerHTML = name;
};

const makeFirstPart = () =>
  firstPart[Math.floor(Math.random() * firstPart.length)].word;

const makeSecondPart = (female = false) => {
  const generated = secondPart[Math.floor(Math.random() * secondPart.length)];
  return female &&
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
