<script setup lang="ts">
import names from '@/data/name'
const selectOptions = reactive({
  gender: 'boy',
  popularity: 'trendy',
  length: 'all'
})

const filterData = ref()
const submit = () => {
  if (selectOptions.length === 'all') {
    filterData.value = names.filter(n => n.gender === selectOptions.gender && n.popularity === selectOptions.popularity)
  } else {
    filterData.value = names.filter(n => n.gender === selectOptions.gender && n.popularity === selectOptions.popularity && n.length === selectOptions.length)
  }
}
</script>

<template>
  <div class="">
    <div class="my-8 mx-auto w-1/4">
      <h1 class="text-lg text-center">請選擇英文名字</h1>
      <div class="px-4 py-2 flex justify-between gap-4 items-center">
        <p>性別</p>
        <div class="">
          <button class="p-4 border rounded-l-md border-gray-200"
            :class="{ 'bg-slate-300': selectOptions.gender === 'boy' }" @click="selectOptions.gender = 'boy'">BOY</button>
          <button class="p-4 border-t border-b border-gray-200"
            :class="{ 'bg-slate-300': selectOptions.gender === 'girl' }"
            @click="selectOptions.gender = 'girl'">GIRL</button>
          <button class="p-4 border rounded-r-md border-gray-200"
            :class="{ 'bg-slate-300': selectOptions.gender === 'unisex' }"
            @click="selectOptions.gender = 'unisex'">UNISEX</button>
        </div>
      </div>
      <div class="px-4 py-2 flex justify-between gap-4 items-center">
        <p>風格</p>
        <div class="">
          <button class="p-4 border rounded-l-md border-gray-200"
            :class="{ 'bg-slate-300': selectOptions.popularity === 'trendy' }"
            @click="selectOptions.popularity = 'trendy'">Trendy</button>
          <button class="p-4 border rounded-r-md border-gray-200"
            :class="{ 'bg-slate-300': selectOptions.popularity === 'unique' }"
            @click="selectOptions.popularity = 'unique'">Unique</button>
        </div>
      </div>
      <div class="px-4 py-2 flex justify-between gap-4 items-center">
        <p>名字長度</p>
        <div class="">
          <button class="p-4 border rounded-l-md border-gray-200"
            :class="{ 'bg-slate-300': selectOptions.length === 'short' }"
            @click="selectOptions.length = 'short'">Short</button>
          <button class="p-4 border-t border-b border-gray-200"
            :class="{ 'bg-slate-300': selectOptions.length === 'long' }"
            @click="selectOptions.length = 'long'">Long</button>
          <button class="p-4 border rounded-r-md border-gray-200"
            :class="{ 'bg-slate-300': selectOptions.length === 'all' }" @click="selectOptions.length = 'all'">All</button>
        </div>
      </div>
      <div class="flex justify-center py-2">
        <button class="p-4 w-11/12 bg-red-300 rounded-lg" @click="submit">SUBMIT</button>
      </div>

      <div class="px-4 py-2">
        <ul class="grid grid-cols-5 gap-1">
          <li class="py-4 rounded-md text-center bg-red-50" v-for="item in filterData" key="item.name">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
