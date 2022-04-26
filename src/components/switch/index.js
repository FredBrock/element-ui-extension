import { pluginFactory } from "../../utils/pluigins";

// Component group plugins
// import { AlertPlugin } from './alert'
import { ESwitch } from "./switch.jsx";

// Main plugin to install all component group plugins
const SwitchPlugin = /*#__PURE__*/ pluginFactory({
  components: {
    ESwitch,
  },
});

export { SwitchPlugin, ESwitch };
