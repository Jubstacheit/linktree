/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: 'pbs.twimg.com'
			},
			{
				hostname: 'github.githubassets.com'
			},
			{
				hostname: 'dev-portfolio.jubstacheit-art.com'
			},
			{
				hostname: 'playbackapp.netlify.app'
			},
			{
				hostname: 'yt3.googleusercontent.com'
			},
			{
				hostname: 'jubstacheit.github.io'
			}
		]
	},
};

export default nextConfig;
