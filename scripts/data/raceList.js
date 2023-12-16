import { commonLanguages } from "./languageList.js";

const humanLanguages = Object.entries(commonLanguages)
  .filter(([key]) => key !== "common")
  .map(([key, value]) => value);

const commonLanguage = commonLanguages["common"];

export const raceList = {
  human: {
    race: "w3gbUH2DOBxfZPHO",
    talent: [{ id: "DYWFJu5XeazJYc0P", name: "ambitious" }],
    knownLanguages: [commonLanguage],
    languageOfChoice: humanLanguages,
  },
  halfling: {
    race: "rglUPGtBSAAG3dhK",
    talent: [{ id: "zkOiprnKS5uttiO6", name: "stealthy" }],
    knownLanguages: [commonLanguage],
    languageOfChoice: [],
  },
  elf: {
    race: "mpqXJtii4nj4ukKk",
    talent: [
      { id: "dTEZW21LUNoYL3JU", name: "farsight(ranged)" },
      { id: "E3EcGGdGYuEWWj47", name: "farsight(spell)" },
    ],
    knownLanguages: [
      commonLanguage,
      commonLanguages["elvish"],
      commonLanguages["sylvan"],
    ],
    languageOfChoice: [],
  },
  dwarf: {
    race: "80h0XXptGDZvGAIZ",
    talent: [{ id: "MW43tnJr6lqE1Ty8", name: "stout" }],
    knownLanguages: [commonLanguage, commonLanguages["dwarvish"]],
    languageOfChoice: [],
  },
  goblin: {
    race: "QG1lAZeLfBtXR6zh",
    talent: [{ id: "Gf5dApLfOorbQn4R", name: "keen senses" }],
    knownLanguages: [commonLanguage, commonLanguages["goblin"]],
    languageOfChoice: [],
  },
  "half-orc": {
    race: "0lJ8Pj0UPsbSSUTm",
    talent: [{ id: "LR6h4lXVXwx7AFQ6", name: "mighty" }],
    knownLanguages: [commonLanguage, commonLanguages["orcish"]],
    languageOfChoice: [],
  },
};
