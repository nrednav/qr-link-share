chrome.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
  new QRCode(document.getElementById("qr-code"), {
    text: tabs[0].url,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
});
