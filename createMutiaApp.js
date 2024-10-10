#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");

console.log("Creating a new MutiaJS project with Tailwind CSS...");

// Membuat direktori baru untuk proyek
const projectName = process.argv[2] || "mutia-app";
execSync(`mkdir ${projectName}`);
process.chdir(projectName);

// Inisialisasi package.json baru di proyek
execSync("npm init -y");

// Install Tailwind CSS dan PostCSS otomatis
console.log("Installing Tailwind CSS...");
execSync("npm install tailwindcss postcss autoprefixer");

// Generate Tailwind config
console.log("Generating Tailwind configuration...");
execSync("npx tailwindcss init");

// Buat file PostCSS config
fs.writeFileSync(
  "postcss.config.js",
  `module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };`
);

// Buat file CSS untuk Tailwind
fs.writeFileSync(
  "src/styles/tailwind.css",
  `@tailwind base;
  @tailwind components;
  @tailwind utilities;`
);

// Buat file HTML dasar untuk proyek
fs.writeFileSync(
  "index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MutiaJS App</title>
  <link href="dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-4xl font-bold text-center text-blue-600">Hello from MutiaJS with Tailwind CSS!</h1>
</body>
</html>`
);

console.log("Project setup complete! To get started, run:");
console.log(`cd ${projectName} && npm run build:css`);
