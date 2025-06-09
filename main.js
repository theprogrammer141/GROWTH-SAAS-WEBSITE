document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    if (!groupHeader) return;
    //Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    //Toggle body
    groupBody.classList.toggle("open");

    //Close other group bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.add("fa-plus");
      }
    });
  });

  const aboutUs = document.getElementById("about-us");
  const blog = document.getElementById("blog");
  const faqLis = document.querySelectorAll("li");

  aboutUs.addEventListener("click", () => {
    document.querySelector(".footer").scrollIntoView({
      behavior: "smooth",
    });
  });

  blog.addEventListener("click", () => {
    document.querySelector(".testimonials").scrollIntoView({
      behavior: "smooth",
    });
  });

  faqLis.forEach((li) => {
    li.addEventListener("click", () => {
      faqLis.forEach((item) => item.classList.remove("active"));

      li.classList.add("active");

      if (li.id === "faqAll") {
        document.querySelector(".faq").scrollIntoView({
          behavior: "smooth",
        });
      } else if (li.id === "faqGettingStarted") {
        document.querySelector(".hero").scrollIntoView({
          behavior: "smooth",
        });
      } else if (li.id === "faqPricing") {
        document.querySelector(".pricing").scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const expandingButton = document.querySelector(".expanding-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const blogMobile = document.getElementById("blog-mobile");
  const aboutUsMobile = document.getElementById("about-us-mobile");

  expandingButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );

  aboutUsMobile.addEventListener("click", () => {
    document.querySelector(".footer").scrollIntoView({
      behavior: "smooth",
    });
    mobileMenu.classList.remove("active");
  });

  blogMobile.addEventListener("click", () => {
    document.querySelector(".testimonials").scrollIntoView({
      behavior: "smooth",
    });
    mobileMenu.classList.remove("active");
  });

  // Login form validation
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const loginButton = document.querySelector("button");

  loginButton.addEventListener("click", () => {
    event.preventDefault();

    if (email.value.trim() === "" || password.value.trim() === "") {
      alert("Please enter valid email and password!");
    } else {
      alert("User logged In!");
    }
  });
});

// Login Page
document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const loginButton = document.querySelector("button");

  loginButton.addEventListener("click", () => {
    event.preventDefault();

    if (email.value.trim() === "" || password.value.trim() === "") {
      alert("Please enter valid email and password!");
    } else {
      alert("User logged In!");
    }
  });
});
