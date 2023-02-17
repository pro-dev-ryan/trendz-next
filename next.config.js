/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          weight: ["300", "600"],
          subsets: ["cyrillic"],
          variable: ["--font-raleway"],
        },
      },
    ],
  },
};

module.exports = nextConfig;
