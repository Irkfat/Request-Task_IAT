<template>
    <div>
    <navbar/>
    <QueryFiter/>
    </div>
</template>

<script>
    //import ComponentTask from "../components/ComponentTask";
    import navbar from "../components/navbar";
    import QueryFiter from "../components/QueryFiter";

    export default {
        name: "Main",
        components: { navbar, QueryFiter},
        data(){
            return{

            }

        }
    }

</script>

<style scoped>

</style>