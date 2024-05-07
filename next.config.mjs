/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", port: "" },
      { protocol: "https", hostname: "dummyimage.com", port: "" },
    ],
  },
};

export default nextConfig;
