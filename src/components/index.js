import { pluginFactory } from "../utils/pluigins";

import { ButtonPlugin } from "./button";
import { AlertPlugin } from "./alert";
import { SwitchPlugin } from "./switch";

export const componentsPlugin = pluginFactory({
  plugins: {
    ButtonPlugin,
    AlertPlugin,
    SwitchPlugin,
  },
});
