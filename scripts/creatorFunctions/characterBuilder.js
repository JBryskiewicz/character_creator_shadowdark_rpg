import { classList } from "../data/classList.js";
import { raceList } from "../data/raceList.js";
import { rollCharacterHp, returnDwarfBonusHp } from "./rollCharacterHp.js";
import { assignRaceTalents } from "../talentFunctions/assignRaceTalents.js";
import { assignClassTalents } from "../talentFunctions/assignClassTalents.js";
import { assignLevelTalents } from "../talentFunctions/assignLevelTalents.js";
import { assignRaceLanguages } from "../languageFunctions/assignRaceLanguages.js";

const validCharacterName = (actor, characterName) => {
  return characterName === "" ? actor.name : characterName;
};

const rollCharacterGold = async () => {
  const rolledGold = await new Roll("2d6").roll();
  const gold = rolledGold.total * 5;
  return gold;
};

export const characterBuilder = (actor, attributes) => {
  new Dialog({
    title: "Character creator: ",
    content: `
                <form>
                  <table>
                    <tr>
                      <td><b>Strength:</b> ${attributes[0]}</td>
                      <td><b>Dexterity:</b> ${attributes[1]}</td>
                      <td><b>Constitution:</b> ${attributes[2]}</td>
                    </tr>
                    <tr>
                      <td><b>Intelligence:</b> ${attributes[3]}</td>
                      <td><b>Wisdom:</b> ${attributes[4]}</td>
                      <td><b>Charisma:</b> ${attributes[5]}</td>
                    </tr>
                  </table>
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
        callback: async (html) => {
          const characterName = html.find("#name").val();
          const characterClass = html.find("#class").val();
          const race = html.find("#race").val();

          const hp = rollCharacterHp(actor, characterClass, race);
          const dwarfBonusHp = returnDwarfBonusHp(race);

          assignRaceTalents(actor, race);
          assignClassTalents(actor, characterClass);
          assignLevelTalents(actor, characterClass, race);
          assignRaceLanguages(actor, characterClass, race);

          actor.update({
            name: validCharacterName(actor, characterName),
            "system.attributes.hp.value": hp + dwarfBonusHp,
            "system.attributes.hp.base": hp,
            "system.coins.gp": await rollCharacterGold(),
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
