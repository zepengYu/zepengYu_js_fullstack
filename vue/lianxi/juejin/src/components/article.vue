<template>
    <div class="artcile">
        <div class="container" v-for="(item,index) in details" :key="index">
            <div class="first">
                <div class="staus">{{item.status}}</div>
                <div class="zl">专栏</div>
                <div class="author">{{item.author}}</div>
                <div class="time">{{item.time}}小时</div>
                <div class="column">{{item.column}}</div>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="last">
                <div class="like">{{item.starts}}</div>
                <div class="ask">{{item.comments}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        details:{
            type:Array
        }
    }
    
}
</script>
<style lang="stylus">

</style>
