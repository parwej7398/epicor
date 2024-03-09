import ContactUs from "../Components/ContactUs";
import GetSupport from "../Components/GetSupport";
import GlobalSide from "../Components/GlobalSide";
import Benefits from "../Pages/Benefits";
import Contect from "../Pages/Contect";
import FeatureProducts from "../Pages/Featured Products";
import Industry from "../Pages/Industry";
import KineticResources from "../Pages/Kinetic Resources";
import Manufacturing from "../Pages/Manufacturing";
import ManufactringModes from "../Pages/ManufacturingModes";
import Overview from "../Pages/OverView";


export const routes = [
    {
        id: 1,
        path: '/',
        element: <Manufacturing />
    },
    {
        id: 1,
        path: '/overview',
        element: <Overview />
    },
    {
        id: 1,
        path: '/industry',
        element: <Industry />
    },
    {
        id: 1,
        path: '/manufactring_modes',
        element: <ManufactringModes />
    },
    {
        id: 1,
        path: '/benefits',
        element: <Benefits />
    },
    {
        id: 1,
        path: '/feature_products',
        element: <FeatureProducts />
    },
    {
        id: 1,
        path: '/kinetic_resources',
        element: <KineticResources />
    },
    {
        id: 1,
        path: '/contect',
        element: <Contect />
    },
    {
        id: 1,
        path: '/contectus',
        element: <ContactUs />
    },
    {
        id: 1,
        path: '/getsupport',
        element: <GetSupport />
    },
    {
        id: 1,
        path: '/globalside',
        element: <GlobalSide />
    },

]