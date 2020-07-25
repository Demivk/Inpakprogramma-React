const {app, BrowserWindow} = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
let window = null;

function createWindow() {
  window = new BrowserWindow({width: 950, height: 713, webPreferences: {nodeIntegration: true}});
  window.loadURL(
      isDev
          ? "http://localhost:3000"
          : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

function openMainWindow() {
  if (window === null) {
    createWindow();
  }
}

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (window === null) {
    openMainWindow();
  }
});
