<!--
* @Component: CopyLabel
* @Maintainer: AI00
* @Description:
-->
<script setup lang="ts">
import { ref } from 'vue'
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'

const id = 'preview-only'

const props = defineProps({
  // Text to copy to clipboard
  text: {
    type: String,
    default: '',
  },
})

const { text } = toRefs(props)
</script>

<template v-slot:activator="{ props }">
  <MdPreview :editorId="id" :modelValue="text" />
</template>


<style scoped lang="scss">
</style>
