import { classList } from "../data/classList.js";

const classLanguagesSelectionTemplate = (characterClass, racialLanguages) => {
  const filteringLanguagesById = racialLanguages.map((item) =>
    item.replace("Compendium.shadowdark.languages.Item.", "")
  );

  const commonLanguageList = classList[characterClass].languages.filter(
    (language) => !filteringLanguagesById.includes(language.id)
  );
  const rareLanguageList = classList[characterClass].rareLanguages.filter(
    (language) => !filteringLanguagesById.includes(language.id)
  );

  let langs = classList[characterClass].numberOfLanguages;

  let table = "<form>";
  for (let idx = 0; idx < langs[0]; idx++) {
    table += `<div class="form-group">
          <label for="common${idx}">Common langauge:</label>
          <select name="common${idx}" id="common${idx}">
            ${commonLanguageList.map(
              (option) => `<option value="${option.id}">${option.name}</option>`
            )}
          </select>
        </div>`;
  }

  for (let idx = 0; idx < langs[1]; idx++) {
    table += `<div class="form-group">
          <label for="rare${idx}">Rare langauge:</label>
          <select name="rare${idx}" id="rare${idx}">
            ${rareLanguageList.map(
              (option) => `<option value="${option.id}">${option.name}</option>`
            )}
          </select>
        </div>`;
  }
  table += `</form>`;
  return table;
};

export const assignClassLanguages = (
  actor,
  characterClass,
  racialLanguages
) => {
  let langs = classList[characterClass].numberOfLanguages;

  new Dialog({
    title: "Choose language: ",
    content: classLanguagesSelectionTemplate(characterClass, racialLanguages),
    buttons: {
      ok: {
        label: "Submit",
        callback: (html) => {
          const classLanguageList = [];

          for (idx = 0; idx < langs[0]; idx++) {
            classLanguageList.push(
              `Compendium.shadowdark.languages.Item.${html
                .find(`#common${idx}`)
                .val()}`
            );
          }
          for (idx = 0; idx < langs[1]; idx++) {
            classLanguageList.push(
              `Compendium.shadowdark.languages.Item.${html
                .find(`#rare${idx}`)
                .val()}`
            );
          }

          const actorLanguages = actor.system.languages;

          actor.update({
            "system.languages": [...actorLanguages, ...classLanguageList],
          });
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
};
