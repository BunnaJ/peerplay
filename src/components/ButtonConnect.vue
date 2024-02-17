<template>
  <div class="container">
  <button>{{btnText}}</button>

  </div>
</template>

<script>
export default {
    name: 'buttonConnect',
    props: ['btnText']
}
</script>

<style scoped>
.container button {
  width: 376px;
  height: 60px;
  background: var(--color4);
  color: #FFFFFF;
  font-family:second_font;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 64px;
  margin-left: 20px;
}
</style>