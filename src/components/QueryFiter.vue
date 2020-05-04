<template>
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
</template>

<script>
    export default {
        name: "QueryFiter"
    }
</script>

<style scoped>

</style>