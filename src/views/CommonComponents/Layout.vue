<template>
  <div id="layout">
    this is layout.
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  date () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
