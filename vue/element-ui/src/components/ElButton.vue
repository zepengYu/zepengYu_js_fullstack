<template>
    <button class="el-button"
            @click="handleClick"
            :type="nativeType"
            :class="[type? 'el-button--' + type: '', 
            {'is-disabled': buttonDisabled,'is-loading':loading}, 
            size? 'el-button--' + size:'' ]"
            :disabled="buttonDisabled">
            <i class="el-icon-loading" v-if="loading"></i>
            <i v-if="icon&&!loading" :class="icon"></i>
            <!-- 插槽 -->
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'ElButton',
    props:{
        disabled:Boolean,
        type:{
            type:String,
            default:'default'
        },
        loading: Boolean,
        icon: {
            type: String,
            default: ''
        },
        nativeType:{
            type:String,
            default:'button'
        },
        size:{
            type:String,
            default:'default'
        }
    },
    computed:{
        buttonDisabled(){
            return this.disabled;
        }
    },
    methods:{
        handleClick(evt){
            // console.log(evt);
            //将数据传出去
            this.$emit('click', evt);
        }
    }
}
</script>
<style>

</style>
