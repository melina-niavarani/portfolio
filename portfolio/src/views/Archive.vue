<template>
    <div @mousemove="handleMouseMove" class="__variable_20b187 group/spotlight relative">
        <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" 
            :style="{background: `radial-gradient(600px at ${xPosition}px ${yPosition}px, rgba(29, 78, 216, 0.15), transparent 80%)`}">
        </div>
        <projectArchive/>
    </div>
</template>

<script>
import projectArchive from '@/components/projects/archive/ArchiveDeatails.vue'

export default {
components: {
    projectArchive,
},
  data() {
    return {
      xPosition: `519`,
      yPosition: `322`,
    }
  },
  methods: {
     handleMouseMove({x , y}) {
      this.xPosition = x
      this.yPosition = y
      console.log( this.xPosition)
     }
  }

}
</script>