<script setup lang="ts">
import { ref } from 'vue'
import { KButton, KCopy, KDropdown, KDropdownItem, KCard } from '@kong/kongponents'
import { AddIcon, CogIcon, TrashIcon, KongIcon, ChevronDownIcon } from '@kong/icons'

const isLoading = ref(false)
const simulateLoad = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<template>
  <div class="view-container">
    <div class="header">
      <h1>Buttons & Actions</h1>
      <p class="description">Showcasing KButton variants, KCopy integration, and KDropdown popovers.</p>
    </div>

    <div class="showcase-grid">
      <!-- Button Appearances -->
      <KCard title="Button Appearances">
        <template #default>
          <div class="demo-row">
            <KButton appearance="primary">Primary</KButton>
            <KButton appearance="secondary">Secondary</KButton>
            <KButton appearance="tertiary">Tertiary</KButton>
            <KButton appearance="danger">Danger</KButton>
            <KButton appearance="none">None</KButton>
          </div>
        </template>
      </KCard>

      <!-- Button Sizes -->
      <KCard title="Button Sizes">
        <template #default>
          <div class="demo-row items-center">
            <KButton size="small" appearance="primary">Small</KButton>
            <KButton size="medium" appearance="primary">Medium (Default)</KButton>
            <KButton size="large" appearance="primary">Large</KButton>
          </div>
        </template>
      </KCard>

      <!-- Button States -->
      <KCard title="Button States (Disabled & Loading)">
        <template #default>
          <div class="demo-row">
            <KButton appearance="primary" disabled>Disabled Primary</KButton>
            <KButton appearance="secondary" disabled>Disabled Secondary</KButton>
            <KButton appearance="primary" @click="simulateLoad" :loading="isLoading">
              Click to Load
            </KButton>
            <KButton appearance="danger" loading>Always Loading</KButton>
          </div>
        </template>
      </KCard>

      <!-- Button with Icons -->
      <KCard title="Buttons with Icons">
        <template #default>
          <div class="demo-row">
            <KButton appearance="primary">
              <template #icon><AddIcon /></template>
              Add New
            </KButton>
            <KButton appearance="secondary">
              <template #icon><CogIcon /></template>
              Settings
            </KButton>
            <KButton appearance="danger" size="small">
              <template #icon><TrashIcon /></template>
              Delete
            </KButton>
            <!-- Custom slot icon -->
            <KButton appearance="tertiary">
              <template #icon>
                <KongIcon color="var(--color-primary-60)" />
              </template>
              Kong API
            </KButton>
          </div>
        </template>
      </KCard>

      <!-- KCopy -->
      <KCard title="KCopy (Copy to Clipboard)">
        <template #default>
          <div class="demo-col">
            <div class="copy-demo">
              <label>API Key (Hidden input style)</label>
              <KCopy text="sk_live_123456789abcDEF" />
            </div>
            <div class="copy-demo">
              <label>Service ID (Visible text style)</label>
              <KCopy text="srv_01F9Z8V4R2" />
            </div>
          </div>
        </template>
      </KCard>

      <!-- Dropdown Menus -->
      <KCard title="Dropdown Menus">
        <template #default>
          <div class="demo-row">
            <KDropdown>
              <!-- Dropdown triggers via slot default (no #trigger in 9.x) -->
              <KButton appearance="secondary">
                Actions <ChevronDownIcon size="16" />
              </KButton>
              <template #items>
                <KDropdownItem>Edit Service</KDropdownItem>
                <KDropdownItem>View Analytics</KDropdownItem>
                <KDropdownItem divider />
                <KDropdownItem danger>Delete Service</KDropdownItem>
              </template>
            </KDropdown>

            <KDropdown>
              <KButton appearance="primary">
                <template #icon><AddIcon /></template>
                Create
              </KButton>
              <template #items>
                <KDropdownItem>New Route</KDropdownItem>
                <KDropdownItem>New Plugin</KDropdownItem>
                <KDropdownItem>New Consumer</KDropdownItem>
              </template>
            </KDropdown>
          </div>
        </template>
      </KCard>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.description {
  color: var(--color-text-neutral);
  font-size: 16px;
  line-height: 24px;
}
.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 24px;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.items-center {
  align-items: center;
}
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.copy-demo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.copy-demo label {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
}
</style>
