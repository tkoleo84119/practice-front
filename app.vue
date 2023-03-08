<script setup lang="ts">
import type {
  UserInfo,
  SelectOptions,
  FilterInfo
} from '@/types/types'

import names from '@/data/name'

const selectOptions = reactive<SelectOptions>({
  gender: 'boy',
  popularity: 'trendy',
  length: 'all'
})

const filterData = ref<UserInfo[]>()

const removeFilter = (index: number) => {
  filterData.value = filterData.value?.filter((_, i) => i !== index)
}

const submit = () => {
  if (selectOptions.length === 'all') {
    filterData.value = names.filter(n => n.gender === selectOptions.gender && n.popularity === selectOptions.popularity)
  } else {
    filterData.value = names.filter(n => n.gender === selectOptions.gender && n.popularity === selectOptions.popularity && n.length === selectOptions.length)
  }
}

const filterInfo: FilterInfo[] = [
  { title: '性別', category: 'gender', buttons: ['boy', 'girl', 'unisex'] },
  { title: '風格', category: 'popularity', buttons: ['trendy', 'unique'] },
  { title: '名字長度', category: 'length', buttons: ['short', 'long', 'all'] }
]
</script>

<template>
    <div class="my-8 mx-auto w-full sm:w-1/2 lg:w-1/3">
      <h1 class="text-lg text-center">請選擇英文名字</h1>
      <filterInfos v-for="info in filterInfo" :key="info.title" :info="info" :select-options="selectOptions" />
      <div class="flex justify-center py-2">
        <button class="p-4 w-11/ sm:w-3/4 lg:w-1/2 bg-red-300 rounded-lg" @click="submit">SUBMIT</button>
      </div>

      <div class="px-4 py-2">
        <card v-if="filterData" :filter-data="filterData" @remove="removeFilter" />
      </div>
    </div>
</template>

<style scoped></style>
