
const party = require("./index");

async function main() {
  party.banner("TERMINAL PARTY");
  party.welcome("Vineesh");

  await party.type("🚀 Preparing your development environment...", 25);
  await party.loading("Loading modules...", 1200);
  await party.loading("Connecting to server...", 1200);

  party.success("Server started successfully!");
  party.randomMessage();
  party.celebrate();
}

main().catch(console.error);
