const tocList = document.getElementById("toc-list");
const headings = document.querySelectorAll("#content h2");

headings.forEach((h, i) => {
  const id = "section-" + i;
  h.id = id;

  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = "#" + id;
  a.textContent = h.textContent;

  li.appendChild(a);
  tocList.appendChild(li);
});

document.getElementById("last-modified").textContent =
  document.lastModified;