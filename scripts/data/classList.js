import { levelTalents } from "./levelTalents.js";
import { commonLanguages, rareLanguages } from "./languageList.js";
import { classTalents } from "./classTalents.js";

const clericTalents = classTalents["cleric"].map((talent) => talent.id);
const fighterTalents = classTalents["fighter"].map((talent) => talent.id);
const thiefTalents = classTalents["thief"].map((talent) => talent.id);
const wizardTalents = classTalents["wizard"].map((talent) => talent.id);
const rangerTalents = classTalents["ranger"].map((talent) => talent.id);
const bardTalents = classTalents["bard"].map((talent) => talent.id);

const clericLangs = Object.entries(rareLanguages)
  .filter(([key]) => key !== "draconic")
  .map(([key, value]) => value);

const commonLangList = Object.entries(commonLanguages).map(
  ([key, value]) => value
);
const rareLangList = Object.entries(rareLanguages).map(([key, value]) => value);

export const classList = {
  cleric: {
    id: "oZWzXx1WRLg286zD",
    name: "cleric",
    hitDice: 6,
    numberOfLanguages: [0, 1],
    languages: [],
    rareLanguages: clericLangs,
    features: clericTalents,
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
    features: fighterTalents,
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
      12: [
        levelTalents.bonusTwoStrength,
        levelTalents.bonusTwoDexterity,
        levelTalents.bonusTwoConstitution,
        levelTalents.bonusTwoIntelligence,
        levelTalents.bonusTwoWisdom,
        levelTalents.bonusTwoCharisma,
        "Choose one option from fighter talent table",
      ],
    },
  },
  thief: {
    id: "C6wkCa2w5dlgSq7f",
    name: "thief",
    hitDice: 4,
    numberOfLanguages: [0, 0],
    languages: [],
    rareLanguages: [],
    features: thiefTalents,
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
    languages: commonLangList,
    rareLanguages: rareLangList,
    features: wizardTalents,
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
    features: rangerTalents,
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
    languages: commonLangList,
    rareLanguages: rareLangList,
    features: bardTalents,
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
