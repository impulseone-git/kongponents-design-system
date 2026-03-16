<script setup lang="ts">
import { KCard } from '@kong/kongponents'
</script>

<template>
  <div class="view-container">

    <!-- ── Page header ───────────────────────────────────────────────────── -->
    <div class="header">
      <h1>Typography</h1>
      <p class="description">
        Type system foundations including font families, heading scale, text styles,
        inline elements, and list patterns.
      </p>
    </div>

    <!-- ══════════════════════════════════════════════════════════════════════
         1. FONT FAMILIES
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Font Families</h2>
        <p class="section-desc">
          Two typefaces form the foundation: <strong>Inter</strong> for all UI and body text,
          and <strong>JetBrains Mono</strong> for code and monospaced content.
        </p>
      </div>

      <div class="font-families-grid">
        <!-- Inter -->
        <div class="font-card">
          <div class="font-card-header">
            <span class="font-card-name" style="font-family: 'Inter', sans-serif;">Inter</span>
            <span class="font-card-tag">UI &amp; Body</span>
          </div>
          <div class="font-specimen" style="font-family: 'Inter', sans-serif;">
            <div class="specimen-row">a b c d e f g h i j k l m n o p q r s t u v w</div>
            <div class="specimen-row">x y z A B C D E F G H I J K L M N O P Q R</div>
            <div class="specimen-row">S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0 ! @ #</div>
            <div class="specimen-row">$ ^ &amp; * ( )</div>
          </div>
        </div>
        <!-- JetBrains Mono -->
        <div class="font-card">
          <div class="font-card-header">
            <span class="font-card-name" style="font-family: 'JetBrains Mono', monospace;">JetBrains Mono</span>
            <span class="font-card-tag">Code</span>
          </div>
          <div class="font-specimen" style="font-family: 'JetBrains Mono', 'SFMono-Regular', 'Consolas', monospace;">
            <div class="specimen-row">a b c d e f g h i j k l m n o p q r s t u v</div>
            <div class="specimen-row">w x y z A B C D E F G H I J K L M N O P Q R</div>
            <div class="specimen-row">S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0 ! @ # $</div>
            <div class="specimen-row">^ &amp; * ( )</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         2. HEADING SCALE
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Headings</h2>
        <p class="section-desc">
          Five heading levels provide hierarchical structure. All headings use Inter Bold
          with progressively tighter letter-spacing at larger sizes.
        </p>
      </div>

      <!-- Heading preview stack -->
      <div class="heading-preview">
        <div class="heading-preview-item">
          <span class="h-demo h1-demo">Heading 1</span>
        </div>
        <div class="heading-preview-item">
          <span class="h-demo h2-demo">Heading 2</span>
        </div>
        <div class="heading-preview-item">
          <span class="h-demo h3-demo">Heading 3</span>
        </div>
        <div class="heading-preview-item">
          <span class="h-demo h4-demo">Heading 4</span>
        </div>
        <div class="heading-preview-item">
          <span class="h-demo h5-demo">Heading 5</span>
        </div>
      </div>

      <!-- Heading spec table -->
      <div class="spec-table-wrap">
        <table class="spec-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Example</th>
              <th>Font Size</th>
              <th>Line Height</th>
              <th>Letter Spacing</th>
              <th>Margin Bottom</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td--bold">H1</td>
              <td><span class="h-demo h1-demo" style="font-size: 20px; line-height: 28px; letter-spacing: -0.5px;">Runtime Manager</span></td>
              <td><span class="token-pill">font-size-70</span> <span class="token-resolved">32px</span></td>
              <td><span class="token-pill">line-height-60</span> <span class="token-resolved">40px</span></td>
              <td><span class="token-pill">letter-spacing-minus-50</span> <span class="token-resolved">-1.5px</span></td>
              <td><span class="token-pill">space-70</span> <span class="token-resolved">24px</span></td>
            </tr>
            <tr>
              <td class="td--bold">H2</td>
              <td><span class="h-demo h2-demo" style="font-size: 18px; line-height: 24px; letter-spacing: -0.4px;">Runtime Instance</span></td>
              <td><span class="token-pill">font-size-60</span> <span class="token-resolved">24px</span></td>
              <td><span class="token-pill">line-height-50</span> <span class="token-resolved">32px</span></td>
              <td><span class="token-pill">letter-spacing-minus-40</span> <span class="token-resolved">-0.75px</span></td>
              <td><span class="token-pill">space-60</span> <span class="token-resolved">16px</span></td>
            </tr>
            <tr>
              <td class="td--bold">H3</td>
              <td><span class="h-demo h3-demo" style="font-size: 16px; line-height: 22px; letter-spacing: -0.3px;">Gateway Services</span></td>
              <td><span class="token-pill">font-size-50</span> <span class="token-resolved">20px</span></td>
              <td><span class="token-pill">line-height-40</span> <span class="token-resolved">28px</span></td>
              <td><span class="token-pill">letter-spacing-minus-30</span> <span class="token-resolved">-0.5px</span></td>
              <td><span class="token-pill">space-50</span> <span class="token-resolved">12px</span></td>
            </tr>
            <tr>
              <td class="td--bold">H4</td>
              <td><span class="h-demo h4-demo" style="font-size: 14px; line-height: 20px; letter-spacing: -0.2px;">Analytics</span></td>
              <td><span class="token-pill">font-size-40</span> <span class="token-resolved">16px</span></td>
              <td><span class="token-pill">line-height-30</span> <span class="token-resolved">24px</span></td>
              <td><span class="token-pill">letter-spacing-minus-20</span> <span class="token-resolved">-0.32px</span></td>
              <td><span class="token-pill">space-40</span> <span class="token-resolved">8px</span></td>
            </tr>
            <tr>
              <td class="td--bold">H5</td>
              <td><span class="h-demo h5-demo" style="font-size: 13px; line-height: 18px; letter-spacing: -0.07px;">Traffic by Status Code</span></td>
              <td><span class="token-pill">font-size-30</span> <span class="token-resolved">14px</span></td>
              <td><span class="token-pill">line-height-30</span> <span class="token-resolved">24px</span></td>
              <td><span class="token-pill">letter-spacing-minus-10</span> <span class="token-resolved">-0.07px</span></td>
              <td><span class="token-pill">space-30</span> <span class="token-resolved">4px</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         3. TEXT STYLES (size × weight × style matrix)
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Text Styles</h2>
        <p class="section-desc">
          Three pre-defined sizes (Default, Small, Large) each with four weights
          (Regular, Medium, Semibold, Bold) in normal and italic styles.
        </p>
      </div>

      <!-- Weights legend -->
      <div class="weights-row">
        <div class="weight-chip"><span class="weight-sample" style="font-weight: 400;">Aa</span> Regular (400)</div>
        <div class="weight-chip"><span class="weight-sample" style="font-weight: 500;">Aa</span> Medium (500)</div>
        <div class="weight-chip"><span class="weight-sample" style="font-weight: 600;">Aa</span> Semibold (600)</div>
        <div class="weight-chip"><span class="weight-sample" style="font-weight: 700;">Aa</span> Bold (700)</div>
      </div>

      <!-- Default -->
      <div class="text-style-block">
        <div class="text-style-label">
          <span class="text-style-name">Default</span>
          <span class="text-style-meta">font-size-40 · 16px · line-height-30 · 24px</span>
        </div>
        <div class="text-style-grid">
          <div class="text-style-col">
            <span class="ts ts--default ts--regular">Default - Regular</span>
            <span class="ts ts--default ts--medium">Default - Medium</span>
            <span class="ts ts--default ts--semibold">Default - Semibold</span>
            <span class="ts ts--default ts--bold">Default - Bold</span>
          </div>
          <div class="text-style-col">
            <span class="ts ts--default ts--regular ts--italic">Default - Regular Italic</span>
            <span class="ts ts--default ts--medium ts--italic">Default - Medium Italic</span>
            <span class="ts ts--default ts--semibold ts--italic">Default - Semibold Italic</span>
            <span class="ts ts--default ts--bold ts--italic">Default - Bold Italic</span>
          </div>
        </div>
      </div>

      <!-- Small -->
      <div class="text-style-block">
        <div class="text-style-label">
          <span class="text-style-name">Small</span>
          <span class="text-style-meta">font-size-20 · 12px · line-height-20 · 20px</span>
        </div>
        <div class="text-style-grid">
          <div class="text-style-col">
            <span class="ts ts--small ts--regular">Small - Regular</span>
            <span class="ts ts--small ts--medium">Small - Medium</span>
            <span class="ts ts--small ts--semibold">Small - Semibold</span>
            <span class="ts ts--small ts--bold">Small - Bold</span>
          </div>
          <div class="text-style-col">
            <span class="ts ts--small ts--regular ts--italic">Small - Regular Italic</span>
            <span class="ts ts--small ts--medium ts--italic">Small - Medium Italic</span>
            <span class="ts ts--small ts--semibold ts--italic">Small - Semibold Italic</span>
            <span class="ts ts--small ts--bold ts--italic">Small - Bold Italic</span>
          </div>
        </div>
      </div>

      <!-- Large -->
      <div class="text-style-block">
        <div class="text-style-label">
          <span class="text-style-name">Large</span>
          <span class="text-style-meta">font-size-50 · 18px · line-height-40 · 28px</span>
        </div>
        <div class="text-style-grid">
          <div class="text-style-col">
            <span class="ts ts--large ts--regular">Large - Regular</span>
            <span class="ts ts--large ts--medium">Large - Medium</span>
            <span class="ts ts--large ts--semibold">Large - Semibold</span>
            <span class="ts ts--large ts--bold">Large - Bold</span>
          </div>
          <div class="text-style-col">
            <span class="ts ts--large ts--regular ts--italic">Large - Regular Italic</span>
            <span class="ts ts--large ts--medium ts--italic">Large - Medium Italic</span>
            <span class="ts ts--large ts--semibold ts--italic">Large - Semibold Italic</span>
            <span class="ts ts--large ts--bold ts--italic">Large - Bold Italic</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         4. TEXT ELEMENTS
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Text Elements</h2>
        <p class="section-desc">
          Base HTML elements with opinionated styles aligned to Kong's design language.
        </p>
      </div>

      <div class="elements-grid">
        <!-- Divider -->
        <div class="element-card">
          <div class="element-card-label">Divider</div>
          <div class="element-card-preview">
            <div class="elem-divider-demo">
              <p class="elem-paragraph">Konnect now supports Kong Gateway 3.4 in Runtime Manager including supporting secret rotation in Vaults.</p>
              <hr class="elem-hr" />
              <p class="elem-paragraph elem-paragraph--action">Take action!</p>
            </div>
          </div>
        </div>

        <!-- Anchor -->
        <div class="element-card">
          <div class="element-card-label">Anchor</div>
          <div class="element-card-preview">
            <div class="elem-anchor-demo">
              <a href="#" class="elem-link" @click.prevent>link</a>
              <a href="#" class="elem-link elem-link--hover" @click.prevent>hovered</a>
            </div>
          </div>
          <div class="element-card-specs">
            <div class="spec-row"><span class="spec-prop">color</span><span class="token-pill">color-text-primary</span></div>
            <div class="spec-row"><span class="spec-prop">color:hover</span><span class="token-pill">color-text-primary-stronger</span></div>
            <div class="spec-row"><span class="spec-prop">text-decoration:hover</span><span class="spec-val">underline</span></div>
          </div>
        </div>

        <!-- Code -->
        <div class="element-card">
          <div class="element-card-label">Code</div>
          <div class="element-card-preview">
            <code class="elem-code">code</code>
          </div>
          <div class="element-card-specs">
            <div class="spec-row"><span class="spec-prop">font-family</span><span class="spec-val">JetBrains Mono</span></div>
            <div class="spec-row"><span class="spec-prop">font-size</span><span class="token-pill">font-size-20</span></div>
            <div class="spec-row"><span class="spec-prop">background</span><span class="token-pill">color-background-neutral-weakest</span></div>
            <div class="spec-row"><span class="spec-prop">padding</span><span class="spec-val">2px 6px</span></div>
            <div class="spec-row"><span class="spec-prop">border-radius</span><span class="spec-val">4px</span></div>
          </div>
        </div>

        <!-- Description List -->
        <div class="element-card element-card--wide">
          <div class="element-card-label">Description List</div>
          <div class="element-card-preview">
            <dl class="elem-dl">
              <div class="elem-dl-pair">
                <dt class="elem-dt">Description term</dt>
                <dd class="elem-dd">Description details.</dd>
              </div>
              <div class="elem-dl-pair">
                <dt class="elem-dt">Description term</dt>
                <dd class="elem-dd">Description details.</dd>
              </div>
            </dl>
          </div>
          <div class="element-card-specs">
            <div class="spec-row"><span class="spec-prop">dt font-weight</span><span class="spec-val">600 (Semibold)</span></div>
            <div class="spec-row"><span class="spec-prop">dd color</span><span class="token-pill">color-text-neutral</span></div>
            <div class="spec-row"><span class="spec-prop">pair gap</span><span class="token-pill">space-40</span> <span class="spec-val">4px</span></div>
          </div>
        </div>

        <!-- Horizontal Rule -->
        <div class="element-card">
          <div class="element-card-label">Horizontal Rule</div>
          <div class="element-card-preview">
            <div class="elem-hr-wrap">
              <div class="elem-hr-block"></div>
              <hr class="elem-hr" />
              <div class="elem-hr-block"></div>
            </div>
          </div>
          <div class="element-card-specs">
            <div class="spec-row"><span class="spec-prop">border-color</span><span class="token-pill">color-border</span></div>
            <div class="spec-row"><span class="spec-prop">margin</span><span class="token-pill">space-60</span> <span class="spec-val">16px 0</span></div>
          </div>
        </div>

        <!-- Paragraph -->
        <div class="element-card element-card--wide">
          <div class="element-card-label">Paragraph</div>
          <div class="element-card-preview">
            <div class="elem-paragraph-demo">
              <p class="elem-p">Konnect now supports Kong Gateway 3.4 in Runtime Manager including supporting secret rotation in Vaults.</p>
              <p class="elem-p">Konnect is the easiest way for our customers to get started with Kong EE Gateways. Users can get started with the latest version of Kong Gateway (v3.4) in less than 5 minutes with the help of our Quickstart scripts!</p>
            </div>
          </div>
          <div class="element-card-specs">
            <div class="spec-row"><span class="spec-prop">font-size</span><span class="token-pill">font-size-40</span> <span class="spec-val">16px</span></div>
            <div class="spec-row"><span class="spec-prop">line-height</span><span class="token-pill">line-height-30</span> <span class="spec-val">24px</span></div>
            <div class="spec-row"><span class="spec-prop">margin-bottom</span><span class="token-pill">space-60</span> <span class="spec-val">16px</span></div>
          </div>
        </div>

        <!-- Small -->
        <div class="element-card element-card--wide">
          <div class="element-card-label">Small</div>
          <div class="element-card-preview">
            <p class="elem-small">Konnect is the easiest way for our customers to get started with Kong EE Gateways. Users can get started with the latest version of Kong Gateway (v3.4) in less than 5 minutes with the help of our Quickstart scripts!</p>
          </div>
          <div class="element-card-specs">
            <div class="spec-row"><span class="spec-prop">font-size</span><span class="token-pill">font-size-20</span> <span class="spec-val">12px</span></div>
            <div class="spec-row"><span class="spec-prop">line-height</span><span class="token-pill">line-height-20</span> <span class="spec-val">20px</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         5. LISTS
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Lists</h2>
        <p class="section-desc">
          Text objects in bulleted or numbered format with consistent spacing and markers.
        </p>
      </div>

      <div class="lists-grid">
        <!-- Unordered -->
        <div class="list-card">
          <div class="list-card-label">Unordered List</div>
          <div class="list-card-preview">
            <ul class="elem-ul">
              <li>Konnect</li>
              <li>Mesh</li>
              <li>Enterprise</li>
              <li>Insomnia</li>
            </ul>
          </div>
          <div class="element-card-specs">
            <div class="spec-row"><span class="spec-prop">list-style</span><span class="spec-val">disc</span></div>
            <div class="spec-row"><span class="spec-prop">padding-left</span><span class="token-pill">space-70</span> <span class="spec-val">20px</span></div>
            <div class="spec-row"><span class="spec-prop">item gap</span><span class="token-pill">space-20</span> <span class="spec-val">4px</span></div>
          </div>
        </div>

        <!-- Ordered -->
        <div class="list-card">
          <div class="list-card-label">Ordered List</div>
          <div class="list-card-preview">
            <ol class="elem-ol">
              <li>Konnect</li>
              <li>Mesh</li>
              <li>Enterprise</li>
              <li>Insomnia</li>
            </ol>
          </div>
          <div class="element-card-specs">
            <div class="spec-row"><span class="spec-prop">list-style</span><span class="spec-val">decimal</span></div>
            <div class="spec-row"><span class="spec-prop">padding-left</span><span class="token-pill">space-70</span> <span class="spec-val">20px</span></div>
            <div class="spec-row"><span class="spec-prop">item gap</span><span class="token-pill">space-20</span> <span class="spec-val">4px</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         6. DESIGN TOKENS SUMMARY
         ══════════════════════════════════════════════════════════════════════ -->
    <KCard title="Typography Token Scale">
      <template #default>
        <div class="token-tables">
          <div class="token-table-col">
            <div class="token-table-title">Font Size</div>
            <div class="token-table-row" v-for="s in [
              { token: 'font-size-70', val: '32px' },
              { token: 'font-size-60', val: '24px' },
              { token: 'font-size-50', val: '20px' },
              { token: 'font-size-40', val: '16px' },
              { token: 'font-size-30', val: '14px' },
              { token: 'font-size-20', val: '12px' }
            ]" :key="s.token">
              <span class="token-pill">{{ s.token }}</span>
              <span class="token-resolved">{{ s.val }}</span>
            </div>
          </div>
          <div class="token-table-col">
            <div class="token-table-title">Line Height</div>
            <div class="token-table-row" v-for="s in [
              { token: 'line-height-60', val: '40px' },
              { token: 'line-height-50', val: '32px' },
              { token: 'line-height-40', val: '28px' },
              { token: 'line-height-30', val: '24px' },
              { token: 'line-height-20', val: '20px' }
            ]" :key="s.token">
              <span class="token-pill">{{ s.token }}</span>
              <span class="token-resolved">{{ s.val }}</span>
            </div>
          </div>
          <div class="token-table-col">
            <div class="token-table-title">Letter Spacing</div>
            <div class="token-table-row" v-for="s in [
              { token: 'letter-spacing-minus-50', val: '-1.5px' },
              { token: 'letter-spacing-minus-40', val: '-0.75px' },
              { token: 'letter-spacing-minus-30', val: '-0.5px' },
              { token: 'letter-spacing-minus-20', val: '-0.32px' },
              { token: 'letter-spacing-minus-10', val: '-0.07px' }
            ]" :key="s.token">
              <span class="token-pill">{{ s.token }}</span>
              <span class="token-resolved">{{ s.val }}</span>
            </div>
          </div>
          <div class="token-table-col">
            <div class="token-table-title">Spacing (margin-bottom)</div>
            <div class="token-table-row" v-for="s in [
              { token: 'space-70', val: '24px' },
              { token: 'space-60', val: '16px' },
              { token: 'space-50', val: '12px' },
              { token: 'space-40', val: '8px' },
              { token: 'space-30', val: '4px' }
            ]" :key="s.token">
              <span class="token-pill">{{ s.token }}</span>
              <span class="token-resolved">{{ s.val }}</span>
            </div>
          </div>
        </div>
      </template>
    </KCard>

  </div>
</template>

<style scoped>
/* ── Page structure ──────────────────────────────────────────────────────── */
.view-container { display: flex; flex-direction: column; gap: 32px; }
.header { display: flex; flex-direction: column; gap: 8px; }
.description { color: var(--color-text-neutral); font-size: 16px; line-height: 24px; }

/* ── Section ─────────────────────────────────────────────────────────────── */
.layout-section { display: flex; flex-direction: column; gap: 20px; }
.section-header { display: flex; flex-direction: column; gap: 6px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border); }
.section-title { font-size: 18px; font-weight: 700; color: var(--color-text); margin: 0; }
.section-desc { color: var(--color-text-neutral); font-size: 14px; line-height: 20px; margin: 0; }

/* ══════════════════════════════════════════════════════════════════════════
   FONT FAMILIES
   ══════════════════════════════════════════════════════════════════════════ */
.font-families-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.font-card {
  border: 1px solid #e0e4ea; border-radius: 8px; overflow: hidden; background: white;
}
.font-card-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 24px; border-bottom: 1px solid #e0e4ea;
}
.font-card-name { font-size: 20px; font-weight: 700; color: #000933; }
.font-card-tag {
  font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
  padding: 4px 8px; border-radius: 4px; background: #eefaff; color: #0044f4;
}
.font-specimen {
  padding: 24px; background: #f9fafb; min-height: 160px;
  display: flex; flex-direction: column; gap: 8px;
}
.specimen-row {
  font-size: 16px; font-weight: 700; color: #000933; line-height: 24px;
  letter-spacing: 10px;
}

/* ══════════════════════════════════════════════════════════════════════════
   HEADING SCALE
   ══════════════════════════════════════════════════════════════════════════ */
.heading-preview {
  padding: 48px 64px; background: #f9fafb; border-radius: 8px;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
}
.heading-preview-item { text-align: center; }
.h-demo { font-family: 'Inter', sans-serif; font-weight: 700; color: #000933; display: block; }
.h1-demo { font-size: 32px; line-height: 40px; letter-spacing: -1.5px; }
.h2-demo { font-size: 24px; line-height: 32px; letter-spacing: -0.75px; }
.h3-demo { font-size: 20px; line-height: 28px; letter-spacing: -0.5px; }
.h4-demo { font-size: 16px; line-height: 24px; letter-spacing: -0.32px; }
.h5-demo { font-size: 14px; line-height: 24px; letter-spacing: -0.07px; }

/* Spec table */
.spec-table-wrap {
  border: 1px solid #e0e4ea; border-radius: 8px; overflow: hidden; background: white;
}
.spec-table { width: 100%; border-collapse: collapse; }
.spec-table thead th {
  padding: 12px 16px; font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.3px; color: #6c7489; text-align: left; border-bottom: 1px solid #e0e4ea;
}
.spec-table tbody tr { border-bottom: 1px solid #e0e4ea; }
.spec-table tbody tr:last-child { border-bottom: none; }
.spec-table tbody td { padding: 10px 16px; font-size: 14px; color: #000933; vertical-align: middle; }
.spec-table .td--bold { font-weight: 700; }

/* Token pill (shared) */
.token-pill {
  display: inline-block; padding: 2px 10px; border-radius: 12px;
  background: #eefaff; color: #002099; font-size: 13px; font-weight: 500;
  font-family: 'Inter', sans-serif; font-feature-settings: 'lnum' 1, 'tnum' 1;
  white-space: nowrap;
}
.token-resolved {
  display: inline-block; margin-left: 6px; font-size: 12px; color: #6c7489;
  font-family: monospace;
}

/* ══════════════════════════════════════════════════════════════════════════
   TEXT STYLES
   ══════════════════════════════════════════════════════════════════════════ */
.weights-row {
  display: flex; gap: 16px; flex-wrap: wrap;
}
.weight-chip {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 16px; border: 1px solid #e0e4ea; border-radius: 8px;
  background: white; font-size: 13px; color: #6c7489;
}
.weight-sample { font-size: 20px; color: #000933; }

.text-style-block {
  border: 1px solid #e0e4ea; border-radius: 8px; overflow: hidden; background: white;
}
.text-style-label {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 20px; border-bottom: 1px solid #e0e4ea; background: #f9fafb;
}
.text-style-name { font-size: 14px; font-weight: 700; color: #000933; }
.text-style-meta { font-size: 12px; color: #6c7489; font-family: monospace; }

.text-style-grid { display: grid; grid-template-columns: 1fr 1fr; }
.text-style-col {
  display: flex; flex-direction: column; padding: 20px 24px; gap: 8px;
}
.text-style-col + .text-style-col { border-left: 1px solid #e0e4ea; }

.ts { color: #000933; display: block; }
.ts--default { font-size: 16px; line-height: 24px; }
.ts--small { font-size: 12px; line-height: 20px; }
.ts--large { font-size: 18px; line-height: 28px; }
.ts--regular { font-weight: 400; }
.ts--medium { font-weight: 500; }
.ts--semibold { font-weight: 600; }
.ts--bold { font-weight: 700; }
.ts--italic { font-style: italic; }

/* ══════════════════════════════════════════════════════════════════════════
   TEXT ELEMENTS
   ══════════════════════════════════════════════════════════════════════════ */
.elements-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;
}
.element-card {
  border: 1px solid #e0e4ea; border-radius: 8px; overflow: hidden; background: white;
}
.element-card--wide { grid-column: span 2; }
.element-card-label {
  padding: 8px 16px; font-size: 11px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.5px; color: #6c7489; background: #f9fafb; border-bottom: 1px solid #e0e4ea;
}
.element-card-preview { padding: 20px 24px; }
.element-card-specs {
  padding: 12px 16px; border-top: 1px solid #e0e4ea; background: #f9fafb;
  display: flex; flex-direction: column; gap: 4px;
}
.spec-row { display: flex; align-items: center; gap: 8px; font-size: 12px; }
.spec-prop { color: #6c7489; min-width: 140px; }
.spec-val { color: #000933; font-family: monospace; font-size: 12px; }

/* Element demos */
.elem-paragraph { font-size: 16px; line-height: 24px; color: #000933; margin: 0 0 8px; }
.elem-paragraph--action { font-weight: 600; color: #0044f4; margin: 0; }
.elem-hr { border: none; border-top: 1px solid #e0e4ea; margin: 16px 0; }
.elem-link {
  font-size: 14px; font-weight: 600; color: #0044f4; text-decoration: none;
  margin-right: 24px;
}
.elem-link--hover { color: #002099; text-decoration: underline; }
.elem-code {
  font-family: 'JetBrains Mono', 'SFMono-Regular', 'Consolas', monospace;
  font-size: 12px; color: #000933; background: #f1f1f5; padding: 2px 6px;
  border-radius: 4px;
}
.elem-dl { margin: 0; display: flex; flex-direction: column; gap: 12px; }
.elem-dl-pair { display: flex; flex-direction: column; gap: 2px; }
.elem-dt { font-size: 14px; font-weight: 600; color: #000933; margin: 0; }
.elem-dd { font-size: 14px; color: #6c7489; margin: 0; }
.elem-hr-wrap { display: flex; flex-direction: column; gap: 0; }
.elem-hr-block { height: 32px; background: #f9fafb; border-radius: 4px; }
.elem-paragraph-demo { display: flex; flex-direction: column; gap: 0; }
.elem-p { font-size: 16px; line-height: 24px; color: #000933; margin: 0 0 16px; }
.elem-p:last-child { margin-bottom: 0; }
.elem-small { font-size: 12px; line-height: 20px; color: #000933; margin: 0; }

/* ══════════════════════════════════════════════════════════════════════════
   LISTS
   ══════════════════════════════════════════════════════════════════════════ */
.lists-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.list-card { border: 1px solid #e0e4ea; border-radius: 8px; overflow: hidden; background: white; }
.list-card-label {
  padding: 8px 16px; font-size: 11px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.5px; color: #6c7489; background: #f9fafb; border-bottom: 1px solid #e0e4ea;
}
.list-card-preview { padding: 20px 24px; }
.elem-ul, .elem-ol {
  margin: 0; padding-left: 20px;
  font-size: 14px; line-height: 20px; color: #000933;
  display: flex; flex-direction: column; gap: 4px;
}

/* ══════════════════════════════════════════════════════════════════════════
   TOKEN TABLES
   ══════════════════════════════════════════════════════════════════════════ */
.token-tables {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 24px;
}
.token-table-col { display: flex; flex-direction: column; gap: 6px; }
.token-table-title {
  font-size: 12px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.3px; color: #6c7489; margin-bottom: 4px;
}
.token-table-row {
  display: flex; align-items: center; gap: 8px; padding: 4px 0;
  border-bottom: 1px solid #f1f1f5;
}
</style>
