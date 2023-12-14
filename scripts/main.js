import { initializeCreator } from "./creatorFunctions/initializeCreator.js";

console.log("Shadowdark RPG - Character Creator | ...Initialized");

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
        name: "myTokenButton",
        title: "My Token Button",
        icon: "fas fa-star",
        onClick: () => {
          initializeCreator();
        },
        button: true,
      });
    }
  });
}
