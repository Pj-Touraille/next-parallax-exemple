import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    distDir: "build",
    sassOptions: {
        implementation: "sass",
        prependData: `@import "@/styles/variables.scss";`,
    },
};

export default nextConfig;
