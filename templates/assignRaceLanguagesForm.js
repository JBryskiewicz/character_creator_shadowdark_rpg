export const assignRaceLanguagesForm = (languageList) => {
  return `
  <form>
    <div class="form-group">
      <label for="language">Additional langauge:</label>
      <select name="language" id="language">
      ${languageList.map(
        (option) => `<option value="${option.id}">${option.name}</option>`
      )}
      </select>
    </div>
  </form>
  `;
};
