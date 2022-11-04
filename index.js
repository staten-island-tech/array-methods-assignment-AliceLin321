const fruit = [
  {
    name: "lychee",
    Color: "red",
    Seed: 1,
    origin: "china, malaysia",
  },
  {
    name: "mangosteen",
    Color: "purple",
    Seed: [1, 2],
    origin: "malaysia, indoneisa",
  },
  {
    name: "passionfruit",
    Color: "purple",
    Seed: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    origin: "mexico, brazil",
  },
  {
    name: "starfruit",
    Color: "yellow",
    Seed: [5, 6, 7, 8, 9, 10],
    origin: "indonesia, mexico",
  },
  {
    name: "longan",
    Color: "brown",
    Seed: 1,
    origin: "china, indonesia",
  },
  {
    name: "persimmon",
    Color: "orange",
    Seed: [5, 6, 7, 8],
    origin: "china, japan, korea",
  },
  {
    name: "pomegranate",
    Color: "red",
    Seed: [550, 560, 570, 580, 590, 600],
    origin: "india, iran",
  },
  {
    name: "kiwi",
    Color: "brown",
    Seed: [450, 460, 470, 480, 490, 500],
    origin: "china, newzealand",
  },
  {
    name: "kumquat",
    Color: "yellow",
    Seed: [1, 2, 3, 4],
    origin: "china,japan",
  },
  {
    name: "jackfruit",
    Color: "yellow",
    Seed: 100,
    origin: "india, malaysia",
  },
  {
    name: "fig",
    Color: "purple",
    Seed: [600, 610, 620, 630, 640, 650],
    origin: "india , malaysia",
  },
];

fruit.forEach((fruit) => {
  console.log(fruit.name);
  console.log(fruit);
});

const result = fruit.filter((fruit) => {
  return fruit.Seed > 70;
});
console.log(result);



urtjmhyjt

fruit
  .filter((fruit) => fruit.Seed < 70)
  .forEach((fruit) => {
    console.log(fruit.name, fruit.Color);
  });
console.log(fruit);

const result = fruit.filter((fruit) => {
  return fruit.Seed.length < 100;
});
console.log(result);