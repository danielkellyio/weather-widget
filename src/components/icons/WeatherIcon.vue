<template>
  <component :is="icon" />
</template>
<script>
import SunnyIcon from "@/components/icons/SunnyIcon";
import CloudyIcon from "@/components/icons/CloudyIcon";
import RainyIcon from "@/components/icons/RainyIcon";
import ThunderstormIcon from "@/components/icons/ThunderstormIcon";
import FlurriesIcon from "@/components/icons/FlurriesIcon";
import SunShowerIcon from "@/components/icons/SunShowerIcon";
export default {
  props: {
    iconCode: { type: String, required: true }
  },
  data() {
    return {
      icons: {
        "01d": SunnyIcon,
        "01n": SunnyIcon,
        "02d": CloudyIcon,
        "02n": CloudyIcon,
        "03d": CloudyIcon,
        "03n": CloudyIcon,
        "04d": CloudyIcon,
        "04n": CloudyIcon,
        "09d": RainyIcon,
        "09n": RainyIcon,
        "10d": SunShowerIcon,
        "10n": SunShowerIcon,
        "11d": ThunderstormIcon,
        "11n": ThunderstormIcon,
        "13d": FlurriesIcon,
        "13n": FlurriesIcon,
        "50d": CloudyIcon,
        "50n": CloudyIcon
      }
    };
  },
  computed: {
    icon() {
      return this.icons[this.iconCode] || null;
    }
  }
};
</script>
