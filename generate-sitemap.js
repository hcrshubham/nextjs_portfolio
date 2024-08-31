// generate-sitemap.js
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Create a sitemap stream
const sitemapStream = new SitemapStream({ hostname: 'https://www.shubhamkumarsharma.com/' });

// Add URLs to the sitemap
sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemapStream.write({ url: '/#about', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/#contact', changefreq: 'monthly', priority: 0.7 });
// Add other URLs here

// End the stream
sitemapStream.end();

// Convert the stream to a promise
streamToPromise(sitemapStream).then((data) => {
  // Write the sitemap.xml file to the public directory
  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), data.toString());
  console.log('Sitemap generated!');
}).catch((err) => {
  console.error('Error generating sitemap:', err);
});
