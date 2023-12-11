import { characterBuilder } from "./characterBuilder/characterBuilder";

let strRoll;
let dexRoll;
let conRoll;
let intRoll;
let wisRoll;
let chaRoll;

let statArray = [];

let validator = false;
while (!validator) {
  strRoll = await new Roll("3d6").roll();
  dexRoll = await new Roll("3d6").roll();
  conRoll = await new Roll("3d6").roll();
  intRoll = await new Roll("3d6").roll();
  wisRoll = await new Roll("3d6").roll();
  chaRoll = await new Roll("3d6").roll();
  statArray = [
    strRoll.total,
    dexRoll.total,
    conRoll.total,
    intRoll.total,
    wisRoll.total,
    chaRoll.total,
  ];
  validator = statArray.some((item) => item >= 14);
}

const saveAttributes = (actor, attributes) => {
  actor.update({
    "system.abilities.str.base": attributes[0],
    "system.abilities.dex.base": attributes[1],
    "system.abilities.con.base": attributes[2],
    "system.abilities.int.base": attributes[3],
    "system.abilities.wis.base": attributes[4],
    "system.abilities.cha.base": attributes[5],
  });
};

const rolledGold = await new Roll("2d6").roll();

new Dialog({
  title: "Confirmation: ",
  content: `<p>Do you want to create new actor?</p>`,
  buttons: {
    ok: {
      label: "Submit",
      callback: async (html) => {
        const player = game.users.current.name;

        const actor = await Actor.create({
          name: `${player}'s new Actor`,
          type: "Player",
          img: "icons/svg/mystery-man.svg",
          "prototypeToken.sight.range": 10,
          "prototypeToken.sight.visionMode": "darkvision",
        });

        saveAttributes(actor, statArray);
        actor.sheet.render(true);
        characterBuilder(actor, rolledGold);
      },
    },
    cancel: {
      label: "Cancel",
    },
  },
}).render(true);
