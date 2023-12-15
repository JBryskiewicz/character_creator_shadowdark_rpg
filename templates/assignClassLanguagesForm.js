import { classList } from "../scripts/data/classList.js";

export const classLanguagesSelectionForm = (
  characterClass,
  racialLanguages
) => {
  // turn in-game uuid into item id
  const filterLanguagesIntoId = racialLanguages.map((item) =>
    item.replace("Compendium.shadowdark.languages.Item.", "")
  );

  // common and rare language lists have ids of character's already known languages removed
  const commonLanguageList = classList[characterClass].languages.filter(
    (language) => !filterLanguagesIntoId.includes(language.id)
  );
  const rareLanguageList = classList[characterClass].rareLanguages.filter(
    (language) => !filterLanguagesIntoId.includes(language.id)
  );

  let langs = classList[characterClass].numberOfLanguages;

  // for loops create language form with select fields to match
  // how many extra languages a character class can learn
  let table = "<form>";
  for (let idx = 0; idx < langs[0]; idx++) {
    table += `<div class="form-group">
            <label for="common${idx}">Common langauge:</label>
            <select name="common${idx}" id="common${idx}">
              ${commonLanguageList.map(
                (option) =>
                  `<option value="${option.id}">${option.name}</option>`
              )}
            </select>
          </div>`;
  }

  for (let idx = 0; idx < langs[1]; idx++) {
    table += `<div class="form-group">
            <label for="rare${idx}">Rare langauge:</label>
            <select name="rare${idx}" id="rare${idx}">
              ${rareLanguageList.map(
                (option) =>
                  `<option value="${option.id}">${option.name}</option>`
              )}
            </select>
          </div>`;
  }
  table += `</form>`;

  return table;
};
