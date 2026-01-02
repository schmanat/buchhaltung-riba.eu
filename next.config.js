/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Für statisches Hosting i.d.R. sinnvoll (verhindert 404s je nach Webserver-Setup)
  trailingSlash: true,

  // Next/Image ohne Server-Optimizer betreiben
  images: {
    unoptimized: true,
  },

  // Kleinigkeiten
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
