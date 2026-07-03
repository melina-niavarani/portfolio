<template>
  <nav class="nav hidden lg:block">
    <ul class="mt-7 grid w-full max-w-[28rem] grid-cols-2 gap-2 pt-1 xl:mt-8 xl:flex xl:max-w-full xl:flex-nowrap">
      <li class="xl:flex-1">
        <a class="group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 glass-nav glass-nav-hover transition-all duration-300 hover:-translate-y-0.5 xl:min-h-10 xl:justify-center xl:gap-2 xl:px-2" href="#about">
          <span class="nav-indicator h-1.5 w-5 shrink-0 rounded-full transition-all duration-300 group-hover:w-8 group-focus-visible:w-8 motion-reduce:transition-none xl:w-4 xl:group-hover:w-6 xl:group-focus-visible:w-6"></span>
          <span class="nav-text text-xs font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300 xl:text-[0.68rem] xl:tracking-wide">{{ t('nav.about') }}</span>
        </a>
      </li>
      <li class="xl:flex-1">
        <a class="group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 glass-nav glass-nav-hover transition-all duration-300 hover:-translate-y-0.5 xl:min-h-10 xl:justify-center xl:gap-2 xl:px-2" href="#services">
          <span class="nav-indicator h-1.5 w-5 shrink-0 rounded-full transition-all duration-300 group-hover:w-8 group-focus-visible:w-8 motion-reduce:transition-none xl:w-4 xl:group-hover:w-6 xl:group-focus-visible:w-6"></span>
          <span class="nav-text text-xs font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300 xl:text-[0.68rem] xl:tracking-wide">{{ t('nav.services') }}</span>
        </a>
      </li>
      <li class="xl:flex-1">
        <a class="group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 glass-nav glass-nav-hover transition-all duration-300 hover:-translate-y-0.5 xl:min-h-10 xl:justify-center xl:gap-2 xl:px-2" href="#experience">
          <span class="nav-indicator h-1.5 w-5 shrink-0 rounded-full transition-all duration-300 group-hover:w-8 group-focus-visible:w-8 motion-reduce:transition-none xl:w-4 xl:group-hover:w-6 xl:group-focus-visible:w-6"></span>
          <span class="nav-text text-xs font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300 xl:text-[0.68rem] xl:tracking-wide">{{ t('nav.experience') }}</span>
        </a>
      </li>
      <li class="xl:flex-1">
        <a class="group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 glass-nav glass-nav-hover transition-all duration-300 hover:-translate-y-0.5 xl:min-h-10 xl:justify-center xl:gap-2 xl:px-2" href="#projects">
          <span class="nav-indicator h-1.5 w-5 shrink-0 rounded-full transition-all duration-300 group-hover:w-8 group-focus-visible:w-8 motion-reduce:transition-none xl:w-4 xl:group-hover:w-6 xl:group-focus-visible:w-6"></span>
          <span class="nav-text text-xs font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300 xl:text-[0.68rem] xl:tracking-wide">{{ t('nav.projects') }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
