<template>
  <div class="home">
    <j-button primary>Primary button</j-button>
    <j-button primary>Secondary button</j-button>
    <j-button primary outline>PRimary outline</j-button>
    <j-button secondary outline>Secondary outline</j-button>
  </div>
</template>

<script>

import JButton from "../components/ui/JButton";

export default {
  name: 'Home',
  components: {
    JButton
  }
}
</script>
