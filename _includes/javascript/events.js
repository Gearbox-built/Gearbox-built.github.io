// Bad
$(this).trigger('listingUpdated', listing.id);

// ...

$(this).on('listingUpdated', function(e, listingId) {
  // do something with listingId
});

// Good
$(this).trigger('listingUpdated', { listingId : listing.id });

// ...

$(this).on('listingUpdated', function(e, data) {
  // do something with data.listingId
});