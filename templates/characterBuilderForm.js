import { classList } from "../scripts/data/classList.js";
import { raceList } from "../scripts/data/raceList.js";

export const characterBuilderForm = (attributes) => {
  return `
    <form>
        <table>
            <tr>
                <td><b>Strength:</b> ${attributes[0]}</td>
                <td><b>Dexterity:</b> ${attributes[1]}</td>
                <td><b>Constitution:</b> ${attributes[2]}</td>
            </tr>
            <tr>
                <td><b>Intelligence:</b> ${attributes[3]}</td>
                <td><b>Wisdom:</b> ${attributes[4]}</td>
                <td><b>Charisma:</b> ${attributes[5]}</td>
            </tr>
        </table>
        <div class="form-group">
            <label for="name">Character name:</label>
            <input type="text" name="name" id="name" value="">
        </div>
        <div class="form-group">
            <label for="class">Choose class:</label>
            <select name="class" id="class">
            ${Object.entries(classList).map(
              ([name]) => `<option value="${name}">${name}</option>`
            )}
            </select>
        </div>
        <div class="form-group">
            <label for="race">Choose race:</label>
            <select name="race" id="race">
            ${Object.entries(raceList).map(
              ([key]) => `<option value="${key}">${key}</option>`
            )}
            </select>
        </div>
    </form>
  `;
};
