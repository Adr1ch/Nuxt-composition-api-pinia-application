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
    <h2>Home page nuxt js framework</h2>

    <div>{{ storeMessage }}</div>

    <!-- <div>{{ responseResult }}</div> -->
    <!-- <div>{{ localData[0].title }}</div> -->
  </section>
</template>

<script>
import { computed, ref } from '@nuxtjs/composition-api'
// eslint-disable-next-line no-unused-vars
import { useTestStore } from '@/stores/test'

export default {
  name: 'IndexPage',
  /*
   ** Nuxt asyncData hook used to render data on server-side
   ** @param $axios Axios module
   ** @param error Nuxt error function
   ** @return returns data to the component
   */
  // middleware({ store, redirect }) {
  //   // If the user is not authenticated
  //   return redirect('/')
  // },
  // validate({ params }) {
  //   console.log('🦝 Index page validate hook -> triggered 🌭')
  //   return new Promise((resolve) =>
  //     setTimeout(() => {
  //       console.log(
  //         '🦝 Index page validate hook -> wait 1 second please, thanks 🌭'
  //       )
  //       resolve(true)
  //       console.log('🦝 Index page validate hook -> finished 🌭')
  //     }, 1000)
  //   )
  // },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const store = useTestStore()

    const storeMessage = computed(() => store.message)

    console.log(storeMessage.value)

    const localData = ref([
      {
        title: '🦝 🍍 Message from Pinia 🦝 🍍 & Nuxt 🍍 🦝',
      },
    ])

    return {
      localData,
      storeMessage,
    }
  },
  // async asyncData({ $axios, $pinia, error }) {
  //   // const fetchData = async () => {
  //   //   try {
  //   //     const { data } = await $axios.get('https://api.nuxtjs.dev/posts')
  //   //     return data
  //   //   } catch (err) {
  //   //     console.error(err)
  //   //   }
  //   // }
  //   // const store = useTestStore($pinia)
  //   // console.log('🍍 Message from Pinia 🍍', store)
  //   // const responseResult = await fetchData()
  //   // return {
  //   //   responseResult,
  //   // }
  // },
  head() {
    return {
      bodyAttrs: {
        class: 'HomePage',
      },
    }
  },
}
</script>
