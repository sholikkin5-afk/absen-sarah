self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});
self.addEventListener('fetch', (e) => {
  // Biar bisa offline
});