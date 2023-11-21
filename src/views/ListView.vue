<script setup lang="ts">
import TablePaginationSearch from '../components/TablePaginationSearch.vue'
import Table from '../components/Table.vue'
</script>

<template>
  <div>
    <div class="mt-8">
      <h2 class="text-xl font-semibold leading-tight text-gray-700">
        Subheading if required
      </h2>
    </div>

    <div class="mt-8">
      <TablePaginationSearch>
        <Table></Table>
      </TablePaginationSearch>
    </div>
  </div>
</template>
