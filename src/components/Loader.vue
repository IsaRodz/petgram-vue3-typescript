<template>
  <div class="flex flex-col items-center gap-2">
    <i class="pi pi-spinner animate-spin text-blue-500 text-3xl"></i>
    <p class="text-blue-500 text-sm">Loading...</p>
  </div>
</template>

<style lang="postcss" scoped>
.spinner {
  @apply w-10 h-10 border-4 border-solid border-blue-500 rounded-full animate-spin;
  border-top-color: transparent;
}
</style>
