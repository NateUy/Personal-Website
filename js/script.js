let tabs = document.querySelectorAll(".tabs h2");
let contents = document.querySelectorAll(".tabscontents div");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    contents[i].classList.add("active");
    tabs[i].classList.add("active");
  });
});

let tabs1 = document.querySelectorAll(".tabs1 h2");
let contents1 = document.querySelectorAll(".tabscontents1 div");

tabs1.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    contents1.forEach((content) => {
      content.classList.remove("active");
    });
    tabs1.forEach((tab) => {
      tab.classList.remove("active");
    });
    contents1[i].classList.add("active");
    tabs1[i].classList.add("active");
  });
});

let tabs2 = document.querySelectorAll(".tabs2 h3");
let contents2 = document.querySelectorAll(".tabscontents2 div");

tabs2.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    contents2.forEach((content) => {
      content.classList.remove("active");
    });
    tabs2.forEach((tab) => {
      tab.classList.remove("active");
    });
    contents2[i].classList.add("active");
    tabs2[i].classList.add("active");
  });
});

let tabs3 = document.querySelectorAll(".tabs3 h2");
let contents3 = document.querySelectorAll(".tabscontents3 div");

tabs3.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    contents3.forEach((content) => {
      content.classList.remove("active");
    });
    tabs3.forEach((tab) => {
      tab.classList.remove("active");
    });
    contents3[i].classList.add("active");
    tabs3[i].classList.add("active");
  });
});

let section = document.querySelectorAll("section");
let links = document.querySelectorAll("navbar ul li a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("navbar ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

let navtabs = document.querySelectorAll(".nav-item a");

navtabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    navtabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    navtabs[i].classList.add("active");
  });
});
