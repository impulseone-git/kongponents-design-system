<script setup lang="ts">
import { ref } from 'vue'
import {
  KCard, KInput, KCheckbox, KRadio,
  KSelect, KMultiselect, KFileUpload, KLabel, KDateTimePicker
} from '@kong/kongponents'

const textValue = ref('')
const errorTextValue = ref('Invalid')
const textAreaValue = ref('')
const checkedItems1 = ref(false)
const checkedItems2 = ref(false)
const checkedItems3 = ref(false)
const radioValue = ref('option1')

const selectItems = ref([
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' }
])
const selectedValue = ref('')

const multiSelectItems = ref([
  { label: 'Analytics', value: 'analytics' },
  { label: 'Monitoring', value: 'monitoring' },
  { label: 'Security', value: 'security' },
  { label: 'Logging', value: 'logging' }
])
const multiSelected = ref([])

const dateTime = ref({ start: new Date(), end: new Date() })

const handleUpload = (files: FileList) => {
  console.log('Uploaded:', files)
}
</script>

<template>
  <div class="view-container">
    <div class="header">
      <h1>Form Inputs</h1>
      <p class="description">Comprehensive showcase of text inputs, selectors, toggles, and advanced form controls.</p>
    </div>

    <div class="showcase-grid">
      <!-- Text Inputs -->
      <KCard title="Text Inputs (KInput & KTextarea)">
        <template #default>
          <div class="form-group">
            <div class="input-wrapper">
              <KLabel info="Required field">Name</KLabel>
              <KInput v-model="textValue" placeholder="Enter your name..." />
            </div>

            <div class="input-wrapper row-layout">
               <div class="input-wrapper-half">
                <KLabel>Small Input</KLabel>
                <KInput size="small" placeholder="Small size..." />
               </div>
               <div class="input-wrapper-half">
                <KLabel>Large Input</KLabel>
                <KInput size="large" placeholder="Large size..." />
               </div>
            </div>

            <div class="input-wrapper">
              <KLabel>Error State</KLabel>
              <KInput v-model="errorTextValue" has-error error-message="This field is invalid." />
            </div>

            <div class="input-wrapper">
              <KLabel>Description (Standard Textarea)</KLabel>
              <textarea v-model="textAreaValue" placeholder="Standard textarea..." rows="3" class="native-textarea"></textarea>
            </div>
          </div>
        </template>
      </KCard>

      <!-- Selection Controls -->
      <KCard title="Checkboxes & Radios">
        <template #default>
          <div class="form-group">
            <div class="input-wrapper">
              <KLabel>Roles (KCheckbox)</KLabel>
              <div class="control-group">
                <KCheckbox v-model="checkedItems1">Admin</KCheckbox>
                <KCheckbox v-model="checkedItems2">Editor</KCheckbox>
                <KCheckbox v-model="checkedItems3" disabled>Viewer (Disabled)</KCheckbox>
              </div>
            </div>

            <div class="input-wrapper mt-4">
              <KLabel>Environment (KRadio)</KLabel>
              <div class="control-group">
                <KRadio v-model="radioValue" selected-value="option1">Development</KRadio>
                <KRadio v-model="radioValue" selected-value="option2">Staging</KRadio>
                <KRadio v-model="radioValue" selected-value="option3">Production</KRadio>
              </div>
            </div>
          </div>
        </template>
      </KCard>

      <!-- Dropdown Selects -->
      <KCard title="Selects (KSelect & KMultiselect)">
        <template #default>
          <div class="form-group">
            <div class="input-wrapper select-wrapper">
              <KLabel required>Primary Region (KSelect)</KLabel>
              <KSelect 
                v-model="selectedValue" 
                :items="selectItems" 
                placeholder="Choose a region..."
                width="100%"
                :kpop-attributes="({ target: '.main-content' } as any)"
              />
            </div>

            <div class="input-wrapper mt-4">
              <KLabel>Plugins (KMultiselect)</KLabel>
              <KMultiselect
                v-model="multiSelected"
                :items="multiSelectItems"
                placeholder="Select plugins..."
                width="100%"
                :kpop-attributes="({ target: '.main-content' } as any)"
              />
            </div>
          </div>
        </template>
      </KCard>

      <!-- Advanced Form Controls -->
      <KCard title="Advanced Controls">
        <template #default>
          <div class="form-group">
            <div class="input-wrapper">
              <KLabel>Date & Time (KDateTimePicker)</KLabel>
              <KDateTimePicker v-model="dateTime" mode="dateTime" />
            </div>

            <div class="input-wrapper mt-4">
              <KLabel>Certificate (KFileUpload)</KLabel>
              <KFileUpload 
                @file-added="handleUpload"
                :accept="['.pem', '.crt']"
                :max-file-size="2 * 1024 * 1024"
              />
            </div>
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
.form-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.row-layout {
  flex-direction: row;
  gap: 16px;
}
.input-wrapper-half {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}
.control-group {
  display: flex;
  gap: 16px;
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
/* Ensure KSelect has proper width. KMultiselect naturally supports "width" prop */
.select-wrapper :deep(.k-select-popover) {
   width: 100%;
}
.select-wrapper :deep(.k-select-input) {
   width: 100%;
}
</style>
