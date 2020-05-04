<template>
    <div>
        <b-container>
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
        </b-container>
        <RequestBoardSucces/>
    </div>
</template>

<script>
    //import ComponentTask from "../components/ComponentTask";
    import navbar from "../components/navbar";
    import QueryFiter from "../components/QueryFiter";
    import RequestBoardSucces from "../components/RequestBoardSucces";
    export default {
        name: "Arhive",
        components: { navbar, QueryFiter, RequestBoardSucces},
        data(){
            return{

            }

        }
    }

</script>

<style scoped>

</style>