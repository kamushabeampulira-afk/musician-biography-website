/*
MOBILE NAVIGATION
 */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });
}

/* Close menu when clicking a navigation link */
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (hamburger) {
      hamburger.classList.remove("active");
    }

    if (navMenu) {
      navMenu.classList.remove("active");
    }

    if (hamburger) {
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});

/*
SMOOTH SCROLLING
 */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/*
ACTIVE NAVIGATION
*/

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/*
HERO TYPEWRITER EFFECT
 */

document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-content p");

  if (heroText) {
    const originalText = heroText.textContent;
    let index = 0;

    heroText.textContent = "";

    function typeWriter() {
      if (index < originalText.length) {
        heroText.textContent += originalText.charAt(index);
        index++;

        setTimeout(typeWriter, 50);
      }
    }

    setTimeout(typeWriter, 1000);
  }
});

/*
GALLERY FILTERING
 */

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    /* Update active button */
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    const filterValue = button.getAttribute("data-filter");

    /* Show/hide gallery items */
    galleryItems.forEach((item) => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach((item) => {
  const image = item.querySelector("img");
  const video = item.querySelector("video");

  if (!image || video) {
    return;
  }

  item.addEventListener("click", () => {
    if (!lightbox || !lightboxImg || !lightboxCaption) {
      return;
    }

    const title = item.querySelector("h3")?.textContent || "";
    const description = item.querySelector("p")?.textContent || "";
    const date = item.querySelector(".date")?.textContent || "";

    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt || title;

    lightboxCaption.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <span class="lightbox-date">${date}</span>
    `;

    lightbox.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

/* Close lightbox */
function closeGalleryLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.style.display = "none";
  document.body.style.overflow = "auto";

  if (lightboxImg) {
    lightboxImg.src = "";
  }
}

if (closeLightbox) {
  closeLightbox.addEventListener("click", closeGalleryLightbox);
}

/* Close lightbox when clicking outside the image */
if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeGalleryLightbox();
    }
  });
}

/* Close lightbox with Escape */
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    lightbox &&
    lightbox.style.display === "block"
  ) {
    closeGalleryLightbox();
  }
});

document.querySelectorAll(".gallery-item video").forEach((video) => {
  video.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

const loadMoreBtn = document.querySelector(".load-more .btn");

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    const hiddenItems = document.querySelectorAll(".gallery-item.hidden");

    hiddenItems.forEach((item) => {
      item.classList.remove("hidden");
    });

    loadMoreBtn.textContent = "No More Photos";
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.opacity = "0.5";
    loadMoreBtn.style.cursor = "not-allowed";
  });
}
