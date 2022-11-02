const fruit = [
  {
    name: [lychee],
    Color: [red],
    Seed: [1],
    origin: [china, malaysia],
    tasty: true,
  },
  {
    name: [mangosteen],
    Color: [purple],
    Seed: [1, 2],
    origin: [malaysia, indoneisa],
    tasty: true,
  },
  {
    name: [passionfruit],
    Color: [purple],
    Seed: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    origin: [mexico],
    tasty: true,
  },
  {
    name: [starfruit],
    Color: [yellow],
    Seed: [5, 6, 7, 8, 9, 10],
    origin: [indonesia, mexico],
    tasty: true,
  },
  {
    name: [longan],
    Color: [brown],
    Seed: [1],
    origin: [china, indonesia],
    tasty: true,
  },
  {
    name: [persimmon],
    Color: [orange],
    Seed: [5, 6, 7, 8],
    origin: [china, japan, korea],
    tasty: false,
  },
  {
    name: [pomegranate],
    Color: [red],
    Seed: [550, 560, 570, 580, 590, 600],
    origin: [india, iran],
    tasty: true,
  },
  {
    name: [kiwi],
    Color: [brown],
    Seed: [450, 460, 470, 480, 490, 500],
    origin: [china],
    tasty: true,
  },
  {
    name: [kumquat],
    Color: [yellow],
    Seed: [1, 2, 3, 4],
    origin: [china],
    tasty: true,
  },
  {
    name: [jackfruit],
    Color: [yellow],
    Seed: [100],
    origin: [india, malaysia],
    tasty: false,
  },
  {
    name: [fig],
    Color: [purple],
    Seed: [600, 610, 620, 630, 640, 650],
    origin: [india],
    tasty: false,
  },
];
fruits.forEach((fruit) => console.log(fruit.name)); //console logs names of fruit

const outcome = fruits.filter((fruit) => fruit.seed < 100); //don't need to name, atuo-returns your contents,dont need to use return
console.log(outcome);
