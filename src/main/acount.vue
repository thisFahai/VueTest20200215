<template>
    <div>
        <h1>这是acount组件</h1>

        <router-link to="/acount/login">登陆</router-link>
        <router-link to="/acount/register">注册</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style scoped>
    body div{
        font-style: italic;
    }
</style>