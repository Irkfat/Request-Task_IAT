<template>
    <b-card title="Фильтр запросов" class="text-center bg-dark text-white" >
        <b-container>
            <b-row>
                <b-col>
                    <label>Заявитель</label>
                    <b-form-select name="applicant" id="applicant" :options="applicantOptions"/>
                </b-col>
                <b-col>
                    <label>Исполнитель</label>
                    <b-form-select/>
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
                                avtocomplete = "off"
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
        data(){
            return{
                applicant:[],
                applicantOptions:[],
            };
        },
        created() {
          this.setapplicantOptions()
        },
        methods:{
            setapplicantOptions: function () {
                axios
                .get('http://localhost:3000/users')
                .then(response => {
                    this.applicantOptions = response.data
                    for(var i = 0; i < this.applicant.length; i++) {
                        var options = [];
                        for (var key in this.applicant[i]) {
                            if (key == "id") {
                                options["value"] = this.applicantOptions[i][key]
                            } else if (key == "name") {
                                options["text"] = this.applicantOptions[i][key]
                            }
                        }
                        this.applicantOptions.push(Object.assign({}, options))
                    }
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