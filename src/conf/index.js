const conf = {
    coingeckourl: String(import.meta.env.VITE_COINGECKO_URL),
    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appUrl: String(import.meta.env.VITE_APP_URL),
    instagramURl : String(import.meta.VITE_INSTAGRAM_URL),
    twitterUrl : String(import.meta.VITE_TWITTER_URL),
    lindinURl : String(import.meta.VITE_LINKDIN_URL),
};

export default conf;
