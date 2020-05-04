<template>
    <div class="alert-dark">
        <div>
            <b-nav tabs fill>
                <b-nav-item active >Действующие заявки</b-nav-item>
                <b-nav-item>Архив заявок</b-nav-item>
            </b-nav>
        </div>
        <b-card title="Фильтр запросов" class="text-center">
    <b-container>

    <b-row>
        <b-col>
            <b-form-select v-model="locate" :options="tasks"/>
        </b-col>

        <b-col>
            <b-form-select/>
        </b-col>
    </b-row>
        <b-row>
            <b-col>
                <b-form-select/>
            </b-col>
            <b-col>
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
        <b-container>
        <b-row class="justify-center">
            <b-col lg="3" v-for="task in tasks" :key="task.id" style="display: flex; flex-wrap: wrap; justify-content: center;" class="justify-center" >
                <b-card v-if="task.status === '1'" bg-variant="success">
                    <template v-slot:header >
                        <span class="mb-2">Расположение:{{task.loc}}</span>
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
                <b-card v-else-if="task.status === '2'" bg-variant="danger">
                    <template v-slot:header >
                        <span class="mb-2">Расположение:{{task.loc}}</span>
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
                        <p class="text-right ">
                            <b-icon icon="calendar-fill">
                            </b-icon>
                            {{task.date}}
                        </p>

                    </template>
                </b-card>
                <b-card v-else bg-variant="">
                    <template v-slot:header >
                        <span class="mb-2">Расположение:{{task.loc}}</span>
                        <br>
                        <span>Выполняющий:{{task.Perfoming_login}}</span>
                    </template>
                    <b-card-title class="text-center ">
                        {{task.title}}
                    </b-card-title>
                    <template v-slot:footer>
                    <span  style="font-size: 14px">
                        Заявитель:
                    </span>
                        <span style="font-size: 14px">
                            {{task.creator}}
                    </span>
                        <br>
                        <p class="text-right ">
                            <b-icon icon="calendar-fill">
                            </b-icon>
                            {{task.date}}
                        </p>

                    </template>
                </b-card>
            </b-col>
        </b-row>
            <b-modal id="detailed" title="Подробнее">
                <p class="my-4">Hi</p>
            </b-modal>
    </b-container>

    </div>
</template>

<script>
    export default {
        name: "ComponentTask",

        data(){

            return{
                Calendar: '',
                locate: null,
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
                        status:"2"
                    },
                    {
                        id:'3',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                    },
                    {
                        id:'4',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                    },
                    {
                        id:'5',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                    },
                    {
                        id:'6',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
                    },
                    {
                        id:'7',
                        title:'Заявка в Аудитории',
                        loc:'211',
                        Perfoming_login:'Nikita',
                        creator:'GordienkoAP',
                        date:'2020.04.12',
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