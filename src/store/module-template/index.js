import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './actions'

const myCustomModule = {
    namespaced: true,
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: state
}

export default myCustomModule