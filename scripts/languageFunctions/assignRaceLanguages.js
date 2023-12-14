import { raceList } from "../data/raceList.js";
import { assignClassLanguages } from "./assignClassLanguages.js";

export const assignRaceLanguages = (actor, characterClass, race) => {
  if (race === "human") {
    const languageArray = raceList[race].languageOfChoice;

    new Dialog({
      title: "Choose language: ",
      content: `
          <form>
            <div class="form-group">
              <label for="language">Additional langauge:</label>
              <select name="language" id="language">
              ${languageArray.map(
                (option) =>
                  `<option value="${option.id}">${option.name}</option>`
              )}
              </select>
            </div>
          </form>
        `,
      buttons: {
        ok: {
          label: "Submit",
          callback: (html) => {
            const additionalLanguage = html.find("#language").val();
            const languageList = [
              `Compendium.shadowdark.languages.Item.${additionalLanguage}`,
              `Compendium.shadowdark.languages.Item.${raceList[race].knownLanguages[0].id}`,
            ];

            actor.update({
              "system.languages": languageList,
            });

            if (
              characterClass === "cleric" ||
              characterClass === "wizard" ||
              characterClass === "bard"
            ) {
              assignClassLanguages(actor, characterClass, languageList);
            }
          },
        },
        cancel: {
          label: "Cancel",
        },
      },
    }).render(true);
  } else {
    const languageList = raceList[race].knownLanguages.map(
      (language) => `Compendium.shadowdark.languages.Item.${language.id}`
    );

    actor.update({
      "system.languages": languageList,
    });

    if (
      characterClass === "cleric" ||
      characterClass === "wizard" ||
      characterClass === "bard"
    ) {
      assignClassLanguages(actor, characterClass, languageList);
    }
  }
};
