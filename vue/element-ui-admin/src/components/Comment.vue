<template>
    <div>
        <!--父子间数据传送 通过绑定事件解决 父给一个头 子传送-->
        <comment-form @addComment="addComment"></comment-form>
        
        <comment-list :list="list"></comment-list>
        <pagenation :totalCount="totalCount" :currentPage="currentPage" :pagesize="pagesize" @turnPage="turnPage"></pagenation>
    </div>
</template>
<script>
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import Pagenation from './Pagenation'
export default {
    data(){
        return{
            // totalData 所有的数据 => 当前页面的评论 list
            list:[],
            // Pagination组件无法独立，list
            pagesize:3,
            totalData:[],
            totalCount:0,
            currentPage:1
        }
    },
    components:{
        CommentForm,
        CommentList,
        Pagenation
    },
    methods:{
        addComment(msg){
            // console.log(msg);
            // 将传过来的数据插入
            this.totalData.push({ text:msg });
            this.totalCount = this.totalData.length;
            if(this.totalCount <= this.pagesize){
                this.list = this.totalData
                
            } else {
                this.list = this.totalData.slice(this.totalCount - this.pagesize).reverse();
                this.currentPage = 1;
            }
            
        },
        turnPage(curr){

        }
    }
}
</script>
<style>

</style>
