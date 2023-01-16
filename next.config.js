/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "marketplace.canva.com",
      "upload.wikimedia.org",
      "platform-lookaside.fbsbx.com",
    ],
  },
};
