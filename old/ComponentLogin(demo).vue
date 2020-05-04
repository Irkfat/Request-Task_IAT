<template>
    <v-container>
        <v-layout row wrap align-center>
            <v-flex xs12 sm8 offset-sm2 align-center justify-center>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>войти в систему</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <form>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                v-model="login"
                                                :rules="loginRules"
                                                label="Логин"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                v-model="password"
                                                :rules="passwordRules"
                                                label="Пароль"
                                                class="pa-2">
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row xs12>
                                    <v-flex aling-center>
                                        <v-btn flat block color="primary"
                                               @click.prevent="validateBeforeSubmit">
                                            Войти
                                        </v-btn>
                                    </v-flex>
<!--                                    <v-flex>-->
<!--                                        <v-btn flat block-->
<!--                                               v-on:click="clear">-->
<!--                                            очистить форму-->
<!--                                        </v-btn>-->
<!--                                    </v-flex>-->
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "ComponentLogin2",
        data: () => ({
            valid: true,
            login: '',
            password: '',
             loginRules: [
                 v => !!v || 'Введите имя пользователя ',
             ],
            passwordRules: [
                v => !!v || 'Введите пароль',
            //     v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }),
        methods:{
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