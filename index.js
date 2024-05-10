// Check Update
const PackageNotifier = require("@mgalacyber/package-notifier");
const PackageFile = require("./package.json");
PackageNotifier(PackageFile);

// Import Source
module.exports = require("./dist");