export const assignTalentForm = (talentOptions, label) => {
  return `
    <form>
      <div class="form-group">
        <label for="talent">${label}</label>
        <select name="talent" id="talent">
        ${talentOptions.map(
          (option) => `<option value="${option._id}">${option.name}</option>`
        )}
        </select>
      </div>
    </form>
  `;
};
