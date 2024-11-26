<template>
    <Dialog v-model:visible="isVisible" :header="modalHeader" :closable="false">
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" @click="closeModal" class="p-button-text" />
            <Button label="Submit" icon="pi pi-check" @click="handleSubmit" />
        </template>
        <div>
            <slot></slot> <!-- Content of the modal will go here -->
        </div>
    </Dialog>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";
import Dialog from "primevue/dialog";
import { useToast } from "primevue/usetoast";
const toast = useToast();

// Props and emits
const emit = defineEmits<{
    (event: "action-completed", result: any): void;
}>();

// Modal visibility state
const isVisible = ref(false);

// Modal header (can be dynamic)
const modalHeader = ref("Action Required");

// Method to open the modal
const openModal = (header: string = "Action Required") => {
    modalHeader.value = header;
    isVisible.value = true;
};

defineExpose({
    openModal
});

// Method to close the modal
const closeModal = () => {
    isVisible.value = false;
};

// Method to perform the action (submit)
const handleSubmit = () => {
    // Perform the action here (for example, form submission or API call)
    const result = { success: true, message: "Action completed successfully!" };

    // Emit the result to the parent component
    emit("action-completed", result);

    // Show a toast notification
    toast.add({ severity: "success", summary: "Success", detail: result.message });

    // Close the modal
    closeModal();
};


</script>