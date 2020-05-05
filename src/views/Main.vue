<template>
    <div class="bg-dark" >
        <b-row>
            <b-col>
                <navbar/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <QueryFiter/>
            </b-col>
        </b-row>
        <AddTask/>
        <b-row>
            <b-col>

            </b-col>
        </b-row>
    </div>
</template>

<script>
    //import ComponentTask from "../components/ComponentTask";
    import navbar from "../components/navbar";
    import QueryFiter from "../components/QueryFiter";
    import AddTask from "../components/AddTask";

    export default {
        name: "Main",
        components: { navbar, QueryFiter, AddTask},
        data(){
            return{

            }

        }
    }

</script>

<style scoped>

</style>