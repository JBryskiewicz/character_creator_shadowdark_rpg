import { characterBuilder } from "./characterBuilder/characterBuilder";
import { saveAttributes } from "./characterBuilder/saveAttributes";

new Dialog({
  title: "Confirmation: ",
  content: `<p>Do you want to create new actor?</p>`,
  buttons: {
    ok: {
      label: "Submit",
      callback: async () => {
        const player = game.users.current.name;

        const actor = await Actor.create({
          name: `${player}'s new Actor`,
          type: "Player",
          img: "icons/svg/mystery-man.svg",
          "prototypeToken.sight.range": 10,
          "prototypeToken.sight.visionMode": "darkvision",
        });

        saveAttributes(actor);
        characterBuilder(actor);
        actor.sheet.render(true);
      },
    },
    cancel: {
      label: "Cancel",
    },
  },
}).render(true);
