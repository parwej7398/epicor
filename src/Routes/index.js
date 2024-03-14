import Auditonix from "../Components/Auditonix";
import Betco from "../Components/Betco";
import ContactUs from "../Components/ContactUs";
import Cybersecurity from "../Components/Cybersecurity";
import GetSupport from "../Components/GetSupport";
import GlobalSide from "../Components/GlobalSide";
import Onoff from "../Components/OnOff";
import Stephen from "../Components/Stephen";
import Tuffaloy from "../Components/Tuffaloy";
import WebinarSeries from "../Components/WebinarSeriesCriticalTechforManufacturers";
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
    path: "/",
    element: <Manufacturing />,
  },
  {
    id: 2,
    path: "/overview",
    element: <Overview />,
  },
  {
    id: 3,
    path: "/industry",
    element: <Industry />,
  },
  {
    id: 4,
    path: "/manufactring_modes",
    element: <ManufactringModes />,
  },
  {
    id: 5,
    path: "/benefits",
    element: <Benefits />,
  },
  {
    id: 6,
    path: "/feature_products",
    element: <FeatureProducts />,
  },
  {
    id: 7,
    path: "/kinetic_resources",
    element: <KineticResources />,
  },
  {
    id: 8,
    path: "/contect",
    element: <Contect />,
  },
  {
    id: 9,
    path: "/contectus",
    element: <ContactUs />,
  },
  {
    id: 10,
    path: "/getsupport",
    element: <GetSupport />,
  },
  {
    id: 11,
    path: "/globalside",
    element: <GlobalSide />,
  },
  {
    id: 12,
    path: "/cybersecurity",
    element: <Cybersecurity />,
  },
  {
    id: 13,
    path: "/webinar_ceries_critical_tech_for_manufacturers",
    element: <WebinarSeries />,
  },
  {
    id: 14,
    path: "/auditonix",
    element: <Auditonix />,
  },
  {
    id: 15,
    path: "/tuffaloy",
    element: <Tuffaloy />,
  },
  {
    id: 16,
    path: "/stephen",
    element: <Stephen />,
  },
  {
    id: 17,
    path: "/on_off",
    element: <Onoff />,
  },
  {
    id: 18,
    path: "/betco",
    element: <Betco />,
  },
];
