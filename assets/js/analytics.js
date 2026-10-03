/**
 * Vercel Web Analytics Initialization
 * This script initializes Vercel Web Analytics for the static site.
 */

// Initialize Vercel Analytics
(function() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;

  // Vercel Analytics queue initialization
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };

  // The analytics script will be automatically injected by Vercel when deployed
  // This initialization ensures the tracking queue is ready
  console.log('Vercel Analytics initialized');
})();
