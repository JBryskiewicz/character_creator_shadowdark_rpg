import { assignTalentForm } from "../../templates/assignTalentForm.js";
import { saveCharactersTalent } from "./assignTalentSupportFunction.js";

export const talentChoiceDialogWindow = (actor, optionList, title, label) => {
  new Dialog({
    title: title,
    content: assignTalentForm(optionList, label),
    buttons: {
      ok: {
        label: "Submit",
        callback: (html) => {
          const talentId = (html = html.find("#talent").val());
          saveCharactersTalent(actor, talentId);
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
};
