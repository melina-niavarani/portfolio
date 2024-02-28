<template >
  <div @mousemove="handleMouseMove" class="box">
    <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
    :style="{background: `radial-gradient(600px at ${xPosition}px ${yPosition}px, rgba(29, 78, 216, 0.15), transparent 80%)`}">
    </div>
    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <section class="lg:flex lg:gap-4 lg:justify-between">
        <header class="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <introduction/>
          <navList/>
          <socialMediaList/>
        </header>
        <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
          <!-- *****ABOUT***** -->
          <about/>
          <!-- *****EXPERIENCE***** -->
          <experience/>
          <!-- *****PROJECT*****-->
          <projects/>
          <!-- *****FOOTER***** -->
          <Footer/>
        </main>
      </section>
    </div>
  </div>
</template>
<script>
  import introduction from '@/components/header/Introduction.vue'
  import socialMediaList from '@/components/header/SocialMedia.vue'
  import navList from '@/components/header/NavList.vue'
  import about from '@/components/about/About.vue'
  import projects from '@/components/projects/Projects.vue'
  import experience from '@/components/experience/Experiences.vue'
  import Footer from '@/components/footer/Footer.vue'

  export default {
    components: {
      introduction,
      socialMediaList,
      navList,
      about,
      projects,
      experience,
      Footer
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
       }
    }

  }


</script>
