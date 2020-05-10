<template>
    <div>
     <div class="d-flex justify-content-center">
         <b-button class="" variant="primary" v-b-modal.addTask >Новая заявка</b-button>
         <b-modal id="addTask" title="Добавление завки">
             <b-form-input>
             <b-form-input placeholder="Опишите неиспарвность" v-modal=""></b-form-input>
                 <b-input-group-append>
                     <audio-recorder>
                         
                     </audio-recorder>
                 </b-input-group-append>
             </b-form-input>
         </b-modal>
     </div>

    </div>
</template>

<script>
    export default {
        name: "AddTask",
        methods:{
            callback (data) {
                console.debug(data)
            }
        }
    }
</script>

<style scoped>

</style>