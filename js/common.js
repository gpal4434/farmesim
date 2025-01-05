document.addEventListener("DOMContentLoaded", function () {
  const allTabGroups = document.querySelectorAll(".tabs");

  allTabGroups.forEach((tabsGroup) => {
    const tabs = tabsGroup.querySelectorAll(".tab");
    const sections = tabsGroup.nextElementSibling.querySelectorAll("section");

    let activeTab = tabsGroup
      .querySelector(".tab.on")
      ?.getAttribute("data-target");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function (e) {
        e.preventDefault();

        const target = this.getAttribute("data-target");
        if (activeTab === target) return;

        tabs.forEach((tab) => tab.classList.remove("on"));
        sections.forEach((section) => section.classList.remove("on"));

        this.classList.add("on");
        tabsGroup.nextElementSibling.querySelector(target).classList.add("on");

        activeTab = target;
      });
    });
  });
});
