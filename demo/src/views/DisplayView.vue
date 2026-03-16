<script setup lang="ts">
import { ref } from 'vue'
import {
  KCard, KBadge, KAlert, KBreadcrumbs, KEmptyState,
  KSkeleton, KModal, KPrompt, KCodeBlock, KButton
} from '@kong/kongponents'
import { AddIcon } from '@kong/icons'

const isModalVisible = ref(false)
const isPromptVisible = ref(false)

const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Display', to: '/display' },
  { text: 'Detail', to: '' }
]

const sampleCode = `function sayHello() {
  console.log("Hello, Kongponents!");
}
sayHello();`
</script>

<template>
  <div class="view-container">
    <div class="header">
      <h1>Display & Layout</h1>
      <p class="description">Showcasing KCard, KBadge, KAlert, KEmptyState, KSkeleton, and Dialogs.</p>
    </div>

    <!-- Breadcrumbs -->
    <div class="mb-4">
      <KBreadcrumbs :items="breadcrumbItems" />
    </div>

    <div class="showcase-grid">
      <!-- Badges -->
      <KCard title="Badges (KBadge)">
        <template #default>
          <div class="demo-row">
            <KBadge appearance="info">Info Badge</KBadge>
            <KBadge appearance="success">Success Badge</KBadge>
            <KBadge appearance="warning">Warning Badge</KBadge>
            <KBadge appearance="danger">Danger Badge</KBadge>
            <KBadge appearance="neutral">Neutral Badge</KBadge>
            <KBadge appearance="decorative">Decorative Badge</KBadge>
          </div>
        </template>
      </KCard>

      <!-- Alerts -->
      <KCard title="Alerts (KAlert)">
        <template #default>
          <div class="demo-col">
            <KAlert appearance="info" show-icon show-close title="Information">
              This is an informational alert with title and icon.
            </KAlert>
            <KAlert appearance="success" show-icon>
              Operation successful without a title.
            </KAlert>
            <KAlert appearance="warning" show-icon>
              Warning: Approaching rate limit.
            </KAlert>
            <KAlert appearance="danger" show-icon>
              Danger: Failed to delete the resource.
            </KAlert>
            <KAlert class="special-alert" :appearance="('special' as any)" show-icon>
              Special: You have a new message!
            </KAlert>
          </div>
        </template>
      </KCard>

      <!-- Modals and Prompts -->
      <KCard title="Dialogs (KModal & KPrompt)">
        <template #default>
          <div class="demo-row">
            <KButton @click="isModalVisible = true" appearance="primary">Open Modal</KButton>
            <KButton @click="isPromptVisible = true" appearance="danger">Open Prompt</KButton>
          </div>

          <KModal :visible="isModalVisible" title="Feature Configuration" @cancel="isModalVisible = false">
            <template #body-content>
              <p>This is the content of the KModal. You can embed forms or complex layouts here.</p>
            </template>
            <template #footer-actions>
              <KButton appearance="secondary" @click="isModalVisible = false">Cancel</KButton>
              <KButton appearance="primary" @click="isModalVisible = false">Save</KButton>
            </template>
          </KModal>

          <KPrompt 
            :visible="isPromptVisible"
            title="Confirm Deletion"
            message="Are you sure you want to delete this item? This action cannot be undone."
            confirm-text="Delete"
            appearance="danger"
            @proceed="isPromptVisible = false"
            @cancel="isPromptVisible = false"
          />
        </template>
      </KCard>

      <!-- Skeletons -->
      <KCard title="Loading Skeletons (KSkeleton)">
        <template #default>
          <div class="demo-col">
            <p class="text-neutral">Card Skeleton</p>
            <KSkeleton type="card" />
            <p class="text-neutral mt-4">Form Skeleton</p>
            <KSkeleton type="form" />
          </div>
        </template>
      </KCard>

      <!-- Code Block -->
      <KCard title="Code Block (KCodeBlock)">
        <template #default>
          <KCodeBlock id="sample-code" :code="sampleCode" language="javascript" />
        </template>
      </KCard>

      <!-- Empty State -->
      <KCard title="Empty State (KEmptyState)">
        <template #default>
          <KEmptyState 
            title="No Services Found" 
            message="Get started by creating your first service to proxy API traffic."
            icon-variant="kong"
            cta-text="Create Service"
          >
            <template #action>
              <KButton appearance="primary">
                <template #icon><AddIcon /></template>
                Create Service
              </KButton>
            </template>
          </KEmptyState>
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
.mb-4 {
  margin-bottom: 16px;
}
.mt-4 {
  margin-top: 16px;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.text-neutral {
  color: var(--color-text-neutral);
  font-size: 14px;
  font-weight: 500;
  margin: 0;
}
</style>
