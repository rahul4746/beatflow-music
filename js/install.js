let deferredPrompt;

document.addEventListener("DOMContentLoaded", () => {
  const installBtn = document.getElementById("installBtn");

  // Safety check
  if (!installBtn) return;

  // Hide button initially
  installBtn.style.display = "none";

  // Listen for install availability
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();          // Stop automatic mini-infobar
    deferredPrompt = e;          // Save the event
    installBtn.style.display = "inline-flex";
  });

  // Handle install button click
  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;

    deferredPrompt = null;
    installBtn.style.display = "none";
  });
});
