<script setup lang="ts">
import { ActionBar, SecondaryButton, PrimaryButton } from '@youcan/ui-vue3';
</script>

<template>
    <ActionBar>
        <SecondaryButton form="export-orders">
            Close
        </SecondaryButton>
        <PrimaryButton form="export-orders">
            <template #icon>
                💾
            </template>
            Save
        </Primarybutton>
    </ActionBar>
</template>