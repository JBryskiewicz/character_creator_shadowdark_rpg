import { classList } from "./data/classList";

const talentsRemoveDuplicatesToList = (classTalents) => {
  const filteredTalents = [...new Set(Object.values(classTalents).flat())];
  filteredTalents.pop();
  return filteredTalents;
};

export const assignOnRollTwelveTalent = async (actor, characterClass) => {
  const classTalents = classList[characterClass].talents;
  const filteredTalentIds = talentsRemoveDuplicatesToList(classTalents);

  const talentObjectsList = filteredTalentIds.map((talent) =>
    game.packs.get("shadowdark.talents").index.get(talent)
  );

  new Dialog({
    title: "Choose class talent: ",
    content: `
            <form>
              <div class="form-group">
                <label for="talent">Choose level 1 talent:</label>
                <select name="talent" id="talent">
                ${talentObjectsList.map(
                  (option) =>
                    `<option value="${option._id}">${option.name}</option>`
                )}
                </select>
              </div>
            </form>
          `,
    buttons: {
      ok: {
        label: "Submit",
        callback: async (html) => {
          const talentId = (html = html.find("#talent").val());
          const levelTalent = game.packs
            .get("shadowdark.talents")
            .getDocument(talentId);
          await levelTalent.then((result) =>
            actor.createEmbeddedDocuments("Item", [result])
          );
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
};
