
const colors = {
  reset: "\x1b[0m",
  pink: "\x1b[38;5;213m",
  purple: "\x1b[38;5;141m",
  blue: "\x1b[38;5;51m",
  cyan: "\x1b[38;5;87m",
  green: "\x1b[38;5;82m",
  yellow: "\x1b[38;5;226m",
  orange: "\x1b[38;5;208m",
  red: "\x1b[38;5;203m",
};

function rainbow(text) {
  const palette = [
    colors.pink,
    colors.orange,
    colors.yellow,
    colors.green,
    colors.cyan,
    colors.blue,
    colors.purple,
  ];

  return [...text]
    .map((char, i) =>
      char === " " ? char : palette[i % palette.length] + char
    )
    .join("") + colors.reset;
}

function banner(title = "TERMINAL PARTY") {
  const width = 40;
  const text = `🎉 ${title} 🎉`;
  const padding = Math.max(0, width - [...text].length);
  const left = Math.floor(padding / 2);
  const right = padding - left;

  console.log("");
  console.log(colors.purple + "╔" + "═".repeat(width) + "╗");
  console.log(
    "║" + " ".repeat(left) + rainbow(text) +
    " ".repeat(right) + colors.purple + "║"
  );
  console.log("╚" + "═".repeat(width) + "╝" + colors.reset);
  console.log(rainbow("   ✨ Make your terminal fun again! ✨"));
  console.log("");
}

function welcome(name = "Developer") {
  console.log(rainbow(`🌈 Hey ${name}! Welcome back! 🌈`));
  console.log("");
  console.log(colors.orange + "    /\\_/\\\\       " + colors.yellow + "/\\_/\\\\");
  console.log("   ( o.o )      ( ^.^ )");
  console.log("    > ^ <        > ^ <" + colors.reset);
  console.log(colors.pink + "       🐱          🐱" + colors.reset);
  console.log("");
  console.log(rainbow(" 🐰 Keep coding. Keep creating. 🚀"));
  console.log("");
}

async function type(text, delay = 30) {
  for (const char of text) {
    process.stdout.write(char);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  console.log("");
}

async function loading(message = "Loading awesome stuff...", duration = 1200) {
  const frames = ["🌈", "✨", "🎉", "🐱", "🐰", "⭐"];
  const start = Date.now();
  let i = 0;

  while (Date.now() - start < duration) {
    process.stdout.write(
      `\r${colors.pink}${frames[i % frames.length]} ${message}${colors.reset}`
    );
    i++;
    await new Promise(resolve => setTimeout(resolve, 120));
  }

  process.stdout.write(
    `\r${colors.green}✔ ${message} Done!${colors.reset}\n`
  );
}

function success(message) {
  console.log(`${colors.green}✔ ${message} 🎉${colors.reset}`);
}

function error(message) {
  console.log(`${colors.red}✖ ${message}${colors.reset}`);
}

function randomMessage() {
  const messages = [
    "🐱 One bug at a time!",
    "🚀 Keep building amazing things!",
    "🌈 Every line of code is progress!",
    "🐰 Small commits, big progress!",
    "✨ You're doing great, developer!",
    "🦊 Stay curious. Keep coding!",
  ];

  console.log(
    rainbow(messages[Math.floor(Math.random() * messages.length)])
  );
}

function celebrate() {
  console.log("");
  console.log(rainbow("✨ 🎉 🐱 PARTY TIME! 🐰 🎉 ✨"));
  console.log(rainbow("    YOU BUILT SOMETHING AWESOME!"));
  console.log("");
}

module.exports = {
  banner,
  welcome,
  type,
  loading,
  success,
  error,
  randomMessage,
  celebrate,
};
