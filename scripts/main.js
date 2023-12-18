import { initializeCreator } from "./creatorFunctions/initializeCreator.js";

console.log("Shadowdark RPG - Character Creator");

Hooks.on("init", function () {
  addTokenControlsButton();
});

function addTokenControlsButton() {
  const addButton = (controls, button) => {
    controls.push(button);
    return controls;
  };

  Hooks.on("getSceneControlButtons", (controls) => {
    const tokenControlsButton = controls.find(
      (button) => button.name === "token"
    );

    if (tokenControlsButton) {
      addButton(tokenControlsButton.tools, {
        name: "characterCreateButton",
        title: "Create new actor",
        icon: "fa-solid fa-helmet-battle",
        onClick: () => {
          initializeCreator();
        },
        button: true,
      });
    }
  });
}
