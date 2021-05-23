<template>
  <div
    class="flex flex-col flex-nowrap items-center justify-around w-48 h-42 pt-4 pb-4 pl-3 pr-3 border shadow-md"
  >
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>