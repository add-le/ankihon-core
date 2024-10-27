import CopyPlugin from "copy-webpack-plugin";
import path from "path";
const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(
              __dirname,
              "./node_modules/@add-le/ankihon-kohaku/dist/kohaku/kohaku.css"
            ),
            to: path.resolve(__dirname, "./public/build/"),
          },
        ],
      })
    );

    return config;
  },
};

export default nextConfig;
