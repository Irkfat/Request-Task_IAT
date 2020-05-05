<template>
    <b-card title="Фильтр запросов" class="text-center bg-dark text-white" >
        <b-container>
            <b-row>
                <b-col>
                    <label>Заявитель</label>
                    <b-form-select/>
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
    export default {
        name: "QueryFiter"
    }
</script>

<style scoped>

</style>