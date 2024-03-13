// chrome.scripting
//   .registerContentScripts([{
//     id: "session-script",
//     js: ["content-script.js"],
//     css: [],
//     persistAcrossSessions: false,
//     matches: ["*://example.com/*"],
//     runAt: "document_start",
//   }])
//   .then(() => console.log("registration complete"))
//   .catch((err) => console.warn("unexpected error", err))