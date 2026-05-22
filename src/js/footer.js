fetch("/src/html/footer.html")
  .then(res => res.text())
  .then(html => {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = html;

    const template = tempContainer.querySelector("#footer-template");
    const footerContainer = document.querySelector("#footer-container");

    if (!template || !footerContainer) {
      console.error("Footer template or container not found");
      return;
    }

    footerContainer.innerHTML = ""; // prevents duplicates
    footerContainer.appendChild(template.content.cloneNode(true));
  })
  .catch(err => console.error("Error loading footer:", err));