<script setup lang="ts">
import { ref } from 'vue'
import { KInput, KLabel, KSelect, KTextArea } from '@kong/kongponents'
import { AwsIcon, AzureIcon, GoogleCloudIcon, ChevronDownIcon, ChevronRightIcon } from '@kong/icons'

// Shared provider state (both card variants share it to show live interaction)
const selectedProvider = ref<'aws' | 'azure' | 'gcloud'>('aws')
const selectedRegion = ref('')
const selectedNetwork = ref('')

// Basic form state
const gatewayName = ref('')
const gatewayDescription = ref('')
const showLabels = ref(false)
const labelKey = ref('')
const labelValue = ref('')

// Only Fields state
const serviceHost = ref('')
const servicePath = ref('/')
const selectedProtocol = ref('')

const regionOptions = [
  { label: 'US East (N. Virginia)', value: 'us-east-1' },
  { label: 'US West (Oregon)', value: 'us-west-2' },
  { label: 'EU West (Ireland)', value: 'eu-west-1' },
  { label: 'AP Southeast (Singapore)', value: 'ap-southeast-1' },
]

const networkOptions = [
  { label: 'default-vpc', value: 'default-vpc' },
  { label: 'prod-vpc', value: 'prod-vpc' },
  { label: 'staging-vpc', value: 'staging-vpc' },
]

const protocolOptions = [
  { label: 'HTTP', value: 'http' },
  { label: 'HTTPS', value: 'https' },
  { label: 'GRPC', value: 'grpc' },
  { label: 'TCP', value: 'tcp' },
]
</script>

<template>
  <div class="view-container">
    <div class="header">
      <h1>Form Layouts</h1>
      <p class="description">
        Standard step-based form patterns used across Konnect configuration flows.
        Three layout types, each available with or without a step number badge.
      </p>
    </div>

    <!-- ─── TYPE 1: Cards + Fields ─────────────────────────────────────────── -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Type 1 — Cards + Fields</h2>
        <p class="section-desc">
          Used when the primary decision is a visual card selector (e.g. cloud provider),
          followed by dependent form fields below. Cards use an inline radio selection pattern.
        </p>
      </div>

      <div class="variants-grid">
        <!-- With step -->
        <div class="variant-block">
          <div class="variant-tag">With step number</div>
          <div class="form-step">
            <div class="form-step-header">
              <div class="step-badge">1</div>
              <div class="form-step-text">
                <h3>Cloud Provider</h3>
                <p>Choose the cloud provider where this control plane will be hosted.</p>
              </div>
            </div>
            <div class="form-step-content indented">
              <div class="field-group">
                <KLabel required>Provider</KLabel>
                <div class="provider-cards">
                  <button
                    class="provider-card"
                    :class="{ selected: selectedProvider === 'aws' }"
                    @click="selectedProvider = 'aws'"
                  >
                    <div class="card-radio" :class="{ checked: selectedProvider === 'aws' }">
                      <div v-if="selectedProvider === 'aws'" class="radio-dot" />
                    </div>
                    <AwsIcon size="32" />
                    <span class="card-label" :class="{ 'is-selected': selectedProvider === 'aws' }">AWS</span>
                  </button>
                  <button
                    class="provider-card"
                    :class="{ selected: selectedProvider === 'azure' }"
                    @click="selectedProvider = 'azure'"
                  >
                    <div class="card-radio" :class="{ checked: selectedProvider === 'azure' }">
                      <div v-if="selectedProvider === 'azure'" class="radio-dot" />
                    </div>
                    <AzureIcon size="32" />
                    <span class="card-label" :class="{ 'is-selected': selectedProvider === 'azure' }">Azure</span>
                  </button>
                  <button
                    class="provider-card"
                    :class="{ selected: selectedProvider === 'gcloud' }"
                    @click="selectedProvider = 'gcloud'"
                  >
                    <div class="card-radio" :class="{ checked: selectedProvider === 'gcloud' }">
                      <div v-if="selectedProvider === 'gcloud'" class="radio-dot" />
                    </div>
                    <GoogleCloudIcon size="32" />
                    <span class="card-label" :class="{ 'is-selected': selectedProvider === 'gcloud' }">Google Cloud</span>
                  </button>
                </div>
              </div>
              <div class="two-col">
                <div class="field-group">
                  <KLabel required>Region</KLabel>
                  <KSelect
                    v-model="selectedRegion"
                    :items="regionOptions"
                    placeholder="Select a region"
                    width="100%"
                    :kpop-attributes="({ target: '.main-content' } as any)"
                  />
                </div>
                <div class="field-group">
                  <KLabel required>Network</KLabel>
                  <KSelect
                    v-model="selectedNetwork"
                    :items="networkOptions"
                    placeholder="Select a network"
                    width="100%"
                    :kpop-attributes="({ target: '.main-content' } as any)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Without step -->
        <div class="variant-block">
          <div class="variant-tag">Without step number</div>
          <div class="form-step">
            <div class="form-step-header">
              <div class="form-step-text">
                <h3>Cloud Provider</h3>
                <p>Choose the cloud provider where this control plane will be hosted.</p>
              </div>
            </div>
            <div class="form-step-content">
              <div class="field-group">
                <KLabel required>Provider</KLabel>
                <div class="provider-cards">
                  <button
                    class="provider-card"
                    :class="{ selected: selectedProvider === 'aws' }"
                    @click="selectedProvider = 'aws'"
                  >
                    <div class="card-radio" :class="{ checked: selectedProvider === 'aws' }">
                      <div v-if="selectedProvider === 'aws'" class="radio-dot" />
                    </div>
                    <AwsIcon size="32" />
                    <span class="card-label" :class="{ 'is-selected': selectedProvider === 'aws' }">AWS</span>
                  </button>
                  <button
                    class="provider-card"
                    :class="{ selected: selectedProvider === 'azure' }"
                    @click="selectedProvider = 'azure'"
                  >
                    <div class="card-radio" :class="{ checked: selectedProvider === 'azure' }">
                      <div v-if="selectedProvider === 'azure'" class="radio-dot" />
                    </div>
                    <AzureIcon size="32" />
                    <span class="card-label" :class="{ 'is-selected': selectedProvider === 'azure' }">Azure</span>
                  </button>
                  <button
                    class="provider-card"
                    :class="{ selected: selectedProvider === 'gcloud' }"
                    @click="selectedProvider = 'gcloud'"
                  >
                    <div class="card-radio" :class="{ checked: selectedProvider === 'gcloud' }">
                      <div v-if="selectedProvider === 'gcloud'" class="radio-dot" />
                    </div>
                    <GoogleCloudIcon size="32" />
                    <span class="card-label" :class="{ 'is-selected': selectedProvider === 'gcloud' }">Google Cloud</span>
                  </button>
                </div>
              </div>
              <div class="two-col">
                <div class="field-group">
                  <KLabel required>Region</KLabel>
                  <KSelect
                    v-model="selectedRegion"
                    :items="regionOptions"
                    placeholder="Select a region"
                    width="100%"
                    :kpop-attributes="({ target: '.main-content' } as any)"
                  />
                </div>
                <div class="field-group">
                  <KLabel required>Network</KLabel>
                  <KSelect
                    v-model="selectedNetwork"
                    :items="networkOptions"
                    placeholder="Select a network"
                    width="100%"
                    :kpop-attributes="({ target: '.main-content' } as any)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── TYPE 2: Basic ──────────────────────────────────────────────────── -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Type 2 — Basic</h2>
        <p class="section-desc">
          Standard stacked full-width fields — the most common form step layout.
          Supports an optional expandable disclosure section for advanced settings.
        </p>
      </div>

      <div class="variants-grid">
        <!-- With step -->
        <div class="variant-block">
          <div class="variant-tag">With step number</div>
          <div class="form-step">
            <div class="form-step-header">
              <div class="step-badge">2</div>
              <div class="form-step-text">
                <h3>Gateway Configuration</h3>
                <p>Define the name and description for your new API gateway.</p>
              </div>
            </div>
            <div class="form-step-content indented">
              <div class="field-group">
                <KLabel required>Name</KLabel>
                <KInput v-model="gatewayName" placeholder="Enter a unique name" />
              </div>
              <div class="field-group">
                <KLabel>Description</KLabel>
                <KTextArea
                  v-model="gatewayDescription"
                  placeholder="Describe the purpose of your new gateway"
                  :rows="3"
                />
              </div>
              <button class="disclosure-toggle" @click="showLabels = !showLabels">
                <component
                  :is="showLabels ? ChevronDownIcon : ChevronRightIcon"
                  size="16"
                  color="var(--color-text-neutral)"
                />
                <span>{{ showLabels ? 'Hide labels' : 'Show labels' }}</span>
              </button>
              <div v-if="showLabels" class="two-col">
                <div class="field-group">
                  <KLabel>Key</KLabel>
                  <KInput v-model="labelKey" placeholder="e.g. environment" />
                </div>
                <div class="field-group">
                  <KLabel>Value</KLabel>
                  <KInput v-model="labelValue" placeholder="e.g. production" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Without step -->
        <div class="variant-block">
          <div class="variant-tag">Without step number</div>
          <div class="form-step">
            <div class="form-step-header">
              <div class="form-step-text">
                <h3>Gateway Configuration</h3>
                <p>Define the name and description for your new API gateway.</p>
              </div>
            </div>
            <div class="form-step-content">
              <div class="field-group">
                <KLabel required>Name</KLabel>
                <KInput v-model="gatewayName" placeholder="Enter a unique name" />
              </div>
              <div class="field-group">
                <KLabel>Description</KLabel>
                <KTextArea
                  v-model="gatewayDescription"
                  placeholder="Describe the purpose of your new gateway"
                  :rows="3"
                />
              </div>
              <button class="disclosure-toggle" @click="showLabels = !showLabels">
                <component
                  :is="showLabels ? ChevronDownIcon : ChevronRightIcon"
                  size="16"
                  color="var(--color-text-neutral)"
                />
                <span>{{ showLabels ? 'Hide labels' : 'Show labels' }}</span>
              </button>
              <div v-if="showLabels" class="two-col">
                <div class="field-group">
                  <KLabel>Key</KLabel>
                  <KInput v-model="labelKey" placeholder="e.g. environment" />
                </div>
                <div class="field-group">
                  <KLabel>Value</KLabel>
                  <KInput v-model="labelValue" placeholder="e.g. production" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── TYPE 3: Only Fields ────────────────────────────────────────────── -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Type 3 — Only Fields</h2>
        <p class="section-desc">
          Minimal field-only layout with no card selection. Used for straightforward
          configuration steps mixing KInput and KSelect freely.
        </p>
      </div>

      <div class="variants-grid">
        <!-- With step -->
        <div class="variant-block">
          <div class="variant-tag">With step number</div>
          <div class="form-step">
            <div class="form-step-header">
              <div class="step-badge">3</div>
              <div class="form-step-text">
                <h3>Service Details</h3>
                <p>Configure the upstream host and connection settings.</p>
              </div>
            </div>
            <div class="form-step-content indented">
              <div class="field-group">
                <KLabel required>Host</KLabel>
                <KInput v-model="serviceHost" placeholder="e.g. api.example.com" />
              </div>
              <div class="field-group">
                <KLabel>Path</KLabel>
                <KInput v-model="servicePath" placeholder="/" />
              </div>
              <div class="field-group">
                <KLabel required>Protocol</KLabel>
                <KSelect
                  v-model="selectedProtocol"
                  :items="protocolOptions"
                  placeholder="Select a protocol"
                  width="100%"
                  :kpop-attributes="({ target: '.main-content' } as any)"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Without step -->
        <div class="variant-block">
          <div class="variant-tag">Without step number</div>
          <div class="form-step">
            <div class="form-step-header">
              <div class="form-step-text">
                <h3>Service Details</h3>
                <p>Configure the upstream host and connection settings.</p>
              </div>
            </div>
            <div class="form-step-content">
              <div class="field-group">
                <KLabel required>Host</KLabel>
                <KInput v-model="serviceHost" placeholder="e.g. api.example.com" />
              </div>
              <div class="field-group">
                <KLabel>Path</KLabel>
                <KInput v-model="servicePath" placeholder="/" />
              </div>
              <div class="field-group">
                <KLabel required>Protocol</KLabel>
                <KSelect
                  v-model="selectedProtocol"
                  :items="protocolOptions"
                  placeholder="Select a protocol"
                  width="100%"
                  :kpop-attributes="({ target: '.main-content' } as any)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Page structure ────────────────────────────────────────────────────────── */
.view-container {
  display: flex;
  flex-direction: column;
  gap: 48px;
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

/* ── Section ───────────────────────────────────────────────────────────────── */
.layout-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border);
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.section-desc {
  color: var(--color-text-neutral);
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}

/* ── Variants grid ─────────────────────────────────────────────────────────── */
.variants-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.variant-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.variant-tag {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-neutral);
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

/* ── Form Step ─────────────────────────────────────────────────────────────── */
.form-step {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-step-header {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.step-badge {
  width: 32px;
  height: 32px;
  border-radius: 100px;
  border: 1px solid #afb7c5;
  background: var(--color-background, white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text);
  flex-shrink: 0;
}

.form-step-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 4px;
  flex: 1;
}

.form-step-text h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.32px;
  line-height: 24px;
}

.form-step-text p {
  font-size: 14px;
  color: var(--color-text-neutral-stronger, #3a3f51);
  margin: 0;
  line-height: 20px;
}

/* ── Content container ─────────────────────────────────────────────────────── */
.form-step-content {
  background: var(--color-background-neutral-weakest, #f9fafb);
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 6px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-step-content.indented {
  margin-left: 40px; /* 32px badge + 8px gap */
}

/* ── Field group ───────────────────────────────────────────────────────────── */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* ── Provider Cards ────────────────────────────────────────────────────────── */
.provider-cards {
  display: flex;
  gap: 12px;
}

.provider-card {
  flex: 1;
  background: var(--color-background, white);
  border: none;
  border-radius: 4px;
  padding: 16px 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  box-shadow: inset 0 0 0 1px #e0e4ea;
  transition: box-shadow 0.15s ease;
  font-family: inherit;
}

.provider-card.selected {
  box-shadow: inset 0 0 0 2px #0044f4;
}

.provider-card:hover:not(.selected) {
  box-shadow: inset 0 0 0 1px #afb7c5;
}

.card-radio {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--color-border, #e0e4ea);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.15s ease;
}

.card-radio.checked {
  border-color: #0044f4;
}

.radio-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0044f4;
}

.card-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1;
}

.card-label.is-selected {
  color: var(--color-text-primary, #0044f4);
}

/* ── Disclosure toggle ─────────────────────────────────────────────────────── */
.disclosure-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--color-text-neutral);
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  transition: color 0.15s ease;
}

.disclosure-toggle:hover {
  color: var(--color-text);
}
</style>
