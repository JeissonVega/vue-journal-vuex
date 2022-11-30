import { createStore } from 'vuex'
import journal from '../modules/dayBook/store/journal'

const store = createStore({
    modules: {
        journal: journal
    }
})


export default store