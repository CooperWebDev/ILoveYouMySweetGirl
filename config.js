/* =====================================================================
   ✏️  COOPER — EDIT EVERYTHING IN THIS FILE  ✏️
   Change the password, the card messages, the letter, anything.
   Keep the quotes "" and commas , where they are.
   (Open this file with Notepad, change the text, save, refresh the page.)
   ===================================================================== */
const CONFIG = {
  herName: "Ella",
  fromName: "Cooper",

  // The day you started dating (year-month-day)
  startDate: "2026-04-04",

  // Any of these will unlock the site (slashes, dots and spaces are ignored,
  // so "04/04/2026", "4.4.2026" and "04042026" all work).
  // You can also add a word, like "bunny".
  passwords: ["04042026", "442026", "0404", "44"],
  hint: "Hint: the day our story started 🌸 (DD/MM/YYYY)",

  // The 3 lines written during the intro animation (heart → her name → the date)
  introLines: ["hi, Ella…", "the cutest girl in the whole world", "do you remember this day?"],
  sinceText: "the day you became my favorite person 💗",

  // Background music.
  //   ""  = a soft music-box song made by the code itself
  //   or put an .mp3 in this folder and write its name, like "song.mp3"
  musicFile: "",
  autoMusic: true, // start the music when she opens the surprise

  // The flip cards. icon = any emoji, bg = card color
  cards: [
    { icon: "🌸", bg: "linear-gradient(150deg,#ffe0ee,#ffc2da)", title: "Open when you need a smile",
      text: "Hey pretty girl. Just a reminder that you're the cutest, sweetest person I know — and I'm not even exaggerating. Go smile in the mirror, because that's my favorite view in the whole world." },
    { icon: "🐰", bg: "linear-gradient(150deg,#fff0f6,#ffd3e6)", title: "Open when you're feeling down",
      text: "I wish I could give you the biggest hug right now. Whatever is going on, it won't last forever — but I will. You're never alone, Ella. I've got you, always." },
    { icon: "🐴", bg: "linear-gradient(150deg,#f6e6ff,#e6c8ff)", title: "Open when you miss me",
      text: "I miss you too. Like, a lot. Close your eyes and imagine I'm right next to you holding your hand. Okay, now text me — I'm probably already thinking about you." },
    { icon: "🎮", bg: "linear-gradient(150deg,#ffe6f0,#ffbcd6)", title: "For my Player 2",
      text: "Every game is better with you in it — even when you carry me (which is… often). You're my favorite teammate, in games and in life." },
    { icon: "🎹", bg: "linear-gradient(150deg,#fff2f8,#f9d0ef)", title: "For my favorite pianist",
      text: "I love watching you play. The way you focus, the way you light up when you get it right… you make everything sound beautiful. Never stop playing." },
    { icon: "🎤", bg: "linear-gradient(150deg,#ffe3f1,#ffc7e4)", title: "Stray Kids stan certified",
      text: "I know I've got serious competition with Stray Kids 😅 but I'm fine being second place on your playlist, as long as I'm first in your heart." },
    { icon: "🐶", bg: "linear-gradient(150deg,#fff1e9,#ffd5e2)", title: "My promises to you",
      text: "I promise to make you laugh, to always listen, to send you way too many cute dog videos, to bring you flowers (orchids, obviously) and to always choose you." },
    { icon: "💗", bg: "linear-gradient(150deg,#ffd6e7,#ff9fc4)", title: "Just because",
      text: "No reason. I just love you. That's it, that's the card. 💗" },
  ],

  // Scratch-off love coupons
  coupons: [
    { icon: "🌸", title: "One date, anywhere you want" },
    { icon: "🐰", title: "Unlimited hugs, no questions asked" },
    { icon: "🎤", title: "A Stray Kids video marathon — I won't complain once" },
  ],

  // "Why you're my favorite" boxes
  traits: [
    { icon: "🍓", name: "Sweet",    text: "You're kind to literally everyone — and somehow even sweeter to me." },
    { icon: "🐰", name: "Cute",     text: "Officially the cutest human alive. I checked. Twice." },
    { icon: "✨", name: "Exciting", text: "Every day with you feels like a new adventure." },
    { icon: "🎨", name: "Creative", text: "Your brain is full of the coolest ideas. I love how you see the world." },
    { icon: "🤍", name: "Helpful",  text: "You always show up for the people you love. You make everyone's life better — especially mine." },
  ],

  // Photos (optional). Put pictures in this folder and list them here, like:
  //   { src: "photo1.jpg", caption: "our first date 💗" },
  // Leave the list empty [] and the photo section stays hidden.
  photos: [],

  // The secret letter (each line = one paragraph)
  letter: [
    "Dear Ella,",
    "I'm not always the best at saying how I feel out loud, so I made you this instead.",
    "Ever since April 4th, everything has felt brighter. You make the boring days fun and the good days even better. You're sweet, creative, caring, and honestly the cutest person ever.",
    "Thank you for the laughs, the games, the long talks, and for letting me be the one who gets to love you.",
    "I can't wait for all the days we haven't had yet.",
  ],
  signOff: "Forever yours, Cooper 💗",

  question: "So… will you stay my Player 2 forever? 🎮",
  yesAnswer: "Best answer ever. Player 2 locked in — forever 💗",

  // The "game credits" that roll at the very end
  credits: [
    ["Starring", "Ella"],
    ["Player 2", "Cooper"],
    ["Written & coded by", "Cooper (with a lot of love)"],
    ["Cutest supporting cast", "Bunnies 🐰  Horses 🐴  Dogs 🐶"],
    ["Set design", "Pink everything & orchids 🌸"],
    ["Soundtrack", "Ella on piano 🎹 & Stray Kids 🎤"],
    ["Special thanks", "April 4, 2026 — the best day ever"],
  ],
};
