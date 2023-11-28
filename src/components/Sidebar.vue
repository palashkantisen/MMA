<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-indent -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSidebar } from '../composables/useSidebar'
import MdaLogo from '../assets/mdaLogo.vue'
import TableLogo from '../assets/tableLogo.vue'
import SettingsLogo from '../assets/settingsLogo.vue'

import path from 'path';

const { isOpen } = useSidebar()
const activeClass = ref(
  'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100',
)
const inactiveClass = ref(
  'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
) 

const hasEnoughVerticalSpace = computed(() => {
  // Adjust this threshold based on your layout needs
  return window.innerHeight > 400;
})

</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div :class="isOpen ? 'block' : 'hidden'" class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      @click="isOpen = false" />
    <!-- End Backdrop -->

    <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
      
      <div class="flex items-center justify-left mt-8">
        <div class="flex items-center ml-8">
          <MdaLogo />
        </div>
      </div>

      <nav class="mt-10">
        <div class="nav-links"> 
          <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Tables' ? activeClass : inactiveClass]" to="/tables">
            <TableLogo/>
            <span class="mx-4">Tables</span>
          </router-link>
        </div> 

        <div :class="{'absolute inset-x-0 bottom-4': hasEnoughVerticalSpace}" class="nav-links"> 
          <router-link class="flex items-centre px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Settings' ? activeClass : inactiveClass]" to="/settings">
            <SettingsLogo />
            <span class="mx-4">Settings</span>
          </router-link>
        </div> 
      </nav>
    </div>
  </div>
</template> 


