<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-indent -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSidebar } from '../composables/useSidebar'
import Mda from '../assets/svg.vue'
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
          <Mda />
        </div>
      </div>

      <nav class="mt-10">
        <div :class="{'absolute inset-x-0 bottom-4': hasEnoughVerticalSpace}" class="nav-links"> 

          <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]" to="/dashboard">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                fill="currentColor" />
              <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
            </svg>

            <span class="mx-4">Dashboard</span>
          </router-link>

          <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'UIElements' ? activeClass : inactiveClass]" to="/ui-elements">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                fill="currentColor" />
              <path
                d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                fill="currentColor" />
              <path
                d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                fill="currentColor" />
              <path
                d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                fill="currentColor" />
            </svg>

            <span class="mx-4">UI Elements</span>
          </router-link>

          <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Tables' ? activeClass : inactiveClass]" to="/tables">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z"
                fill="currentColor" />
              <path
                d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z"
                fill="currentColor" />
              <path
                d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z"
                fill="currentColor" />
            </svg>

            <span class="mx-4">Tables</span>
          </router-link>

          <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Forms' ? activeClass : inactiveClass]" to="/forms">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clip-rule="evenodd" />
            </svg>

            <span class="mx-4">Forms</span>
          </router-link>

          <router-link class="flex items-centre px-6 py-2 mt-4 duration-200 border-l-4  ] "
            :class="[$route.name === 'Settings' ? activeClass : inactiveClass]" to="/settings">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 64 64">
              <path
                d="M32 43.3c-6.2 0-11.3-5.1-11.3-11.3S25.8 20.7 32 20.7 43.3 25.8 43.3 32 38.2 43.3 32 43.3zm0-20.2c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-4-8.9-8.9-8.9z">
              </path>
              <path
                d="M35.4 55.9h-6.8l-1.9-5.8c-1.3-.4-2.5-.9-3.7-1.5l-5.5 2.8-4.8-4.8 2.8-5.5c-.6-1.2-1.2-2.4-1.5-3.7l-5.8-1.9v-6.8l5.8-1.9c.4-1.3.9-2.5 1.5-3.7l-2.8-5.5 4.8-4.8 5.5 2.8c1.2-.6 2.4-1.2 3.7-1.5l1.9-5.8h6.8l1.9 5.8c1.3.4 2.5.9 3.7 1.5l5.5-2.8 4.8 4.8-2.8 5.5c.6 1.2 1.2 2.4 1.5 3.7l5.8 1.9v6.8L50 37.4c-.4 1.3-.9 2.5-1.5 3.7l2.8 5.5-4.8 4.8-5.5-2.8c-1.2.6-2.4 1.2-3.7 1.5l-1.9 5.8zm-5.1-2.3h3.4l1.8-5.4.6-.2c1.5-.4 2.9-1 4.3-1.8l.6-.3 5.1 2.6 2.4-2.4-2.6-5.1.3-.6c.8-1.3 1.4-2.8 1.8-4.3l.2-.6 5.4-1.8v-3.4l-5.4-1.8-.2-.6c-.4-1.5-1-3-1.8-4.3l-.3-.6 2.6-5.1-2.4-2.4-5.1 2.6-.6-.3c-1.3-.8-2.8-1.4-4.3-1.8l-.6-.2-1.8-5.4h-3.4l-1.8 5.4-.6.2c-1.5.4-2.9 1-4.3 1.8l-.6.3-5.1-2.6-2.4 2.4 2.6 5.1-.3.6c-.8 1.3-1.4 2.8-1.8 4.3l-.2.6-5.4 1.8v3.4l5.4 1.8.2.6c.4 1.5 1 3 1.8 4.3l.3.6-2.6 5.1 2.4 2.4 5.1-2.6.6.3c1.3.8 2.8 1.4 4.3 1.8l.6.2 1.8 5.4z">
              </path>
            </svg>

            <span class="mx-4">Settings</span>
          </router-link>
        </div>

      </nav>
    </div>
  </div>
</template> 


