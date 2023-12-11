import { classList } from "./data/classList";
import { raceList } from "./data/raceList";
import { assignRaceTalents } from "./talentFunctions/assignRaceTalents";
import { assignClassTalents } from "./talentFunctions/assignClassTalents";
import { assignLevelTalents } from "./talentFunctions/assignLevelTalents";

export const characterBuilder = (actor, rolledGold) => {
  new Dialog({
    title: "Character creator: ",
    content: `
                  <form>
                    <div class="form-group">
                      <label for="name">Character name:</label>
                      <input type="text" name="name" id="name" value="">
                    </div>
                    <div class="form-group">
                      <label for="class">Choose class:</label>
                      <select name="class" id="class">
                      ${Object.entries(classList).map(
                        ([name]) => `<option value="${name}">${name}</option>`
                      )}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="race">Choose race:</label>
                      <select name="race" id="race">
                      ${Object.entries(raceList).map(
                        ([key]) => `<option value="${key}">${key}</option>`
                      )}
                      </select>
                    </div>
                  </form>
                `,
    buttons: {
      ok: {
        label: "Submit",
        callback: (html) => {
          const characterName = html.find("#name").val();
          const characterClass = html.find("#class").val();
          const race = html.find("#race").val();

          const conModifier =
            actor.system.abilities.con.mod > 0
              ? actor.system.abilities.con.mod
              : 1;

          let hp = conModifier;
          let dwarfBonus = 0;

          const hpRoll =
            Math.floor(Math.random() * classList[characterClass].hitDice) + 1;
          let advHpRoll = 0;

          if (race === "dwarf") {
            advHpRoll =
              Math.floor(Math.random() * classList[characterClass].hitDice) + 1;
            dwarfBonus += 2;
          }

          hpRoll > advHpRoll ? (hp += hpRoll) : (hp += advHpRoll);

          const gold = rolledGold.total * 5;

          assignRaceTalents(actor, race);
          assignClassTalents(actor, characterClass);
          assignLevelTalents(actor, characterClass, race);

          actor.update({
            name: characterName,
            "system.attributes.hp.value": hp + dwarfBonus,
            "system.attributes.hp.base": hp,
            "system.coins.gp": gold,
            "system.ancestry": `Compendium.shadowdark.ancestries.Item.${raceList[race].race}`,
            "system.class": `Compendium.shadowdark.classes.Item.${classList[characterClass].id}`,
          });
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
};
