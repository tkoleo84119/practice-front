<script setup lang="ts">
import type {
  SelectOptions,
  FilterInfo,
  Gender,
  Popularity,
  Length
} from '@/types/types'

interface PropsEvent {
  info: FilterInfo,
  selectOptions: SelectOptions
}

const props = defineProps<PropsEvent>()

const handleClick = (button: SelectOptions[keyof SelectOptions]) => {
  switch (props.info.category) {
    case 'gender':
      props.selectOptions[props.info.category] = button as Gender
      break
    case 'popularity':
      props.selectOptions[props.info.category] = button as Popularity
      break
    case 'length':
      props.selectOptions[props.info.category] = button as Length
      break
  }
}
</script>

<template>
  <div class="px-4 py-2 flex justify-between gap-4 items-center">
    <p>{{ info.title }}</p>
    <div class="">
      <button v-for="button in info.buttons" :key="button" class="p-4 border first:rounded-l-md last:rounded-r-md border-gray-200 capitalize"
        :class="{ 'bg-slate-300': selectOptions[info.category] === button }"
        @click="handleClick(button)">{{ button }}</button>
    </div>
  </div>
</template>