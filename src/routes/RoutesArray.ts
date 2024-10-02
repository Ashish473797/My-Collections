import Collections from "../modules/Collections";
import ContactUs from "../modules/ContactUs";
import Home from "../modules/Home";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/collections",
        component: Collections
    },
    {
        path: "/contact-us",
        component: ContactUs
    }
]

export default routes;