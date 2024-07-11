// content.js
window.addEventListener('load', function() {
    function hideReelsIcon() {
      // Query the DOM for the Reels icon element and remove it
      const reelsIcon = document.querySelector('a[href="/reels/"]');
      if (reelsIcon) {
        reelsIcon.style.display = 'none';
      }
    }
    
    // Initial attempt to hide the Reels icon
    hideReelsIcon();
    
    // Mutation observer to monitor and hide Reels icon if it appears later
    const observer = new MutationObserver(hideReelsIcon);
    observer.observe(document.body, { childList: true, subtree: true });
  });
  