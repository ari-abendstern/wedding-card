// Turns out I don't know how to make cards so I quickly coded one instead xx

const wedding = (spouse1, spouse2) => {
  try {
    ifAnyoneKnowsAnyReasonTheseTwoShouldNotBeJoinedInMatrimonySpeakNowOrForeverHoldYourPeace();
  } catch {
    throw "tantrum";
  }

  return `${spouse1} and ${spouse2} are now married!`;
};

const ifAnyoneKnowsAnyReasonTheseTwoShouldNotBeJoinedInMatrimonySpeakNowOrForeverHoldYourPeace =
  async () => {
    const awkwardPause = "the dramatic bit";

    await awkwardPause;

    return false;
  };

console.log(
  "🎊🎂🕊️🔔💍💍🔔🕊️🎂🎊 ",
  wedding("Lucy", "Edward"),
  " 🎊🎂🕊️🔔💍💍🔔🕊️🎂🎊"
);
