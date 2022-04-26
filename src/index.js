import { installFactory } from "./utils/pluigins";
import { componentsPlugin } from "./components/index";

import EIcon from "./components/EIcon.vue";

const NAME = "ElementUiExtraComponents";

const install = installFactory({
  plugins: componentsPlugin,
});

const ElementUiExtraComponents = /*#__PURE__*/ {
  install,
  NAME,
};

export { install };

export default ElementUiExtraComponents;
