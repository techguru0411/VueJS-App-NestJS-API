import Vuex from 'vuex';
import Vue from 'vue';
import DataTable from './modules/DataTable';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        DataTable,
    }
})