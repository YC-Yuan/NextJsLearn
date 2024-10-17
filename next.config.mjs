/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://your-external-database-url/:path*', // 替换为你的外部数据库URL
            },
        ];
    },
};

export default nextConfig;
