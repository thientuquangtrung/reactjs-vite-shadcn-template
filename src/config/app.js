// routes
import { PATH_DASHBOARD } from "../routes/paths";

// export const BASE_URL = "http://localhost:3051/v1/api/";
// export const BASE_URL = process.env.REACT_APP_API_URL;

// export const allLangs = [
//     {
//         label: "English",
//         value: "en",
//         systemValue: enUS,
//         icon: "/assets/icons/flags/ic_flag_en.svg",
//     },
//     {
//         label: "French",
//         value: "fr",
//         systemValue: frFR,
//         icon: "/assets/icons/flags/ic_flag_fr.svg",
//     },
//     {
//         label: "Vietnamese",
//         value: "vn",
//         systemValue: viVN,
//         icon: "/assets/icons/flags/ic_flag_vn.svg",
//     },
//     {
//         label: "Chinese",
//         value: "cn",
//         systemValue: zhCN,
//         icon: "/assets/icons/flags/ic_flag_cn.svg",
//     },
//     {
//         label: "Arabic (Sudan)",
//         value: "ar",
//         systemValue: arSD,
//         icon: "/assets/icons/flags/ic_flag_sa.svg",
//     },
// ];

// export const defaultLang = allLangs[0]; // English

// DEFAULT ROOT PATH
export const DEFAULT_PATH = PATH_DASHBOARD.general.app; // as '/app'

export const appConfig = {
    name: "Sample App",
    github: {
        title: "React Shadcn Starter",
        url: "https://github.com/thientuquangtrung/reactjs-vite-shadcn-template",
    },
    author: {
        name: "Beyond Nguyen",
        url: "https://github.com/thientuquangtrung/",
    },
};
