<template>
    <b-card title="Фильтр запросов" class="text-center bg-dark text-white">
        <b-container>
            <b-row>
                <b-col>
                    <label>Заявитель</label>
                    <b-form-select name="applicant" id="applicant" :options="applicant"/>
                </b-col>
                <b-col>
                    <label >Исполнитель</label>
                    <b-form-select name="executor" id="executor" :options="executor"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <label>Кабинет</label>
                    <b-form-select/>
                </b-col>
                <b-col>
                    <label>Дата подачи заявки</label>
                    <b-input-group>
                        <b-form-input
                                v-model="Calendar"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                avtocomplete="off"
                        >
                        </b-form-input>
                        <b-input-group-append>
                            <b-form-datepicker
                                    v-model="Calendar"
                                    button-only
                                    right
                                    lacole="ru-Ru"
                            >

                            </b-form-datepicker>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-container>
    </b-card>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "QueryFiter",
        data() {
            return {
                applicant: [],
                users: [],
                executor: [],
            };
        },
        created() {
            this.setapplicantOptions()
        },
        methods: {
            setapplicantOptions: function () {
                axios
                    .get('http://localhost:3000/users')
                    .then(response => {
                        this.applicant = response.data.filter((userApplicant) =>{
                            return parseInt(userApplicant.role) === 1;
                        }).map((userApplicant) => {
                            return {value: userApplicant.id, text: userApplicant.name};
                        });
                        this.executor = response.data.filter((user) =>{
                            return parseInt(user.role)=== 2;
                        }).map((user)=> {
                            return {value: user.id, text: user.name}
                        })

                    })
                    .catch(err => {
                        console.log(err)
                    })

            }
        }
        /*mounted() {
            axios({
                method: 'get',
                url:'http://localhost:3000/users',
                responseType:'JSON'
            })
            .then(function (response) {
                console.log(response)
            })
        }*/
    }
</script>

<style scoped>

</style>