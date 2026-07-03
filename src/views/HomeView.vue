<template>
  <div class="min-h-screen">
    <div class="mx-auto min-h-screen max-w-full px-5 py-10 font-sans md:px-10 md:py-16 lg:px-20 lg:py-0 xl:px-24">
      <section class="site-hero lg:flex lg:gap-10 lg:justify-between">
        <header class="site-hero-header lg:sticky lg:top-0 lg:flex lg:w-[48%] lg:flex-col lg:justify-between lg:py-10 xl:py-14">
          <div :class="['flex', locale === 'fa' ? 'justify-end' : 'justify-start', 'mb-8 lg:mb-6']">
            <LanguageSwitcher />
          </div>
          <introduction/>
          <navList/>
          <socialMediaList/>
        </header>
        <main id="content" class="pt-14 lg:w-[52%] lg:py-20 xl:py-24">
          <about/>
        </main>
      </section>

      <section class="w-full py-4 lg:py-6">
        <services/>
      </section>

      <section class="w-full py-4 lg:py-6">
        <div class="relative z-10">
          <experience/>
        </div>
      </section>

      <section class="w-full py-8 lg:py-12">
        <div class="relative z-10">
          <projects/>
        </div>
      </section>

      <section class="w-full">
        <ContactCTA/>
      </section>

      <section class="w-full">
        <Footer/>
      </section>
    </div>
  </div>
</template>
<script>
  import { useI18n } from 'vue-i18n'
  import introduction from '@/components/header/Introduction.vue'
  import LanguageSwitcher from '@/components/header/LanguageSwitcher.vue'
  import socialMediaList from '@/components/header/SocialMedia.vue'
  import navList from '@/components/header/NavList.vue'
  import about from '@/components/about/About.vue'
  import projects from '@/components/projects/Projects.vue'
  import experience from '@/components/experience/Experiences.vue'
  import services from '@/components/services/Services.vue'
  import ContactCTA from '@/components/contact/ContactCTA.vue'
  import Footer from '@/components/footer/Footer.vue'

  export default {
    setup() {
      const { locale } = useI18n()
      return { locale }
    },
    components: {
      introduction,
      LanguageSwitcher,
      socialMediaList,
      navList,
      about,
      projects,
      experience,
      services,
      ContactCTA,
      Footer
    }
  }
</script>
