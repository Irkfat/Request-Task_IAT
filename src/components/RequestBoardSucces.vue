<template class="">
    <b-row class="justify-center">
        <b-col lg="3" v-for="task in tasks" :key="task.id" style="display: flex; flex-wrap: wrap; justify-content: center;" class="justify-center" >
            <b-card v-if="task.status === '1'" bg-variant="success">
                <template v-slot:header >
                    <span class="mb-2">Расположение:{{task.loc}}</span>
                    <b-button class="float-right" title="Delete">
                        <b-icon icon="x-square-fill" variant="danger" scale="0" class="align-center"></b-icon>
                    </b-button>
                    <br>
                    <span>Выполняющий:{{task.Perfoming_login}}</span>
                </template>
                <b-card-title class="text-center">
                    <b-row>
                        <b-col>
                            {{task.title}}
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
                            {{task.creator}}
                    </span>
                    <br>
                    <b-button class="float-left" variant="primary" v-if="task.status === '2'">
                        Завершить
                    </b-button>
                    <span if="t">Завершенно</span>
                    <p class="text-right">
                        <b-icon icon="calendar-fill">
                        </b-icon>
                        {{task.date}}
                    </p>
                </template>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "RequestBoardSucces",
        data(){
            return{
                tasks:[
                    {
                        id:'1',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                        status:"1",
                    },
                    {
                        id:'2',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                        status:"1"
                    },
                    {
                        id:'3',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                        status:"1"
                    },
                    {
                        id:'4',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                        status:"1"
                    },
                    {
                        id:'5',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                        status:"1"
                    },
                    {
                        id:'6',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                        status:"1"
                    },
                    {
                        id:'7',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                        status:"1"
                    },
                    {
                        id:'8',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>