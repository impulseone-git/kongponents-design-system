<script setup lang="ts">
import { ref } from 'vue'
import { KCard, KTabs, KPagination, KSegmentedControl } from '@kong/kongponents'
// All nav icons are now custom inline SVGs — no @kong/icons imports needed

// ── Nav Drawer state ──────────────────────────────────────────────────────────
const activeItem = ref('overview')
const connectivityOpen = ref(true)
const applicationsOpen = ref(true)

// ── Tabs / Pagination / Segmented state ───────────────────────────────────────
const tabs = [
  { hash: '#overview', title: 'Overview' },
  { hash: '#metrics',  title: 'Metrics' },
  { hash: '#settings', title: 'Settings' }
]
const currentTab = ref('#overview')
const handleTabChange = (hash: string) => { currentTab.value = hash }

const currentPage = ref(1)
const pageSize = ref(10)
const pageSizes = [10, 25, 50, 100]
const handlePageChange = (data: { page: number }) => { currentPage.value = data.page }
const handlePageSizeChange = (data: { pageSize: number }) => { pageSize.value = data.pageSize }

const segmentedOptions = ['Daily', 'Weekly', 'Monthly']
const activeSegment = ref('Weekly')
</script>

<template>
  <div class="view-container">

    <!-- ── Page header ───────────────────────────────────────────────────── -->
    <div class="header">
      <h1>Navigation</h1>
      <p class="description">Navigation drawer, tabs, pagination, and segmented controls.</p>
    </div>

    <!-- ── Nav Drawer ────────────────────────────────────────────────────── -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Navigation Drawer</h2>
        <p class="section-desc">
          Primary sidebar navigation for the Konnect platform. Dark navy background,
          collapsible sections, and org/region selectors anchored to the bottom.
        </p>
      </div>

      <div class="drawer-demo-wrap">
        <nav class="konnect-nav">

          <!-- Logo (custom konnect-logo.svg) -->
          <div class="nav-logo">
            <svg class="konnect-logo-svg" width="146" height="26" viewBox="0 0 146 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#kl_clip0)">
                <path d="M9.45769 21.3064L8.75024 22.2053L10.3508 24.7095L10.1839 25.8675H16.974L17.4441 24.7095L14.713 21.3064H9.45769Z" fill="url(#kl_paint0)"/>
                <path d="M13.1722 6.06734L10.7162 10.3719L22.6957 24.566L22.3549 25.8675H27.8501L28.8442 21.2498L16.0255 6.06499L13.1722 6.06734Z" fill="url(#kl_paint1)"/>
                <path d="M14.801 2.83127L13.6329 4.98473H16.5308L21.5042 10.9109L24.4608 8.4797V6.93579L23.4337 5.49074L24.1928 4.69996L18.2607 0L14.801 2.83127Z" fill="url(#kl_paint2)"/>
                <path d="M5.8852 14.8271H4.26583L0 20.2496V25.8675H4.57608L5.38459 24.8154L8.91476 20.2379H14.022L15.5944 17.8255L10.057 11.2451L5.8852 14.8271Z" fill="url(#kl_paint3)"/>
              </g>
              <g clip-path="url(#kl_clip1)">
                <path d="M68.6838 5.56C70.2238 5.56 70.9437 5.76 71.5037 6.26C72.4037 7.01 73.0438 8.32 73.0438 12.72C73.0438 17.11 72.3937 18.42 71.5037 19.19C70.9437 19.69 70.2238 19.89 68.6838 19.89H63.8337C62.2937 19.89 61.5738 19.69 61.0138 19.19C60.1138 18.42 59.4738 17.11 59.4738 12.72C59.4738 8.32 60.1238 7.02 61.0138 6.26C61.5738 5.76 62.2937 5.56 63.8337 5.56H68.6838ZM144.294 5.56V8.22H139.494V19.9H135.844V8.22H131.084V5.56H144.294ZM48.4938 5.56V11.27H49.4538L54.1938 5.56H58.2338L52.4237 12.29L58.4838 19.89H54.1838L49.5037 13.81H48.5038V19.89H44.8438V5.56H48.4838H48.4938ZM79.3838 5.56C80.1738 5.56 80.5338 5.72 80.9038 6.29L80.9837 6.42L85.9038 14.59H86.1338V11.9L89.6237 17.94V19.88H86.6637C85.9037 19.88 85.5137 19.7 85.1437 19.15L85.0537 19.02L79.6738 10.18H79.4437V19.88H75.9538V5.56H79.3838ZM88.7337 5.56C89.5037 5.56 89.8837 5.74 90.2537 6.28L90.3438 6.42L95.7337 15.26H95.9538V5.56H99.4437V19.89H96.0238C95.2238 19.89 94.8638 19.73 94.4938 19.16L94.4137 19.03L89.4938 10.86H89.2738V13.54L85.7738 7.49V5.56H88.7337ZM114.274 5.56V8.2H106.174V11.27H112.484V13.8H106.184V17.26H114.284V19.9H102.524V5.56H114.264H114.274ZM125.554 5.56C127.114 5.56 127.814 5.76 128.374 6.26C129.194 6.97 129.574 8.06 129.624 10.74H126.134C126.064 8.96 125.864 8.57 125.684 8.4C125.534 8.26 125.324 8.2 124.614 8.2H121.714C120.994 8.2 120.794 8.26 120.634 8.4C120.434 8.57 120.134 9.08 120.134 12.72C120.134 16.37 120.434 16.86 120.634 17.04C120.794 17.17 120.994 17.23 121.704 17.23H124.604C125.324 17.25 125.534 17.17 125.684 17.04C125.864 16.88 126.064 16.54 126.134 14.54H129.644C129.554 17.44 129.194 18.48 128.374 19.19C127.814 19.69 127.114 19.89 125.554 19.89H120.764C119.224 19.89 118.504 19.69 117.954 19.19C117.054 18.42 116.404 17.11 116.404 12.72C116.404 8.32 117.054 7.02 117.954 6.26C118.504 5.76 119.224 5.56 120.764 5.56H125.554ZM67.7437 8.2H64.7638C64.0438 8.2 63.8438 8.26 63.6838 8.4C63.4838 8.57 63.1938 9.08 63.1938 12.72C63.1938 16.37 63.4938 16.86 63.6938 17.04C63.8438 17.17 64.0438 17.23 64.7638 17.23H67.7337C68.4537 17.25 68.6537 17.17 68.8037 17.04C69.0037 16.87 69.2837 16.38 69.3037 13.02V12.72C69.3037 9.08 69.0037 8.57 68.8037 8.4C68.6537 8.26 68.4537 8.2 67.7337 8.2H67.7437Z" fill="white"/>
              </g>
              <defs>
                <linearGradient id="kl_paint0" x1="0.024" y1="25.853" x2="22.472" y2="3.358" gradientUnits="userSpaceOnUse"><stop stop-color="#1155CB"/><stop offset="1" stop-color="#1DB57C"/></linearGradient>
                <linearGradient id="kl_paint1" x1="0.025" y1="25.853" x2="22.473" y2="3.358" gradientUnits="userSpaceOnUse"><stop stop-color="#1155CB"/><stop offset="1" stop-color="#1DB57C"/></linearGradient>
                <linearGradient id="kl_paint2" x1="0.023" y1="25.853" x2="22.471" y2="3.358" gradientUnits="userSpaceOnUse"><stop stop-color="#1155CB"/><stop offset="1" stop-color="#1DB57C"/></linearGradient>
                <linearGradient id="kl_paint3" x1="0.024" y1="25.853" x2="22.472" y2="3.358" gradientUnits="userSpaceOnUse"><stop stop-color="#1155CB"/><stop offset="1" stop-color="#1DB57C"/></linearGradient>
                <clipPath id="kl_clip0"><rect width="28.844" height="26" fill="white"/></clipPath>
                <clipPath id="kl_clip1"><rect width="100" height="15" fill="white" transform="translate(44.844 5.5)"/></clipPath>
              </defs>
            </svg>
          </div>

          <!-- Scrollable nav body -->
          <div class="nav-body">

            <!-- Overview (Icon_overview.svg) -->
            <div class="nav-container">
              <button
                class="nav-item"
                :class="{ 'is-active': activeItem === 'overview' }"
                @click="activeItem = 'overview'"
              >
                <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.27001 2L4.80001 8H15.2L10 17L4.80001 8L1.26001 14.14L3.06001 17H17.7L19.04 14.66L11.74 2H8.26001H8.27001Z" fill="currentColor"/></svg>
                <span class="nav-label">Overview</span>
              </button>
            </div>

            <!-- Connectivity section -->
            <div class="nav-container">
              <button class="nav-section-label" @click="connectivityOpen = !connectivityOpen">
                <span>Connectivity</span>
                <!-- Icon_chevrondown.svg — rotates when collapsed -->
                <svg class="nav-section-chevron" :class="{ 'is-collapsed': !connectivityOpen }" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 12.8334L5 7.83335L6.16667 6.66669L10 10.5L13.8333 6.66669L15 7.83335L10 12.8334Z" fill="currentColor"/></svg>
              </button>
              <template v-if="connectivityOpen">
                <!-- API Gateway (Icon_apigateway.svg) -->
                <button class="nav-item" :class="{ 'is-active': activeItem === 'api-gateway' }" @click="activeItem = 'api-gateway'">
                  <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9 0.999969H7.99997H3.37997L0.999969 3.09997V12.62L2.99997 14.9V5.69997L6.05997 2.99997H14.66L12.9 0.999969ZM7.39001 5.00001H16.9L19 7.39001V16.9L16.62 19H7.10001L5.00001 16.62V7.10001L7.39001 5.00001Z" fill="currentColor"/></svg>
                  <span class="nav-label">API Gateway</span>
                </button>
                <!-- Event Gateway (Icon_eventgateway.svg) -->
                <button class="nav-item" :class="{ 'is-active': activeItem === 'event-gateway' }" @click="activeItem = 'event-gateway'">
                  <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.17463 2.26988C7.96661 2.06105 7.678 1.9324 7.35627 1.9324C7.03535 1.9324 6.74897 2.06105 6.54357 2.26988H6.53832C6.3309 2.47729 6.20225 2.76671 6.20225 3.08642C6.20225 3.40794 6.3309 3.69554 6.53832 3.90094L6.54357 3.90659C6.74897 4.11361 7.03535 4.24044 7.35627 4.24044C7.678 4.24044 7.96661 4.11361 8.17463 3.90659L8.17705 3.90094C8.38528 3.69554 8.51231 3.40794 8.51231 3.08642C8.51231 2.76671 8.38528 2.47729 8.17705 2.26988H8.17463ZM7.35627 18.0675C7.678 18.0675 7.96661 17.9364 8.17463 17.7314L8.17705 17.7254C8.38528 17.5208 8.51231 17.2314 8.51231 16.9133C8.51231 16.5917 8.38528 16.3037 8.17705 16.0953H8.17463C7.96661 15.8845 7.678 15.757 7.35627 15.757C7.03535 15.757 6.74897 15.8845 6.54357 16.0953H6.53832C6.3309 16.3037 6.20225 16.5917 6.20225 16.9133C6.20225 17.2314 6.3309 17.5208 6.53832 17.7254L6.54357 17.7314C6.74897 17.9364 7.03535 18.0675 7.35627 18.0675ZM13.644 14.5709C13.9298 14.4958 14.1885 14.3124 14.3466 14.0349L14.3679 13.9943C14.5084 13.7315 14.5341 13.4278 14.4589 13.1582C14.3832 12.8704 14.1978 12.6151 13.9209 12.4561L13.9045 12.4452C13.6347 12.297 13.3277 12.2647 13.0454 12.3416C12.7584 12.4133 12.5005 12.6044 12.3434 12.8794C12.1842 13.1529 12.1511 13.4672 12.2272 13.7564C12.3058 14.0409 12.4898 14.298 12.7651 14.4588H12.7667C13.0426 14.6173 13.3544 14.6458 13.644 14.5709ZM8.53998 8.81735C8.23704 8.51521 7.81897 8.32577 7.35627 8.32577C6.89418 8.32577 6.47733 8.51521 6.17499 8.81735C5.87366 9.11908 5.68785 9.53533 5.68785 9.99803C5.68785 10.4607 5.87366 10.8788 6.17499 11.184C6.47733 11.4843 6.89418 11.6719 7.35627 11.6719C7.81897 11.6719 8.23704 11.4843 8.53998 11.184C8.84212 10.8788 9.02793 10.4607 9.02793 9.99803C9.02793 9.53533 8.84212 9.11908 8.53998 8.81735ZM7.87431 6.85042C8.54604 6.9611 9.14911 7.28282 9.61019 7.74714H9.61362C9.68694 7.82025 9.75823 7.90083 9.82468 7.98122L10.9769 7.31473C10.822 6.84658 10.8147 6.35722 10.9393 5.89816C11.1035 5.28358 11.502 4.73343 12.0994 4.38868L12.1188 4.37636C12.7097 4.04211 13.3813 3.97243 13.9874 4.13663C14.6013 4.30123 15.1551 4.70152 15.4999 5.29792V5.29974C15.843 5.89291 15.9125 6.57353 15.7489 7.18629C15.5855 7.80066 15.1856 8.35465 14.5888 8.69738L14.4315 8.79028H14.4155C13.8635 9.05304 13.2566 9.09424 12.6992 8.94741C12.2416 8.82623 11.8219 8.57055 11.4931 8.20802L10.3425 8.87268C10.4748 9.22249 10.5479 9.59955 10.5479 9.99803C10.5479 10.3945 10.4748 10.777 10.3425 11.1286L11.4931 11.7915C11.8219 11.4233 12.2416 11.1735 12.6992 11.0519C13.3134 10.884 13.994 10.9553 14.5888 11.3021L14.627 11.3199V11.3217C15.2016 11.6701 15.5873 12.2077 15.7489 12.815C15.9125 13.4241 15.843 14.1052 15.4999 14.6995L15.4791 14.7409L15.4766 14.7375C15.1321 15.3105 14.5888 15.6987 13.9892 15.8629C13.3742 16.025 12.6934 15.9558 12.0994 15.614V15.6094C11.502 15.264 11.1035 14.7127 10.9393 14.0993C10.8147 13.6423 10.822 13.1529 10.9769 12.685L9.82468 12.0201C9.75823 12.1005 9.68694 12.1774 9.61362 12.2505L9.61019 12.2542C9.14911 12.7169 8.54604 13.0384 7.87431 13.1454V14.4768C8.35296 14.5768 8.78153 14.8161 9.1172 15.1519L9.11901 15.1554C9.56899 15.6033 9.8477 16.2274 9.8477 16.9133C9.8477 17.5971 9.56899 18.2176 9.11901 18.6677L9.1172 18.6748C8.66399 19.1248 8.04234 19.4035 7.35627 19.4035C6.67384 19.4035 6.05058 19.1248 5.59838 18.6748H5.59656V18.6677C5.14618 18.2176 4.86687 17.5971 4.86687 16.9133C4.86687 16.2274 5.14618 15.6033 5.59656 15.1554V15.1519H5.59838C5.93384 14.8161 6.36322 14.5768 6.84005 14.4768V13.1454C6.16852 13.0384 5.56647 12.7169 5.10135 12.2542L5.10619 12.2505C4.52656 11.6737 4.16666 10.8788 4.16666 9.99803C4.16666 9.11908 4.52656 8.32415 5.10135 7.74714H5.10619C5.56647 7.28282 6.16852 6.9611 6.84005 6.85042V5.52473C6.36322 5.42132 5.93384 5.182 5.59838 4.84795H5.59656V4.84431C5.14618 4.39232 4.86687 3.77249 4.86687 3.08642C4.86687 2.40398 5.14618 1.7787 5.59656 1.32852L5.59838 1.32671C6.05058 0.874913 6.67384 0.596405 7.35627 0.596405C8.04234 0.596405 8.66399 0.874913 9.1172 1.32671V1.32852H9.11901C9.56899 1.7787 9.8477 2.40398 9.8477 3.08642C9.8477 3.77249 9.56899 4.39232 9.11901 4.84431L9.1172 4.84795C8.78153 5.182 8.35296 5.42132 7.87431 5.52473V6.85042ZM14.3466 5.96622L14.3368 5.95168C14.178 5.68388 13.9243 5.50534 13.644 5.42839C13.3544 5.35144 13.0426 5.38376 12.7651 5.54291H12.7667C12.4898 5.70003 12.3046 5.95693 12.2272 6.24493C12.1511 6.53071 12.1842 6.84658 12.3434 7.12186L12.3488 7.12893C12.5082 7.40057 12.762 7.58274 13.0454 7.65605C13.3302 7.73664 13.6474 7.7025 13.9209 7.54336L13.9357 7.53629C14.2049 7.37553 14.3842 7.12186 14.4589 6.84315C14.5353 6.55555 14.5048 6.2413 14.3466 5.96622Z" fill="currentColor"/></svg>
                  <span class="nav-label">Event Gateway</span>
                </button>
                <!-- AI Gateway (Icon_aigateway.svg) -->
                <button class="nav-item" :class="{ 'is-active': activeItem === 'ai-gateway' }" @click="activeItem = 'ai-gateway'">
                  <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.33334 12.5C2.6389 12.5 2.04862 12.2569 1.56251 11.7708C1.0764 11.2847 0.833344 10.6944 0.833344 9.99999C0.833344 9.30555 1.0764 8.71527 1.56251 8.22916C2.04862 7.74305 2.6389 7.49999 3.33334 7.49999V5.83332C3.33334 5.37499 3.49654 4.98263 3.82293 4.65624C4.14932 4.32985 4.54168 4.16666 5.00001 4.16666H7.50001C7.50001 3.47221 7.74307 2.88193 8.22918 2.39582C8.71529 1.90971 9.30557 1.66666 10 1.66666C10.6945 1.66666 11.2847 1.90971 11.7708 2.39582C12.257 2.88193 12.5 3.47221 12.5 4.16666H15C15.4583 4.16666 15.8507 4.32985 16.1771 4.65624C16.5035 4.98263 16.6667 5.37499 16.6667 5.83332V7.49999C17.3611 7.49999 17.9514 7.74305 18.4375 8.22916C18.9236 8.71527 19.1667 9.30555 19.1667 9.99999C19.1667 10.6944 18.9236 11.2847 18.4375 11.7708C17.9514 12.2569 17.3611 12.5 16.6667 12.5V15.8333C16.6667 16.2917 16.5035 16.684 16.1771 17.0104C15.8507 17.3368 15.4583 17.5 15 17.5H5.00001C4.54168 17.5 4.14932 17.3368 3.82293 17.0104C3.49654 16.684 3.33334 16.2917 3.33334 15.8333V12.5ZM7.50001 10.8333C7.84723 10.8333 8.14237 10.7118 8.38543 10.4687C8.62848 10.2257 8.75001 9.93055 8.75001 9.58332C8.75001 9.2361 8.62848 8.94096 8.38543 8.69791C8.14237 8.45485 7.84723 8.33332 7.50001 8.33332C7.15279 8.33332 6.85765 8.45485 6.61459 8.69791C6.37154 8.94096 6.25001 9.2361 6.25001 9.58332C6.25001 9.93055 6.37154 10.2257 6.61459 10.4687C6.85765 10.7118 7.15279 10.8333 7.50001 10.8333ZM12.5 10.8333C12.8472 10.8333 13.1424 10.7118 13.3854 10.4687C13.6285 10.2257 13.75 9.93055 13.75 9.58332C13.75 9.2361 13.6285 8.94096 13.3854 8.69791C13.1424 8.45485 12.8472 8.33332 12.5 8.33332C12.1528 8.33332 11.8576 8.45485 11.6146 8.69791C11.3715 8.94096 11.25 9.2361 11.25 9.58332C11.25 9.93055 11.3715 10.2257 11.6146 10.4687C11.8576 10.7118 12.1528 10.8333 12.5 10.8333ZM6.66668 14.1667H13.3333V12.5H6.66668V14.1667ZM5.00001 15.8333H15V5.83332H5.00001V15.8333Z" fill="currentColor"/></svg>
                  <span class="nav-label">AI Gateway</span>
                </button>
                <!-- Service Mesh (Icon_servicemesh.svg) -->
                <button class="nav-item" :class="{ 'is-active': activeItem === 'service-mesh' }" @click="activeItem = 'service-mesh'">
                  <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 16.6667C4.30556 16.6667 3.71528 16.4236 3.22917 15.9375C2.74306 15.4514 2.5 14.8611 2.5 14.1667C2.5 13.4722 2.74306 12.882 3.22917 12.3958C3.71528 11.9097 4.30556 11.6667 5 11.6667C5.69444 11.6667 6.28472 11.9097 6.77083 12.3958C7.25694 12.882 7.5 13.4722 7.5 14.1667C7.5 14.8611 7.25694 15.4514 6.77083 15.9375C6.28472 16.4236 5.69444 16.6667 5 16.6667ZM15 16.6667C14.3056 16.6667 13.7153 16.4236 13.2292 15.9375C12.7431 15.4514 12.5 14.8611 12.5 14.1667C12.5 13.4722 12.7431 12.882 13.2292 12.3958C13.7153 11.9097 14.3056 11.6667 15 11.6667C15.6944 11.6667 16.2847 11.9097 16.7708 12.3958C17.2569 12.882 17.5 13.4722 17.5 14.1667C17.5 14.8611 17.2569 15.4514 16.7708 15.9375C16.2847 16.4236 15.6944 16.6667 15 16.6667ZM10 8.33334C9.30556 8.33334 8.71528 8.09029 8.22917 7.60418C7.74306 7.11807 7.5 6.52779 7.5 5.83334C7.5 5.1389 7.74306 4.54862 8.22917 4.06251C8.71528 3.5764 9.30556 3.33334 10 3.33334C10.6944 3.33334 11.2847 3.5764 11.7708 4.06251C12.2569 4.54862 12.5 5.1389 12.5 5.83334C12.5 6.52779 12.2569 7.11807 11.7708 7.60418C11.2847 8.09029 10.6944 8.33334 10 8.33334Z" fill="currentColor"/></svg>
                  <span class="nav-label">Service Mesh</span>
                </button>
              </template>
            </div>

            <!-- Applications section -->
            <div class="nav-container">
              <button class="nav-section-label" @click="applicationsOpen = !applicationsOpen">
                <span>Applications</span>
                <!-- Icon_chevrondown.svg — rotates when collapsed -->
                <svg class="nav-section-chevron" :class="{ 'is-collapsed': !applicationsOpen }" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 12.8334L5 7.83335L6.16667 6.66669L10 10.5L13.8333 6.66669L15 7.83335L10 12.8334Z" fill="currentColor"/></svg>
              </button>
              <template v-if="applicationsOpen">
                <!-- Catalog (Icon_catalog.svg) -->
                <button class="nav-item" :class="{ 'is-active': activeItem === 'catalog' }" @click="activeItem = 'catalog'">
                  <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.85 1V8.35H1.5V3.2L4.01 1H8.85ZM18.35 8.35H11V1H16.15L18.35 3.51V8.35ZM11 17.85V10.5H18.35V15.65L15.84 17.85H11ZM1.5 10.5H8.85V17.85H3.7L1.5 15.34V10.5Z" fill="currentColor"/></svg>
                  <span class="nav-label">Catalog</span>
                </button>
                <!-- Dev Portal (Icon_devportal.svg) -->
                <button class="nav-item" :class="{ 'is-active': activeItem === 'dev-portal' }" @click="activeItem = 'dev-portal'">
                  <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2H15.61L18 4.73V15.61L15.27 18H4.39L2 15.27V4.39L4.73 2H10ZM13.56 10C13.5856 10.4827 13.5126 10.9656 13.3456 11.4192C13.1785 11.8728 12.9208 12.2876 12.5881 12.6383C12.2555 12.9891 11.8549 13.2684 11.4108 13.4593C10.9667 13.6502 10.4884 13.7486 10.005 13.7486C9.52161 13.7486 9.04329 13.6502 8.59918 13.4593C8.15508 13.2684 7.75451 12.9891 7.42188 12.6383C7.08925 12.2876 6.83153 11.8728 6.66444 11.4192C6.49735 10.9656 6.42439 10.4827 6.45 10C6.51726 9.10451 6.92047 8.26752 7.57881 7.65677C8.23715 7.04603 9.10199 6.70665 10 6.70665C10.898 6.70665 11.7629 7.04603 12.4212 7.65677C13.0795 8.26752 13.4827 9.10451 13.55 10H13.56Z" fill="currentColor"/></svg>
                  <span class="nav-label">Dev Portal</span>
                </button>
                <!-- Metering & Billing (Icon_meteringandbilling.svg) -->
                <button class="nav-item" :class="{ 'is-active': activeItem === 'metering' }" @click="activeItem = 'metering'">
                  <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10.0208 17.5C9.78473 17.5 9.58681 17.4201 9.42709 17.2604C9.26737 17.1007 9.1875 16.9028 9.1875 16.6667V15.7083C8.5625 15.5694 8.01389 15.3264 7.54167 14.9792C7.06945 14.6319 6.6875 14.1458 6.39584 13.5208C6.29862 13.3264 6.29514 13.1215 6.38542 12.9062C6.4757 12.691 6.63889 12.5347 6.875 12.4375C7.06945 12.3542 7.27084 12.3576 7.47917 12.4479C7.6875 12.5382 7.84723 12.6875 7.95834 12.8958C8.19445 13.3125 8.49306 13.6285 8.85417 13.8437C9.21528 14.059 9.65973 14.1667 10.1875 14.1667C10.7569 14.1667 11.2396 14.0382 11.6354 13.7813C12.0313 13.5243 12.2292 13.125 12.2292 12.5833C12.2292 12.0972 12.0764 11.7118 11.7708 11.4271C11.4653 11.1424 10.7569 10.8194 9.64584 10.4583C8.45139 10.0833 7.63195 9.63542 7.18751 9.11458C6.74306 8.59375 6.52084 7.95833 6.52084 7.20833C6.52084 6.30556 6.81251 5.60417 7.39584 5.10417C7.97917 4.60417 8.57639 4.31944 9.1875 4.25V3.33333C9.1875 3.09722 9.26737 2.89931 9.42709 2.73958C9.58681 2.57986 9.78473 2.5 10.0208 2.5C10.2569 2.5 10.4549 2.57986 10.6146 2.73958C10.7743 2.89931 10.8542 3.09722 10.8542 3.33333V4.25C11.3819 4.33333 11.8403 4.50347 12.2292 4.76042C12.6181 5.01736 12.9375 5.33333 13.1875 5.70833C13.3125 5.88889 13.3368 6.09028 13.2604 6.3125C13.184 6.53472 13.0278 6.69444 12.7917 6.79167C12.5972 6.875 12.3958 6.87847 12.1875 6.80208C11.9792 6.72569 11.7847 6.59028 11.6042 6.39583C11.4236 6.20139 11.2118 6.05208 10.9688 5.94792C10.7257 5.84375 10.4236 5.79167 10.0625 5.79167C9.45139 5.79167 8.98612 5.92708 8.66667 6.19792C8.34723 6.46875 8.18751 6.80556 8.18751 7.20833C8.18751 7.66667 8.39584 8.02778 8.81251 8.29167C9.22917 8.55556 9.95139 8.83333 10.9792 9.125C11.9375 9.40278 12.6632 9.84375 13.1563 10.4479C13.6493 11.0521 13.8958 11.75 13.8958 12.5417C13.8958 13.5278 13.6042 14.2778 13.0208 14.7917C12.4375 15.3056 11.7153 15.625 10.8542 15.75V16.6667C10.8542 16.9028 10.7743 17.1007 10.6146 17.2604C10.4549 17.4201 10.2569 17.5 10.0208 17.5Z" fill="currentColor"/></svg>
                  <span class="nav-label">Metering & Billing</span>
                </button>
                <!-- Observability (Icon_observability.svg) -->
                <button class="nav-item" :class="{ 'is-active': activeItem === 'observability' }" @click="activeItem = 'observability'">
                  <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.33334 16.6666V9.99998H6.66668V16.6666H3.33334ZM8.33334 16.6666V3.33331H11.6667V16.6666H8.33334ZM13.3333 16.6666V7.49998H16.6667V16.6666H13.3333Z" fill="currentColor"/></svg>
                  <span class="nav-label">Observability</span>
                </button>
                <!-- Identity (Icon_identity.svg) -->
                <button class="nav-item" :class="{ 'is-active': activeItem === 'identity' }" @click="activeItem = 'identity'">
                  <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5.83334 11.6667C5.37501 11.6667 4.98265 11.5035 4.65626 11.1771C4.32987 10.8507 4.16668 10.4583 4.16668 10C4.16668 9.54167 4.32987 9.14931 4.65626 8.82292C4.98265 8.49653 5.37501 8.33333 5.83334 8.33333C6.29168 8.33333 6.68404 8.49653 7.01043 8.82292C7.33682 9.14931 7.50001 9.54167 7.50001 10C7.50001 10.4583 7.33682 10.8507 7.01043 11.1771C6.68404 11.5035 6.29168 11.6667 5.83334 11.6667ZM5.83334 15C4.44445 15 3.2639 14.5139 2.29168 13.5417C1.31945 12.5694 0.833344 11.3889 0.833344 10C0.833344 8.61111 1.31945 7.43056 2.29168 6.45833C3.2639 5.48611 4.44445 5 5.83334 5C6.7639 5 7.60765 5.22917 8.36459 5.6875C9.12154 6.14583 9.72223 6.75 10.1667 7.5H17.5L20 10L16.25 13.75L14.5833 12.5L12.9167 13.75L11.1458 12.5H10.1667C9.72223 13.25 9.12154 13.8542 8.36459 14.3125C7.60765 14.7708 6.7639 15 5.83334 15ZM5.83334 13.3333C6.61112 13.3333 7.29515 13.0972 7.88543 12.625C8.4757 12.1528 8.86807 11.5556 9.06251 10.8333H11.6667L12.875 11.6875L14.5833 10.4167L16.0625 11.5625L17.625 10L16.7917 9.16667H9.06251C8.86807 8.44444 8.4757 7.84722 7.88543 7.375C7.29515 6.90278 6.61112 6.66667 5.83334 6.66667C4.91668 6.66667 4.13195 6.99306 3.47918 7.64583C2.8264 8.29861 2.50001 9.08333 2.50001 10C2.50001 10.9167 2.8264 11.7014 3.47918 12.3542C4.13195 13.0069 4.91668 13.3333 5.83334 13.3333Z" fill="currentColor"/></svg>
                  <span class="nav-label">Identity</span>
                </button>
              </template>
            </div>

            <!-- Divider -->
            <div class="nav-divider" />

            <!-- Organization (Icon_organisation.svg) -->
            <div class="nav-container">
              <button
                class="nav-item"
                :class="{ 'is-active': activeItem === 'organization' }"
                @click="activeItem = 'organization'"
              >
                <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M0.833344 16.6666V14.3333C0.833344 13.8611 0.954871 13.4271 1.19793 13.0312C1.44098 12.6354 1.7639 12.3333 2.16668 12.125C3.02779 11.6944 3.90279 11.3715 4.79168 11.1562C5.68057 10.941 6.58334 10.8333 7.50001 10.8333C8.41668 10.8333 9.31945 10.941 10.2083 11.1562C11.0972 11.3715 11.9722 11.6944 12.8333 12.125C13.2361 12.3333 13.559 12.6354 13.8021 13.0312C14.0451 13.4271 14.1667 13.8611 14.1667 14.3333V16.6666H0.833344ZM15.8333 16.6666V14.1666C15.8333 13.5555 15.6632 12.9687 15.3229 12.4062C14.9827 11.8437 14.5 11.3611 13.875 10.9583C14.5833 11.0416 15.25 11.184 15.875 11.3854C16.5 11.5868 17.0833 11.8333 17.625 12.125C18.125 12.4028 18.507 12.7118 18.7708 13.0521C19.0347 13.3923 19.1667 13.7639 19.1667 14.1666V16.6666H15.8333ZM7.50001 9.99998C6.58334 9.99998 5.79862 9.67359 5.14584 9.02081C4.49307 8.36804 4.16668 7.58331 4.16668 6.66665C4.16668 5.74998 4.49307 4.96526 5.14584 4.31248C5.79862 3.6597 6.58334 3.33331 7.50001 3.33331C8.41668 3.33331 9.2014 3.6597 9.85418 4.31248C10.507 4.96526 10.8333 5.74998 10.8333 6.66665C10.8333 7.58331 10.507 8.36804 9.85418 9.02081C9.2014 9.67359 8.41668 9.99998 7.50001 9.99998ZM15.8333 6.66665C15.8333 7.58331 15.507 8.36804 14.8542 9.02081C14.2014 9.67359 13.4167 9.99998 12.5 9.99998C12.3472 9.99998 12.1528 9.98262 11.9167 9.9479C11.6806 9.91317 11.4861 9.87498 11.3333 9.83331C11.7083 9.38887 11.9965 8.89581 12.1979 8.35415C12.3993 7.81248 12.5 7.24998 12.5 6.66665C12.5 6.08331 12.3993 5.52081 12.1979 4.97915C11.9965 4.43748 11.7083 3.94442 11.3333 3.49998C11.5278 3.43054 11.7222 3.3854 11.9167 3.36456C12.1111 3.34373 12.3056 3.33331 12.5 3.33331C13.4167 3.33331 14.2014 3.6597 14.8542 4.31248C15.507 4.96526 15.8333 5.74998 15.8333 6.66665Z" fill="currentColor"/></svg>
                <span class="nav-label">Organization</span>
              </button>
            </div>

          </div>

          <!-- Bottom selectors -->
          <div class="nav-selectors">
            <button class="nav-selector">
              <!-- icon_user.svg (org avatar) -->
              <svg class="org-avatar-svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z" fill="#CFC8FF"/><path d="M8.03311 14H6.62686L9.18723 6.72727H10.8137L13.3776 14H11.9713L10.0289 8.21875H9.97203L8.03311 14ZM8.07928 11.1484H11.9145V12.2067H8.07928V11.1484Z" fill="#000933"/></svg>
              <span class="nav-label">Acme Inc.</span>
              <!-- Icon_unfold.svg -->
              <svg class="nav-icon selector-caret" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 17.5L6.25 13.75L7.45833 12.5416L10 15.0833L12.5417 12.5416L13.75 13.75L10 17.5ZM7.45833 7.54165L6.25 6.33331L10 2.58331L13.75 6.33331L12.5417 7.54165L10 4.99998L7.45833 7.54165Z" fill="currentColor"/></svg>
            </button>
            <button class="nav-selector">
              <!-- Icon_region.svg (US flag) -->
              <svg class="region-flag-svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#rf_clip)"><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/><path d="M9.56522 10H20C20 9.09743 19.8797 8.22305 19.6555 7.3913H9.56522V10Z" fill="#D80027"/><path d="M9.56522 4.7826H18.5322C17.9201 3.78369 17.1374 2.90076 16.2248 2.17389H9.56522V4.7826Z" fill="#D80027"/><path d="M9.99999 20C12.3535 20 14.5166 19.1865 16.2248 17.826H3.77515C5.48335 19.1865 7.64651 20 9.99999 20Z" fill="#D80027"/><path d="M1.46772 15.2174H18.5323C19.0237 14.4154 19.4048 13.5389 19.6555 12.6086H0.344482C0.595146 13.5389 0.976279 14.4154 1.46772 15.2174V15.2174Z" fill="#D80027"/><path d="M4.63219 1.56164H5.54348L4.69582 2.17746L5.01961 3.17391L4.17199 2.55809L3.32437 3.17391L3.60406 2.31309C2.85773 2.93477 2.20359 3.66313 1.66453 4.47469H1.95652L1.41695 4.86668C1.33289 5.00691 1.25227 5.14937 1.175 5.29395L1.43266 6.08695L0.951953 5.7377C0.832461 5.99086 0.723164 6.24973 0.624922 6.51398L0.908789 7.38773H1.95652L1.10887 8.00355L1.43266 9L0.585039 8.38418L0.0773047 8.75309C0.0264844 9.1616 0 9.5777 0 10H10C10 4.47719 10 3.82609 10 0C8.02453 0 6.18301 0.573047 4.63219 1.56164V1.56164ZM5.01961 9L4.17199 8.38418L3.32437 9L3.64816 8.00355L2.80051 7.38773H3.84824L4.17199 6.39129L4.49574 7.38773H5.54348L4.69582 8.00355L5.01961 9ZM4.69582 5.09051L5.01961 6.08695L4.17199 5.47113L3.32437 6.08695L3.64816 5.09051L2.80051 4.47469H3.84824L4.17199 3.47824L4.49574 4.47469H5.54348L4.69582 5.09051ZM8.60656 9L7.75895 8.38418L6.91133 9L7.23512 8.00355L6.38746 7.38773H7.4352L7.75895 6.39129L8.0827 7.38773H9.13043L8.28277 8.00355L8.60656 9ZM8.28277 5.09051L8.60656 6.08695L7.75895 5.47113L6.91133 6.08695L7.23512 5.09051L6.38746 4.47469H7.4352L7.75895 3.47824L8.0827 4.47469H9.13043L8.28277 5.09051ZM8.28277 2.17746L8.60656 3.17391L7.75895 2.55809L6.91133 3.17391L7.23512 2.17746L6.38746 1.56164H7.4352L7.75895 0.565195L8.0827 1.56164H9.13043L8.28277 2.17746Z" fill="#0052B4"/></g><defs><clipPath id="rf_clip"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
              <span class="nav-label">US (North America)</span>
              <!-- Icon_unfold.svg -->
              <svg class="nav-icon selector-caret" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 17.5L6.25 13.75L7.45833 12.5416L10 15.0833L12.5417 12.5416L13.75 13.75L10 17.5ZM7.45833 7.54165L6.25 6.33331L10 2.58331L13.75 6.33331L12.5417 7.54165L10 4.99998L7.45833 7.54165Z" fill="currentColor"/></svg>
            </button>
          </div>

        </nav>

        <!-- Annotation panel -->
        <div class="drawer-annotations">
          <h3 class="annotation-title">Design tokens</h3>
          <div class="annotation-grid">
            <div class="annotation-item">
              <div class="swatch" style="background: #000933"></div>
              <div>
                <div class="token-name">nav-color-background</div>
                <div class="token-value">#000933</div>
              </div>
            </div>
            <div class="annotation-item">
              <div class="swatch" style="background: #bee2ff"></div>
              <div>
                <div class="token-name">nav-color-text</div>
                <div class="token-value">#bee2ff</div>
              </div>
            </div>
            <div class="annotation-item">
              <div class="swatch" style="background: #00fabe; border: 1px solid #e0e4ea"></div>
              <div>
                <div class="token-name">nav-color-text-selected</div>
                <div class="token-value">#00fabe</div>
              </div>
            </div>
            <div class="annotation-item">
              <div class="swatch" style="background: rgba(255,255,255,0.12); border: 1px solid #e0e4ea"></div>
              <div>
                <div class="token-name">nav-color-background-selected</div>
                <div class="token-value">rgba(255,255,255,0.12)</div>
              </div>
            </div>
          </div>
          <h3 class="annotation-title mt-6">Nav item specs</h3>
          <ul class="spec-list">
            <li>Width: <strong>240px</strong> (items 224px + 8px padding each side)</li>
            <li>Item padding: <strong>12px top/bottom, 16px left/right</strong></li>
            <li>Icon size: <strong>20×20px</strong></li>
            <li>Label: <strong>14px Inter SemiBold</strong></li>
            <li>Section label: <strong>12px Inter Medium, uppercase</strong></li>
            <li>Active bg: <code>inset 0 0 0 1px rgba(255,255,255,0.12)</code></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── Existing component demos ──────────────────────────────────────── -->
    <div class="showcase-grid">

      <!-- Tabs -->
      <KCard title="Tabs (KTabs)">
        <template #default>
          <div class="demo-col">
            <KTabs :tabs="tabs" v-model="currentTab" @changed="handleTabChange">
              <template #overview>
                <div class="tab-content">
                  <h3>Service Overview</h3>
                  <p>This is the overview content for the selected service.</p>
                </div>
              </template>
              <template #metrics>
                <div class="tab-content">
                  <h3>Traffic Metrics</h3>
                  <p>View the latency, traffic, and error rates here.</p>
                </div>
              </template>
              <template #settings>
                <div class="tab-content">
                  <h3>Configuration</h3>
                  <p>Manage the settings and features for this service.</p>
                </div>
              </template>
            </KTabs>
          </div>
        </template>
      </KCard>

      <!-- Segmented Control -->
      <KCard title="Segmented Control (KSegmentedControl)">
        <template #default>
          <div class="demo-col">
            <p class="text-neutral mb-2">Select Timeframe</p>
            <KSegmentedControl :options="segmentedOptions" v-model="activeSegment" />
            <p class="mt-4">Selected: <strong>{{ activeSegment }}</strong></p>
          </div>
        </template>
      </KCard>

    </div>

    <!-- Full Width Pagination -->
    <KCard title="Pagination (KPagination)">
      <template #default>
        <div class="demo-col">
          <p class="text-neutral mb-2">Standard Pagination</p>
          <KPagination
            :total-count="150"
            :page-sizes="pageSizes"
            :current-page="currentPage"
            :items-per-page="pageSize"
            @page-change="handlePageChange"
            @page-size-change="handlePageSizeChange"
          />
          <p class="text-neutral mt-6 mb-2">Restricted Navigation</p>
          <KPagination
            :total-count="150"
            :page-sizes="pageSizes"
            :current-page="currentPage"
            :items-per-page="pageSize"
            restrict-navigation
            @page-change="handlePageChange"
            @page-size-change="handlePageSizeChange"
          />
        </div>
      </template>
    </KCard>

  </div>
</template>

<style scoped>
/* ── Page structure ──────────────────────────────────────────────────────────*/
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

/* ── Section ─────────────────────────────────────────────────────────────────*/
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

/* ── Drawer demo wrapper ─────────────────────────────────────────────────────*/
.drawer-demo-wrap {
  display: flex;
  gap: 32px;
  align-items: flex-start;
}

/* ── Konnect Nav ─────────────────────────────────────────────────────────────*/
.konnect-nav {
  width: 240px;
  min-width: 240px;
  background: #000933;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* Fixed height to mirror real product */
  height: 640px;
}

/* Logo */
.nav-logo {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  flex-shrink: 0;
}
.konnect-logo-svg {
  height: 22px;
  width: auto;
}

/* Custom SVG icon sizing in nav items */
.org-avatar-svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 4px;
}
.region-flag-svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* Scrollable body */
.nav-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 8px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  scrollbar-width: none;
}
.nav-body::-webkit-scrollbar { display: none; }

/* Nav containers (groups) */
.nav-container {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Section label */
.nav-section-label {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 16px 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #bee2ff;
  width: 100%;
  text-align: left;
}
.nav-section-label:hover {
  color: white;
}

/* Section chevron — rotates -90° when collapsed */
.nav-section-chevron {
  flex-shrink: 0;
  color: #bee2ff;
  transition: transform 0.2s ease;
}
.nav-section-chevron.is-collapsed {
  transform: rotate(-90deg);
}

/* Nav item */
.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 6px;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-family: inherit;
  transition: background 0.15s ease;
}
.nav-item:hover:not(.is-active) {
  background: rgba(255, 255, 255, 0.06);
}
.nav-item.is-active {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}

/* Shared icon + label color */
.nav-icon {
  flex-shrink: 0;
  color: #bee2ff;
  fill: #bee2ff;
}
.nav-label {
  font-size: 14px;
  font-weight: 600;
  color: #bee2ff;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Active item overrides text + icon to teal */
.nav-item.is-active .nav-label {
  color: #00fabe;
}
.nav-item.is-active .nav-icon {
  color: #00fabe;
  fill: #00fabe;
}

/* Divider */
.nav-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 8px;
}

/* Bottom selectors */
.nav-selectors {
  flex-shrink: 0;
  padding: 0 8px 0;
  display: flex;
  flex-direction: column;
}
.nav-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  font-family: inherit;
  border-radius: 6px;
  transition: background 0.15s ease;
}
.nav-selector:hover {
  background: rgba(255, 255, 255, 0.06);
}
/* org-avatar and region-flag now use inline SVGs (icon_user.svg, Icon_region.svg) */
.selector-caret {
  margin-left: auto;
  opacity: 0.6;
}

/* ── Annotation panel ────────────────────────────────────────────────────────*/
.drawer-annotations {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.annotation-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.annotation-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.annotation-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.swatch {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  flex-shrink: 0;
}
.token-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text);
  font-family: monospace;
}
.token-value {
  font-size: 11px;
  color: var(--color-text-neutral);
  font-family: monospace;
}
.spec-list {
  margin: 0;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: var(--color-text-neutral);
  line-height: 20px;
}
.spec-list strong { color: var(--color-text); }
.spec-list code {
  font-family: monospace;
  font-size: 11px;
  background: var(--color-background-neutral-weakest);
  padding: 1px 4px;
  border-radius: 3px;
  color: var(--color-text);
}
.mt-6 { margin-top: 24px; }

/* ── Existing demo styles ────────────────────────────────────────────────────*/
.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 24px;
}
.demo-col { display: flex; flex-direction: column; }
.tab-content { padding: 16px 0; }
.tab-content h3 { margin-top: 0; margin-bottom: 8px; color: var(--color-text); }
.tab-content p { margin: 0; color: var(--color-text-neutral); }
.text-neutral { color: var(--color-text-neutral); font-size: 14px; font-weight: 500; margin: 0; }
.mb-2 { margin-bottom: 8px; }
.mt-4 { margin-top: 16px; }
.mt-6 { margin-top: 24px; }
</style>
