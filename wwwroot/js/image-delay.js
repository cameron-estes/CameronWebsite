// Simple delay to ensure background images load before page display
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure background images are loaded
    setTimeout(function() {
        // Remove any loading class if present
        document.body.classList.remove('loading');

        // Ensure background is properly set
        const isMobile = window.innerWidth <= 768;
        const imageUrl = isMobile ? 'thumbnails/skylineMobile.jpg' : 'thumbnails/skylineDesktop.jpg';

        // Force background refresh
        document.body.style.backgroundImage = `url('${imageUrl}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
    }, 500); // 500ms delay
});
