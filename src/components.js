import Vue from "vue";
import WeatherWidget from "@/components/WeatherWidget";
import SettingsForm from "@/components/SettingsForm";
import WeatherDisplay from "@/components/WeatherDisplay";
import WeatherIcon from "@/components/icons/WeatherIcon";
import PlayGround from "@/components/PlayGround";
import WidgetSettings from "@/components/WidgetSettings";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationArrow,
  faWind,
  faSyncAlt,
  faThermometerThreeQuarters,
  faSnowflake,
  faCloudRain,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faLocationArrow,
  faWind,
  faSyncAlt,
  faThermometerThreeQuarters,
  faSnowflake,
  faCloudRain,
  faCog
);

Vue.component("WeatherWidget", WeatherWidget);
Vue.component("SettingsForm", SettingsForm);
Vue.component("WeatherDisplay", WeatherDisplay);
Vue.component("WeatherIcon", WeatherIcon);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("PlayGround", PlayGround);
Vue.component("WidgetSettings", WidgetSettings);
