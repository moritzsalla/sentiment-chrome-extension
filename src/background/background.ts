import SenseHat from "../background/sensehat";

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              // hostEquals:
              schemes: ["http", "https"],
            },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

const Sense = new SenseHat("192.168.0.24", true);

/*
********
init animation loop
and do smth with sensehat
********
*/

let c = 1;
let easing = 0.1;

let col = {
  min: { r: 255, g: 0, b: 0 },
  max: { r: 0, g: 255, b: 0 },
};

chrome.storage.local.set({ color: col });
chrome.storage.onChanged.addListener(function (namespace) {
  if (namespace.color) col = namespace.color.newValue;
});

// create animation loop to animate sensehat
setInterval(function () {
  chrome.storage.local.get(["score"], (result) => {
    if (result.score.constructor === Array) {
      let val = result.score[result.score.length - 1];

      let dist = val - c;
      c += dist * easing;

      const { min, max } = col;

      const outR = Math.round(map(c, 0, 1, min.r, max.r));
      const outG = Math.round(map(c, 0, 1, min.g, max.g));
      const outB = Math.round(map(c, 0, 1, min.b, max.b));

      // send to sensehat
      Sense.setColor(outR, outG, outB);
    }
  });
}, 400);

/*
********
helper functions
********
*/

function map(
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
): number {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
