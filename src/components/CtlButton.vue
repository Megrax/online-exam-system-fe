<template>
  <button
    class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
    :class="{ 'btn-disabled': isdisabled }"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: ['name', 'isdisabled'],
  data() {
    return {

    }
  }
}
</script>

<style>
</style>