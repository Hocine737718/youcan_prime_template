<script lang="ts" setup>
import PrimeDataTable, { type DataTableProps } from '@/components/prime/PrimeDataTable.vue';
const tableConfig: Partial<DataTableProps> = {
    paginator: true,
    rows: 2,
    resizableColumns: true,
    columnResizeMode: "fit",
    scrollable: true,
    scrollHeight: "400px",
};
const columns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
];
const lines = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
];
</script>
<template>
    <div class="grid">
        <h1>This is Dashboard View.</h1>
        <div class="col-12">
            <div class="card">
                <PrimeDataTable :configuration="tableConfig" :columns="columns" :lines="lines" />
            </div>
        </div>
    </div>
</template>