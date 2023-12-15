export const saveCharactersTalent = async (actor, talentId) => {
  const talent = game.packs.get("shadowdark.talents").getDocument(talentId);
  await talent.then((result) =>
    actor.createEmbeddedDocuments("Item", [result])
  );
};
