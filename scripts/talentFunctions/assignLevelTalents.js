import { classList } from "./data/classList";

export const assignLevelTalents = async (actor, characterClass, race) => {
  const talent = await new Roll("2d6").roll();
  const humanTalent = await new Roll("2d6").roll();

  const talentArray = classList[characterClass].talents[talent.total];

  const talentObjectArray = [
    game.packs.get("shadowdark.talents").index.get(talentArray[0]),
    game.packs.get("shadowdark.talents").index.get(talentArray[1]),
  ];

  if (talentArray.length > 1) {
    new Dialog({
      title: "Choose class talent: ",
      content: `
                  <form>
                    <div class="form-group">
                      <label for="talent">Choose level 1 talent:</label>
                      <select name="talent" id="talent">
                      ${talentObjectArray.map(
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
    const levelTalent = game.packs
      .get("shadowdark.talents")
      .getDocument(classList[characterClass].talents[talent.total][0]);
    await levelTalent.then((result) =>
      actor.createEmbeddedDocuments("Item", [result])
    );
  }

  if (race === "human") {
    const bonusTalentArray =
      classList[characterClass].talents[humanTalent.total];

    const bonusTalentObjectArray = [
      game.packs.get("shadowdark.talents").index.get(bonusTalentArray[0]),
      game.packs.get("shadowdark.talents").index.get(bonusTalentArray[1]),
    ];

    if (bonusTalentArray.length > 1) {
      new Dialog({
        title: "Choose class talent: ",
        content: `
                    <form>
                      <div class="form-group">
                        <label for="talent">Choose level 1 talent:</label>
                        <select name="talent" id="talent">
                        ${bonusTalentObjectArray.map(
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
              const bonusLevelTalent = game.packs
                .get("shadowdark.talents")
                .getDocument(talentId);
              await bonusLevelTalent.then((result) =>
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
      const bonusLevelTalent = game.packs
        .get("shadowdark.talents")
        .getDocument(classList[characterClass].talents[humanTalent.total][0]);
      await bonusLevelTalent.then((result) =>
        actor.createEmbeddedDocuments("Item", [result])
      );
    }
  }
};
