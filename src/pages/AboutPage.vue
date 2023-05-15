<template>
  <div class="about">
    <Header />
    <About />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";

export default {
  name: "AboutPage",
  components: {
    Header,
    About,
  },
};
</script>
