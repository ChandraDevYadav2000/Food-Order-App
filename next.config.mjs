/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        // domains:['ap-south-1.graphassets.com'],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'ap-south-1.graphassets.com',
                port:'',
                pathname:'/**'
            }
        ]
    }
};

export default nextConfig;
