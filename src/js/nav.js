function loadNav(currentPage) {
  fetch('/src/html/nav.html')
    .then(res => res.text())
    .then(html => {
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = html;

      const template = tempContainer.querySelector("#nav-template");
      const clone = template.content.cloneNode(true);

      const navContainer = document.getElementById("nav-container");
      navContainer.innerHTML = "";
      navContainer.appendChild(clone);

      // Apply the "current" class
      const navItems = navContainer.querySelectorAll('[data-page]');
      navItems.forEach(item => {
        if (item.dataset.page === currentPage) {
          item.classList.add("current");
        }
      });

      // Re-initialize Dropotron dropdown menu every time the nav is inserted
      setTimeout(() => {
        $('#nav > ul').dropotron({
          mode: 'fade',
          noOpenerFade: true,
          alignment: 'center'
        });
      }, 0); // Ensure it's applied right after the nav is inserted

    })
    .catch(err => console.error("Error loading nav:", err));
}