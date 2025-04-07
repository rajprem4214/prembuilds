import { ConfigProps } from "../types/config";

export const config = {
  appName: "Hi I'm Prem",
  appDesignation: "Software Developer",
  appDescription: `Hi, I'm Prem Raj. I lob to build`,

  domainName: "prembuilds.vercel.app",

  colors: {
    theme: "dark",
    main: "#000000",
  },

  social: {
    github: "https://github.com/rajprem4214",
    linkedin: "https://www.linkedin.com/in/rajprem4214/",
    email: "rajprem4214@gmail.com",
    phone: "+91-77819135XX",
    youtube: "https://www.youtube.com/@premcodes",
    twitter: "https://x.com/premcodes",
  },
  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;