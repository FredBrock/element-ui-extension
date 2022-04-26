import { pluginFactory } from '../../utils/pluigins'

// Component group plugins
// import { AlertPlugin } from './alert'
import { EButton } from './button'

// Main plugin to install all component group plugins
const ButtonPlugin = /*#__PURE__*/ pluginFactory({
  components: {
    EButton
  }
})

export { ButtonPlugin, EButton }
