import { pluginFactory } from "../../utils/pluigins";
import EAlert from "./alert.vue";

// Component group plugins
// import { AlertPlugin } from './alert'
// import { EButton } from "./button";

// Main plugin to install all component group plugins
const AlertPlugin = /*#__PURE__*/ pluginFactory({
  components: {
    EAlert,
  },
});

export { AlertPlugin, EAlert };
