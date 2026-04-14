/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的HTMLとして出力する設定
  output: 'export',
  
  // GitHub PagesでNext.jsの画像最適化を回避するための設定
  images: {
    unoptimized: true,
  },
};

export default nextConfig;