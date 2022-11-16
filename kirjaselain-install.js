const { exec } = require("node:child_process");

exec("cd backend && npm install", (error, stdout, stderr) => {
  if (error) {
    console.error(`error backend: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr backend: ${stderr}`);
    return;
  }

  console.log(`install backend packages:\n${stdout}`);
});

exec("cd frontend && npm install", (error, stdout, stderr) => {
  if (error) {
    console.error(`error frontend: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr frontend: ${stderr}`);
    return;
  }

  console.log(`install frontend packages:\n${stdout}`);
});
