var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    var currenttab = tab.getAttribute("data-li");

    const target = document.querySelector(tab.dataset.tabTarget);

    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    items.forEach(function (item) {
      item.style.display = "none";
    });

    target.style.display = "block";
  });
});
