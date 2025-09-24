const path = require('path')

module.exports = {
  // Remove or comment out this line for better Speed Insights support
  // output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}