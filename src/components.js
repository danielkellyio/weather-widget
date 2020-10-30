import Vue from "vue";
import WeatherWidget from "@/components/WeatherWidget";
import Location from "@/components/Location";
import Temperature from "@/components/Temperature";
import TempUnitSwitch from "@/components/TempUnitSwitch";
import Conditions from "@/components/Conditions";

Vue.component("WeatherWidget", WeatherWidget);
Vue.component("Location", Location);
Vue.component("Temperature", Temperature);
Vue.component("TempUnitSwitch", TempUnitSwitch);
Vue.component("Conditions", Conditions);
