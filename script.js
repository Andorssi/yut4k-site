async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

/* コンポーネント読み込み */
async function init() {
  await loadComponent("header", "/components/header.html");
  await loadComponent("sidebar", "/components/sidebar.html");
  await loadComponent("footer", "/components/footer.html");
  await loadComponent("toc", "/components/toc.html");

  generateTOC();
}

init();

/* TOC生成 */
function generateTOC() {
  const tocList = document.getElementById("toc-list");
  const headings = document.querySelectorAll("#content h2");

  if (!tocList || headings.length === 0) return;

  headings.forEach((h, i) => {
    const id = "sec-" + i;
    h.id = id;

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#" + id;
    a.textContent = h.textContent;

    li.appendChild(a);
    tocList.appendChild(li);
  });
}