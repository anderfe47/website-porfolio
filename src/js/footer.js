fetch("/src/html/footer.html") // adjust path as needed
  .then(res => res.text())
  .then(html => {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = html;
    const template = tempContainer.querySelector("#footer-template");
    const clone = template.content.cloneNode(true);
    document.querySelector("#footer-container").appendChild(clone);
  })
  .catch(err => console.error("Error loading footer:", err));