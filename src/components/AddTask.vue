<template>
    <div>
     <div class="d-flex justify-content-center">
         <b-button class="" variant="primary" v-b-modal.addTask >Новая заявка</b-button>
         <b-modal id="addTask" title="Добавление завки">
             <input>
         </b-modal>
     </div>

    </div>
</template>

<script>
    export default {
        name: "AddTask"
    }
</script>

<style scoped>

</style>