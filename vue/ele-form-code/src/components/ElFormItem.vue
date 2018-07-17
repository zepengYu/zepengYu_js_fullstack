<template>
    <div class="el-form-item">
        <label class="el-form-item__label" v-if="label||$slots.label">
            <slot name="label">{{label}}</slot>
        </label> 
        <div class="el-form-item__content">
            <slot/>
        </div>
    </div>   
</template>
<script>
import emitter from '@/mixins/emitter'
export default {
    props:{
        label: String,
        prop: String
    },
    mounted() {
        this.dispatch('ElForm', 'el.form.addField', [this])
    },
    computed:{
        form(){
            let parent = this.$parent
            let parentName = parent.$options.componentName
            while(parentName !== 'ElForm') {
                parent = parent.$parent
                parentName = parent.$options.componentName
            }
            return parent
        }
    },
    methods:{
        validate(trigger, callback) {
            // 当前item 对应的rules是什么 [name]
            // app.vue rules ElForm props form.
            // el-input 值是什么
            const rules = this.form.rules
            console.log(rules)
            const item_rule = rules[this.prop]
            console.log(item_rule)
        }
    },
    mixins: [emitter]
}
</script>
<style>

</style>
