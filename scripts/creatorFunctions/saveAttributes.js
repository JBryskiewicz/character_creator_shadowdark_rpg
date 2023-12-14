export const saveAttributes = async (actor) => {
  const statArray = [];
  let validator = false;

  while (!validator) {
    statArray.length = 0;

    for (let i = 0; i < 6; i++) {
      const attribute = await new Roll("3d6").roll();
      statArray.push(attribute.total);
    }

    validator = statArray.some((item) => item >= 14);
  }

  actor.update({
    "system.abilities.str.base": statArray[0],
    "system.abilities.dex.base": statArray[1],
    "system.abilities.con.base": statArray[2],
    "system.abilities.int.base": statArray[3],
    "system.abilities.wis.base": statArray[4],
    "system.abilities.cha.base": statArray[5],
  });
};
