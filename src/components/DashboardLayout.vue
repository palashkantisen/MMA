<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import FixedTableTop from '../components/FixedTableTop.vue'
import FixedTableFoot from '../components/FixedTableFoot.vue' 

</script>

<template>
  
    <div class="flex h-screen bg-gray-400 font-roboto">
      <Sidebar />

      <div class="flex-1 flex flex-col overflow-hidden">
        <Header pageTitle="MMAMDA" />
        <HeadFixedTableTop /> 
        
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="container mx-auto px-6 py-8">
            <slot />
          </div>
        </main>
      </div>
    </div>
  
</template>
