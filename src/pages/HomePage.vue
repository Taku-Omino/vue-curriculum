<template>
  <div class="home">
    <Header />
    <Work />
    <Blog />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Work from "@/components/Work.vue";
import Blog from "@/components/Blog.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    Work,
    Blog,
  },
};
</script>
