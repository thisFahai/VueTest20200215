<template>
    <div>
        <h1>这是一个login组件-------{{msg}}</h1>
    </div>
</template>

<script>
export default{
    // 组件中的data必须是一个function
    data(){
        return {
            msg:'123'
        }
    },
    methods:{
        show(){
            console.log('ok')
        }
    }
}
</script>

<style>

</style>