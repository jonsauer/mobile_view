const scrollButton = document.getElementById('scroll-to-top');


window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollButton.style.opacity = '1';
    scrollButton.style.visibility = 'visible';
  } else {
    scrollButton.style.opacity = '0';
    scrollButton.style.visibility = 'hidden';
  }
});


scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener('DOMContentLoaded', function () {
  // Define the image sources for your gallery
  const imageSources = [
      'images/leo_staring.JPG',
      'images/leo_anna.JPG',
      'images/happy_leo.JPG',
      'images/Leo_family.JPG'
      // Add more image sources as needed
  ];

  // Get the gallery container
  const galleryContainer = document.querySelector('.grid-container-picture');

  // Loop through image sources and create anchor elements with lightbox attributes
  imageSources.forEach(function (src, index) {
      // Create an anchor element with Lightbox attributes
      const anchorElement = document.createElement('a');
      anchorElement.href = src;
      anchorElement.setAttribute('data-lightbox', 'gallery');
      anchorElement.setAttribute('data-title', `Gallery Image ${index + 1}`);

      // Create an image element
      const imgElement = document.createElement('img');

      // Set attributes for the image
      imgElement.src = src;
      imgElement.alt = `Gallery Image ${index + 1}`;
      imgElement.style.width = '300px'; // Set the width as needed

      // Append the image element to the anchor element
      anchorElement.appendChild(imgElement);

      // Append the anchor element to the gallery container
      galleryContainer.appendChild(anchorElement);
  });

  // Initialize Lightbox
  lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
  });
});

