// Small enhancements; the site works without them.

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Copy the email address, falling back to selecting it.
// The button is hidden in the HTML so it only shows when this script runs.
document.querySelectorAll("[data-copy]").forEach((btn) => {
  const label = btn.textContent;
  const status = document.querySelector(btn.dataset.status);
  btn.hidden = false;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = "Copied!";
      if (status) status.textContent = "Email address copied.";
    } catch {
      const target = document.querySelector(btn.dataset.target);
      if (target) getSelection().selectAllChildren(target);
      btn.textContent = "Selected";
      if (status) status.textContent = "Could not copy automatically. The address is selected so you can copy it.";
    }
    setTimeout(() => {
      btn.textContent = label;
      if (status) status.textContent = "";
    }, 2000);
  });
});

// Close the mobile menu after picking a link, or when focus leaves it
const menu = document.getElementById("menu");
const menuBtn = document.querySelector('[popovertarget="menu"]');
menu?.addEventListener("click", (e) => {
  if (e.target.closest("a")) menu.hidePopover();
});
menu?.addEventListener("focusout", (e) => {
  const to = e.relatedTarget;
  if (to && !menu.contains(to) && to !== menuBtn && menu.matches(":popover-open")) menu.hidePopover();
});
