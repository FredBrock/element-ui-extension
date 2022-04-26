<template>
  <div class="alert">
    <el-button>h1</el-button>
  </div>
</template>

<script>
import { Button as ElButton } from "element-ui";
export default {
  name: "EAlert",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ElButton,
  },
};
</script>

<style lang="scss" scoped>
.alert {
  border: 1px solid red;
  padding: 10px;
}
</style>
