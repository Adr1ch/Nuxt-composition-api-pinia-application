<template>
  <section>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/search">Search Page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/search?category_id=15&search_query=Lorem1&sort_by=size"
            >Search Page with param</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <h2>Search page nuxt js framework</h2>
  </section>
</template>

<script>
export default {
  name: 'SearchPage',
  created() {
    console.log('created', this.$route)
  },
}
</script>
