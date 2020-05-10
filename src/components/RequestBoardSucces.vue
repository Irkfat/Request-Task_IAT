<template class="">
    <b-row class="justify-center">
        <b-col lg="3" v-for="ticket in tickets" :key="ticket.id" style="display: flex; flex-wrap: wrap; justify-content: center;" class="justify-center" >
            <b-card v-if="ticket.status === 1" bg-variant="success">
                <template v-slot:header >
                    <span class="mb-2">Расположение: {{ticket.room}}</span>
                    <b-button class="float-right" title="Delete">
                        <b-icon icon="x-square-fill" variant="danger" scale="0" class="align-center"></b-icon>
                    </b-button>
                    <br>
                    <span>Выполняющий: {{ticket.executor}}</span>
                </template>
                <b-card-title class="text-center">
                    <b-row>
                        <b-col>
                            {{ticket.title}}
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-button v-b-modal.detailed variant="primary">Подробнее</b-button>
                        </b-col>
                    </b-row>
                </b-card-title>
                <template v-slot:footer>
                    <span  style="font-size: 14px">
                        Заявитель:
                    </span>
                    <span style="font-size: 14px">
                            {{ticket.applicant}}
                    </span>
                    <br>
                    <b-button class="float-left" variant="primary" v-if="ticket.status === 2">
                        Завершить
                    </b-button>
                    <span >Завершенно</span>
                    <p class="text-right">
                        <b-icon icon="calendar-fill">
                        </b-icon>
                        {{ticket.date}}
                    </p>
                </template>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
    import axios from "axios";

    export default {
        name: "RequestBoardSucces",
        data(){
            return{
                tickets:[]
            }
        },
        mounted() {
            axios
             .get('http://localhost:3000/ticket')
              .then (res => (
                  console.log(this.tickets = res.data)
              ))
        }
    }
</script>

<style scoped>

</style>