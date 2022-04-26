import { Vue, mergeData } from '../../vue'
import { isBoolean } from '../../utils/inspect'
export const props = {
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  type: {
    type: String,
    default: 'md'
  },
  variant: {
    type: String,
    default: 'secondary'
  }
}

const isToggle = (props) => isBoolean(props.pressed)
const computeAttrs = (props, data) => {
  const toggle = isToggle(props)
  return {
    autocomplete: toggle ? 'off' : null
  }
}

export const EButton = Vue.extend({
  name: 'EButton',
  functional: true,
  props,
  render(h, { props, data, children }) {
    const componentData = {
      staticClass: 'btn',
      attrs: computeAttrs(props)
    }

    return h('button', mergeData(data, componentData), children)
  }
})
