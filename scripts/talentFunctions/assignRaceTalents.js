import { raceList } from "../data/raceList.js";

export const assignRaceTalents = async (actor, race) => {
  const talentArray = raceList[race].talent;

  const talentObjectArray = [
    game.packs.get("shadowdark.talents").index.get(talentArray[0]),
    game.packs.get("shadowdark.talents").index.get(talentArray[1]),
  ];

  if (race === "elf") {
    new Dialog({
      title: "Choose race talent: ",
      content: `
                <form>
                  <div class="form-group">
                    <label for="talent">Choose race talent:</label>
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
            const ancestryTalent = game.packs
              .get("shadowdark.talents")
              .getDocument(talentId);
            await ancestryTalent.then((result) =>
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
    const ancestryTalent = game.packs
      .get("shadowdark.talents")
      .getDocument(raceList[race].talent[0]);
    await ancestryTalent.then((result) =>
      actor.createEmbeddedDocuments("Item", [result])
    );
  }
};
