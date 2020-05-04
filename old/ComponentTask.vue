<template>
  <v-container>
     <v-layout row wrap align-center>
        <v-flex>
           <v-card-text>
            <v-container>
             <form>
                 <v-layout row>
                <v-select
                        label="Заявитель"
                />
                     <div
                             class="mx-6 hidden-sm-and-down"
                     />
                 <v-select
                         label="Выполняющий"
                 />
              </v-layout>
              <v-layout row>
                  <v-select
                          label="Аудитория"
                  />
                  <div
                          class="mx-12 hidden-sm-and-down"
                  />
                  <datepicker></datepicker>
              </v-layout>
             </form>
            </v-container>
           </v-card-text>
        </v-flex>
     </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "ComponentTask",
    }
</script>

<style scoped>

</style>