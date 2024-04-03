// const images = [
//     "assets/images/portfolio/Group 162508.png",
//     "assets/images/portfolio/Group 162509.png",
//     "assets/images/portfolio/Group 162510.png"
// ];

// const imageContainer = document.getElementById("imageContainer");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");

// let currentPage = 0;
// const imagesPerPage = 1; // Change this number to adjust the number of images per page

// function displayImages(page) {
//     imageContainer.innerHTML = ""; // Clear existing images
//     const startIndex = page * imagesPerPage;
//     const endIndex = startIndex + imagesPerPage;
//     for (let i = startIndex; i < endIndex && i < images.length; i++) {
//         const col = document.createElement("div");
//         col.classList.add("col");
//         col.innerHTML = `
//             <div class="card-none h-100">
//                 <img src="${images[i]}" alt="" class="img-fluid center">
//             </div>
//         `;
//         imageContainer.appendChild(col);
//     }
// }

// prevButton.addEventListener("click", () => {
//     if (currentPage > 0) {
//         currentPage--;
//         displayImages(currentPage);
//     }
// });

// nextButton.addEventListener("click", () => {
//     const maxPage = Math.ceil(images.length / imagesPerPage) - 1;
//     if (currentPage < maxPage) {
//         currentPage++;
//         displayImages(currentPage);
//     }
// });

// // Initial display
// displayImages(currentPage);