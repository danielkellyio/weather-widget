import Vue from "vue";
import WeatherWidget from "@/components/WeatherWidget";
import Temperature from "@/components/Temperature";
import TempUnitSwitch from "@/components/TempUnitSwitch";
import LocationForm from "@/components/LocationForm";
import WeatherDisplay from "@/components/WeatherDisplay";
import WeatherIcon from "@/components/icons/WeatherIcon";
import PlayGround from "@/components/PlayGround";
import ReloadTrigger from "@/components/ReloadTrigger";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationArrow,
  faWind,
  faSyncAlt,
  faThermometerThreeQuarters,
  faSnowflake,
  faCloudRain
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faLocationArrow,
  faWind,
  faSyncAlt,
  faThermometerThreeQuarters,
  faSnowflake,
  faCloudRain
);

Vue.component("WeatherWidget", WeatherWidget);
Vue.component("Temperature", Temperature);
Vue.component("TempUnitSwitch", TempUnitSwitch);
Vue.component("LocationForm", LocationForm);
Vue.component("WeatherDisplay", WeatherDisplay);
Vue.component("WeatherIcon", WeatherIcon);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("PlayGround", PlayGround);
Vue.component("ReloadTrigger", ReloadTrigger);
