(() => {
  const detailsNodes = document.querySelectorAll("details");
  const faqSection = document.querySelector("main section");

  const closeAllButActiveNode = (activeNode) => {
    detailsNodes.forEach((detailsNode) => {
      if (!detailsNode.getAttribute("data-active-faq")) {
        detailsNode.removeAttribute("open");
      }
    });

    activeNode.removeAttribute("data-active-faq");
  };

  faqSection.addEventListener("click", (evt) => {
    if (evt.target.nodeName === "SUMMARY") {
      evt.target.parentElement.setAttribute("data-active-faq", true);
      closeAllButActiveNode(evt.target.parentElement);
    }
  });
})();
