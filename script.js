const images = document.querySelectorAll(".gallary img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Show lightbox when image is clicked
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
        lightbox.style.display = "flex";
    });
});

// Show selected image
function showImage(index) {
    lightboxImg.src = images[index].src;
}

// Close button
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Prev button
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Next button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Close on background click
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
