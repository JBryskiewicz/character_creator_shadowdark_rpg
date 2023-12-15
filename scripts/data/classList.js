import { levelTalents } from "./levelTalents.js";

export const classList = {
  cleric: {
    id: "oZWzXx1WRLg286zD",
    name: "cleric",
    hitDice: 6,
    numberOfLanguages: [0, 1],
    languages: [],
    rareLanguages: [
      { id: "EP8NdjL8B5xXK7u9", name: "celestial" },
      { id: "b5yBrLaRIl7ZEWKu", name: "diabolic" },
      { id: "ufwua5RXnJXlA0St", name: "primordial" },
    ],
    features: ["QxhyKNW4aDQqolMi", "EYRxfb5BUEzH1w3b", "LfHTnYW8I65x8Y31"],
    talents: {
      2: [levelTalents.spellcastAdvantage],
      3: [levelTalents.meleeOneBonus, levelTalents.rangedOneBonus],
      4: [levelTalents.meleeOneBonus, levelTalents.rangedOneBonus],
      5: [levelTalents.meleeOneBonus, levelTalents.rangedOneBonus],
      6: [levelTalents.meleeOneBonus, levelTalents.rangedOneBonus],
      7: [levelTalents.bonusSpellcastChecks],
      8: [levelTalents.bonusSpellcastChecks],
      9: [levelTalents.bonusSpellcastChecks],
      10: [levelTalents.bonusTwoStrength, levelTalents.bonusTwoWisdom],
      11: [levelTalents.bonusTwoStrength, levelTalents.bonusTwoWisdom],
      12: ["Choose one option from the cleric talent table"],
    },
  },
  fighter: {
    id: "hO7KrvqDRH6kvftJ",
    name: "fighter",
    hitDice: 8,
    numberOfLanguages: [0, 0],
    languages: [],
    rareLanguages: [],
    features: [
      "5bpWuaT0KTNzuzCu",
      "7JTDRLtHc6FOrIEc",
      "DGZqkVUtcmxejdm1",
      "F0NXUJcnBOYKzhMi",
    ],
    talents: {
      2: [levelTalents.weaponMastery],
      3: [levelTalents.meleeAndRangedBonus],
      4: [levelTalents.meleeAndRangedBonus],
      5: [levelTalents.meleeAndRangedBonus],
      6: [levelTalents.meleeAndRangedBonus],
      7: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoConstitution,
      ],
      8: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoConstitution,
      ],
      9: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoConstitution,
      ],
      10: [levelTalents.armorMastery],
      11: [levelTalents.armorMastery],
      12: ["Choose one option from the fighter talent table"],
    },
  },
  thief: {
    id: "C6wkCa2w5dlgSq7f",
    name: "thief",
    hitDice: 4,
    numberOfLanguages: [0, 0],
    languages: [],
    rareLanguages: [],
    features: ["KLDZKFY6SrqQKSva", "TiaXUSTLoJpjfyxD"],
    talents: {
      2: [levelTalents.initiativeAdvantage],
      3: [levelTalents.backstabAddDice],
      4: [levelTalents.backstabAddDice],
      5: [levelTalents.backstabAddDice],
      6: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoCharisma,
      ],
      7: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoCharisma,
      ],
      8: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoCharisma,
      ],
      9: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoCharisma,
      ],
      10: [levelTalents.meleeAndRangedBonus],
      11: [levelTalents.meleeAndRangedBonus],
      12: ["Choose one option from the thief talent table"],
    },
  },
  wizard: {
    id: "035nuVkU9q2wtMPs",
    name: "wizard",
    hitDice: 4,
    numberOfLanguages: [2, 2],
    languages: [
      { id: "DQzHvoMWSZ0eiRWP", name: "common" },
      { id: "DBK9gi6d0SGVlRwv", name: "dwarvish" },
      { id: "wABiw5UhzG2G8Kpa", name: "elvish" },
      { id: "hW4BI5ySXhxQiYiV", name: "giant" },
      { id: "NN9wFGgwk49oOQeN", name: "goblin" },
      { id: "MtNt0wGJ3OaDVl7x", name: "merran" },
      { id: "1iECxGKqGpV3k6VZ", name: "orcish" },
      { id: "FluOqMSSPoS6hT1H", name: "reptilian" },
      { id: "Lf6kATbC1uNPLnPi", name: "sylvan" },
      { id: "FQcnF3JQRw9wL7PN", name: "thanian" },
    ],
    rareLanguages: [
      { id: "EP8NdjL8B5xXK7u9", name: "celestial" },
      { id: "b5yBrLaRIl7ZEWKu", name: "diabolic" },
      { id: "ufwua5RXnJXlA0St", name: "primordial" },
      { id: "GVbmj6D47b9lbOHz", name: "draconic" },
    ],
    features: ["Td6iQW4hVJLZLVLi", "LFMT8qZ6ZL3LvYFM"],
    talents: {
      2: [levelTalents.makeRandItem],
      3: [levelTalents.bonusTwoIntelligence, levelTalents.bonusSpellcastChecks],
      4: [levelTalents.bonusTwoIntelligence, levelTalents.bonusSpellcastChecks],
      5: [levelTalents.bonusTwoIntelligence, levelTalents.bonusSpellcastChecks],
      6: [levelTalents.bonusTwoIntelligence, levelTalents.bonusSpellcastChecks],
      7: [levelTalents.bonusTwoIntelligence, levelTalents.bonusSpellcastChecks],
      8: [levelTalents.spellcastAdvantage],
      9: [levelTalents.spellcastAdvantage],
      10: [levelTalents.learnSpell],
      11: [levelTalents.learnSpell],
      12: ["Choose one option from the wizard talent table"],
    },
  },
  ranger: {
    id: "SIEizdu3Jv9DHY1m",
    name: "ranger",
    hitDice: 8,
    numberOfLanguages: [0, 0],
    languages: [],
    rareLanguages: [],
    features: ["cUz7U8n0amQd5QQM", "ZjCvQZ7k4hBa9y2I"],
    talents: {
      2: [levelTalents.weaponDamageDice],
      3: [
        levelTalents.meleeOneBonusWithDamage,
        levelTalents.rangedOneBonusWithDamage,
      ],
      4: [
        levelTalents.meleeOneBonusWithDamage,
        levelTalents.rangedOneBonusWithDamage,
      ],
      5: [
        levelTalents.meleeOneBonusWithDamage,
        levelTalents.rangedOneBonusWithDamage,
      ],
      6: [
        levelTalents.meleeOneBonusWithDamage,
        levelTalents.rangedOneBonusWithDamage,
      ],
      7: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoIntelligence,
      ],
      8: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoIntelligence,
      ],
      9: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoIntelligence,
      ],
      10: [levelTalents.herbalismChecks],
      11: [levelTalents.herbalismChecks],
      12: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoConstitution,
        levelTalents.bonusTwoIntelligence,
        levelTalents.bonusTwoWisdom,
        levelTalents.bonusTwoCharisma,
        "Choose one option from ranger talent table",
      ],
    },
  },
  bard: {
    id: "112M28Tvi2ju06BE",
    name: "bard",
    hitDice: 6,
    numberOfLanguages: [4, 1],
    languages: [
      { id: "DQzHvoMWSZ0eiRWP", name: "common" },
      { id: "DBK9gi6d0SGVlRwv", name: "dwarvish" },
      { id: "wABiw5UhzG2G8Kpa", name: "elvish" },
      { id: "hW4BI5ySXhxQiYiV", name: "giant" },
      { id: "NN9wFGgwk49oOQeN", name: "goblin" },
      { id: "MtNt0wGJ3OaDVl7x", name: "merran" },
      { id: "1iECxGKqGpV3k6VZ", name: "orcish" },
      { id: "FluOqMSSPoS6hT1H", name: "reptilian" },
      { id: "Lf6kATbC1uNPLnPi", name: "sylvan" },
      { id: "FQcnF3JQRw9wL7PN", name: "thanian" },
    ],
    rareLanguages: [
      { id: "EP8NdjL8B5xXK7u9", name: "celestial" },
      { id: "b5yBrLaRIl7ZEWKu", name: "diabolic" },
      { id: "ufwua5RXnJXlA0St", name: "primordial" },
      { id: "GVbmj6D47b9lbOHz", name: "draconic" },
    ],
    features: [
      "3gJPMZ8M4paFtm1n",
      "j7nfbsMivwfCVkN0",
      "J4KYu5M32T81yE1f",
      "Om7QWre7U4Tbh84B",
    ],
    talents: {
      2: [levelTalents.bardPerformEffect],
      3: [levelTalents.meleeOneBonus, levelTalents.rangedOneBonus],
      4: [levelTalents.meleeOneBonus, levelTalents.rangedOneBonus],
      5: [levelTalents.meleeOneBonus, levelTalents.rangedOneBonus],
      6: [levelTalents.meleeOneBonus, levelTalents.rangedOneBonus],
      7: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoConstitution,
        levelTalents.bonusTwoIntelligence,
        levelTalents.bonusTwoWisdom,
        levelTalents.bonusTwoCharisma,
      ],
      8: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoConstitution,
        levelTalents.bonusTwoIntelligence,
        levelTalents.bonusTwoWisdom,
        levelTalents.bonusTwoCharisma,
      ],
      9: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoConstitution,
        levelTalents.bonusTwoIntelligence,
        levelTalents.bonusTwoWisdom,
        levelTalents.bonusTwoCharisma,
      ],
      10: [levelTalents.bardDabblerRolls],
      11: [levelTalents.bardDabblerRolls],
      12: ["Choose one option from bard talent table"],
    },
  },
};
