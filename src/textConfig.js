const textConfig = {
  landing: {
    title: "Hey Jojo! 💕",
    subtitle: "I Wanted to do something special for you, so I made something special just for you...",
    lastLine: "Click below to see what it is! ✨",
    button: "Open My Heart 💖",
    footer: "Made with love, only for you 💕",
  },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Letter  for you 💌",
    headerSubtitle: "From my heart to yours",
    letterHeaderTitle: "My Princess jojo",
    letterMessage: `My dearest love jojo,

Today feels special, because it’s your day — Princess Day — and you deserve every bit of love, warmth, and happiness in the world. Every moment with you feels like stepping into a fairytale where you’re the princess and I’m just lucky to be part of your story.

You’ve become the most precious person in my life so quickly, it almost feels magical. Your smile, your voice, your little moods… everything about you makes my world brighter.
Being with you inspires me. You make me want to grow, to become better, to be someone who’s worthy of a princess like you.

And honestly? The way you make my heart race should be illegal.
You’re not just special — you’re unforgettable.

Happy Princess Day, Jojo.
You’ll always be the princess of my heart.. You make me want to be the best version of myself.
`,
    letterSignature: "With all my love, always your crazy friend 💕`",
    envelopeClickHint: "Click to open the envelope",
    specialDeliveryText: "Special Delivery 💌",
    continueButton: "Continue To See More ✨"
  },

  chillZone: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track to start vibing ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Dil Cheeze Tujhe Dedi", caption: "You own this heart — dedicated to you 💞" },
      { id: 2, title: "Haseen", caption: "Even if the world ends, I'd still find you 🤍" },
      { id: 3, title: "Dil ka Jo Haal hai", caption: "Tu Kaare Dil Bekarar 💞" }
    ]
  },

  cards: {
    heading: "Some Special Cards For You",
    subheading: "Click each card to reveal a special message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered! Keep exploring 💕`,
      complete: "Amazing! You've discovered all the messages! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "Each message is a piece of my heart that belongs to you forever. ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You’re the calm I run to and the sparkle that lights up my whole day. 💖",
      "I hope this little message made you smile — and gently reminded you how special you are to me. You bring a kind of magic that makes even the smallest moments feel precious ✨",
      "I want to keep making memories with you, tiny ones that turn into stories we’ll tease each other about later, and big ones that stay with us forever. 🌸",
      "On your Princess Day, just know this: You’ll always have a special place in my world — in every little universe we create together. 💕"
    ]
  },

  finalLetter: {
    title: "Final Letter",
    sealingText: "Sealing your letter...",
    sealButton: "Seal this Letter 💌",
    restartButton: "Restart",
    sealedTitle: "Letter Sealed with Love",
    sealedSubtitle: "💕",
    typedDefault: "Always Yours 💕",
    experienceAgain: "Experience Again ✨",
    sendKissButton: "Send a Virtual Kiss 💋",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "My sweetest Princess Jojo,",
    letterParagraphs: [
      "You're the calm I reach for and the laugh that brightens my day.",
      "I hope this tiny world made you smile — and whispered how much you mean to me.",
      "I'll keep making memories, big and small, always with you.",
      "Forever yours, in every little universe."
    ],
    sealingNote: "Sealing will finish the experience."
  },

  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;