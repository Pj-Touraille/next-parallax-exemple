import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    distDir: "build",
    sassOptions: {
        implementation: "sass",
        prependData: `@use "@/styles/variables.scss" as *; @use "@/styles/mixins.scss" as *;`,
    },
};

export default nextConfig;
