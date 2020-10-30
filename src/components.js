import Vue from "vue";
import WeatherWidget from "@/components/WeatherWidget";
import Location from "@/components/Location";
import Temperature from "@/components/Temperature";
import TempUnitSwitch from "@/components/TempUnitSwitch";
import Conditions from "@/components/Conditions";
import LocationForm from "@/components/LocationForm";
import WeatherDisplay from "@/components/WeatherDisplay";

Vue.component("WeatherWidget", WeatherWidget);
Vue.component("Location", Location);
Vue.component("Temperature", Temperature);
Vue.component("TempUnitSwitch", TempUnitSwitch);
Vue.component("Conditions", Conditions);
Vue.component("LocationForm", LocationForm);
Vue.component("WeatherDisplay", WeatherDisplay);
