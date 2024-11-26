<template>
    <DataTable :value="filteredLines" v-bind="configuration" class="p-datatable-sm">
        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header">
        </Column>
    </DataTable>
</template>

<script lang="ts" setup>
import { computed } from "vue";
export interface DataTableProps {
    paginator: boolean;
    rows: number;
    resizableColumns: boolean;
    columnResizeMode: "fit" | "expand";
    scrollable: boolean;
    scrollHeight: string;
}
export interface ColumnProps {
    field: string; // The key for the line data
    header: string; // The column header text
}
const props = defineProps<{
    configuration?: Partial<DataTableProps>;
    columns: ColumnProps[];
    lines: Record<string, any>[];
}>();
const filteredLines = computed(() => {
    return props.lines.map((line) => {
        const result: Record<string, any> = {};
        for (const col of props.columns) {
            if (line[col.field] !== undefined) {
                result[col.field] = line[col.field];
            }
        }
        return result;
    });
});
</script>

<style scoped>
.p-datatable-sm {
    font-size: 0.9rem;
}
</style>