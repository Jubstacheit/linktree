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
			}
		]
	},
};

export default nextConfig;
