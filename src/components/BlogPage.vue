<template>
  <div id="app">
    <img :src="articles.coverUrl"/>
   
   
    <h1>{{articles.title}}</h1>
    <h2>{{articles.subtitle}}</h2>
    <p>Posted by <span>{{articles.author}}</span></p>
    <p v-for="p in articles">
       <span v-html="p"></span>
    </p>
   
   
  </div>
</template>
 
<script>
import { getArticles } from '@polyblog/polyblog-js-client';
import { useRouter } from 'vue-router';
export default {
  name:'BlogPage',
  data() {
    return {
      articles: [],
    }
  },
  async created() {
    this.articles = await this.getArticles();
  },
  methods: {
     
    getArticles: async ()=>{
      const param = useRouter().currentRoute.value.params.articleSlug
      const paramlan = useRouter().currentRoute.value.params.lan
      let data = await getArticles({
      // signup at https://www.polyblog.io/signup to get your blogId
      blogId: 'YOUR_BLOGID',
      published: true,
      param,
      locale: paramlan
    });
    data = data?.[0];
    console.log(data)
   
    return data;
    }
  },
 
 
}
</script>
