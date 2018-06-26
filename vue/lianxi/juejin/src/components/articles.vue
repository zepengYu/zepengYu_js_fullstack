<template>
    <div class="articles">
        <Article :details='details'></Article>
    </div>
       
</template>
<script>
import article from './article'
import axios from 'axios'
export default {
    data(){
        details:[]
    },
    components:{
        "Article": article
    },
    mounted() {
        axios.get('https://www.easy-mock.com/mock/5af3d3a580d0207179ad7924/api/aaa#!method=get')
        .then((res)=>{
            this.details = res.data.data.article;
            console.log(article);
        })
        .catch(function (error) {
            console.log(error);
        })  
    },
}
</script>
<style lang="stylus">

</style>
