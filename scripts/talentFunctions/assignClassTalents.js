import { classList } from "./data/classList";

export const assignClassTalents = async (actor, characterClass) => {
  const talentArray = classList[characterClass].features;

  if (characterClass === "fighter") {
    const classTalentArray = talentArray.map((talent) =>
      game.packs.get("shadowdark.talents").index.get(talent)
    );

    const classTalentOptions = [classTalentArray[2], classTalentArray[3]];

    const masteryTrait = game.packs
      .get("shadowdark.talents")
      .getDocument(talentArray[0]);

    await masteryTrait.then((result) =>
      actor.createEmbeddedDocuments("Item", [result])
    );

    const haulerTrait = game.packs
      .get("shadowdark.talents")
      .getDocument(talentArray[1]);

    await haulerTrait.then((result) =>
      actor.createEmbeddedDocuments("Item", [result])
    );

    new Dialog({
      title: "Choose class talent: ",
      content: `
              <form>
                <div class="form-group">
                  <label for="talent">Choose one class talent:</label>
                  <select name="talent" id="talent">
                  ${classTalentOptions.map(
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
  } else {
    const classTalentArray = talentArray.map((talent) =>
      game.packs.get("shadowdark.talents").getDocument(talent)
    );
    Promise.all(classTalentArray).then((result) =>
      actor.createEmbeddedDocuments("Item", result)
    );
  }
};
