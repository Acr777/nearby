self.addEventListener('push', function(event) {
  const data = event.data.json();
  const options = {
      body: data.body,
      icon: 'icon.png',  // path to an icon image
      vibrate: [200, 100, 200],
      data: {
          dateOfArrival: Date.now(),
          primaryKey: '2'
      }
  };
  event.waitUntil(
      self.registration.showNotification(data.title, options)
  );
});