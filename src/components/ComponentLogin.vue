<template>
   <b-container class="">
       <b-card header="Войти в систему" class="mb-2">
        <b-row class="justify-center">
       <b-form @submit="onsubmit" v-if="show">
           <b-row >
               <b-col lg="10" md="8">
           <b-input-group size="lg">
               <b-input-group-prepend is-text>
                   <b-icon
                    icon="person-fill"
                   />
               </b-input-group-prepend>
                <b-input
                id="login"
                v-model="login"
                required
                placeholder="Имя пользователя"
                />
           </b-input-group>
               </b-col>
           </b-row>

           <b-row>
               <b-col lg="10" md="8">
           <b-input-group size="lg">
               <b-input-group-prepend is-text>
                   <b-icon icon="lock-fill"/>
               </b-input-group-prepend>
               <b-input
                id="password"
                v-model="password"
                :rules="passwordRules"
                placeholder="Пароль"
                type="password"
               />
           </b-input-group>
               </b-col>
           </b-row>
       <b-row class="justify-center">
           <b-col cols="5">
            <b-button variant="primary" size="lg" type="submit">войти</b-button>
           </b-col>
       </b-row>
       </b-form>
        </b-row>
       </b-card>
   </b-container>
</template>

<script>
    export default {
        name: "ComponentLogin",
        data(){
            return{
                form: {
                    login: '',
                    password: ''
                },
                show:true
            }
        },
        methods:{
            onsubmit(evt){
              evt.preventDefault()
              alert(JSON.string(this.form))
            },
            clear: function (event) {
                this.login = '';
                this.password = '';
                event.target.reset();

            }
        }
    }
</script>

<style scoped>

</style>