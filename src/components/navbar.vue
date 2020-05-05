<template>
        <b-nav pills>
            <b-row>
                <b-col>
            <b-nav-item   active  href="Main" class="text-center">Действующие заявки</b-nav-item>
                </b-col>
                <b-col>
            <b-nav-item   active  href="Arhive" class="text-center">Архив заявок</b-nav-item>
                </b-col>
            </b-row>
        </b-nav>
</template>

<script>
    export default {
        name: "navbar",
        data(){
            return{

            }
    },
    }
</script>

<style scoped>

</style>