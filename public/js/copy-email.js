document.querySelectorAll("[data-copy-email]").forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.dataset.email;
    const toastId = button.dataset.toast;
    const toast = toastId ? document.getElementById(toastId) : null;

    if (!email) return;

    await navigator.clipboard.writeText(email);

    toast?.classList.remove("opacity-0");
    toast?.classList.add("opacity-100");

    setTimeout(() => {
      toast?.classList.remove("opacity-100");
      toast?.classList.add("opacity-0");
    }, 1000);
  });
});