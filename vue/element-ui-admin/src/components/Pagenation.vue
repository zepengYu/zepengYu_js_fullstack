<template>
    <div>
        <el-col :span="24" class="pagenation">
            <el-pagination layout="prev,pager,next" :current-page="currentPage"
            :page-size="pagesize" :total="totalCount" @current-change="handleCurrentPage" style="float:left;margin-top:20px;" background></el-pagination>
        </el-col>
    </div>
</template>
<script>
export default {
    props:['totalCount','currentPage','pagesize'],
    methods:{
        handleCurrentPage(val){
            this.$emit('turnPage', val);
        }
    }
}
</script>
<style>

</style>
