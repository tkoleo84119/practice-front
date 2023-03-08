<script setup lang="ts">
import { UserInfo } from '@/types/types'

interface PropsEvent {
  filterData: UserInfo[]
}

const emit = defineEmits(['remove'])
const remove = (index: number) => {
  emit('remove', index)
}

defineProps<PropsEvent>()
</script>

<template>
  <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1">
    <li class="py-4 rounded-md text-center bg-red-50 relative" v-for="item, idx in filterData" :key="item.name">
      {{ item.name }}
      <span class="text-red-600 font-bold absolute top-0 right-0" @click="remove(idx)">X</span>
    </li>
  </ul>
</template>