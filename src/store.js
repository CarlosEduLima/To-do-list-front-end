import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 10,
        name: "test",
        done: false
      }
    ]
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
      const date = () => {
        var data = new Date(),
            day  = data.getDate().toString(),
            dayF = (day.length == 1) ? '0'+day : day,
            month  = (day.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            monthF = (month.length == 1) ? '0'+month : month,
            yearF = data.getFullYear();
        return dayF+"/"+monthF+"/"+yearF;
    }
      api.post('api/create.php', {task: item.task, date: date, priority: item.priority})
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
    },
    editItem(state, { item, task = item.task, done = item.done }) {
      item.task = task;
      item.done = done;
    },
    removeItem(state, item) {
      state.items.splice(state.items.indexOf(item), 1);

      api.post('api/delete.php', {id: item.id})
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  actions: {
    async getData() {
        // Be sure to set the default value to `undefined` under the `state` object.
         await api
            .get('api/read.php')
            .then(response => {
              this.state.items = response.data.body
              console.log(this.state.items)
              console.log(response.data.body)
              
            })
            .catch(error => {
              console.log(error);
            });
    },
    addItem({ commit }, item) {
      commit("addItem", {
        name: item,
        done: false
      });
    },
    editItem({ commit }, { item, task }) {
      commit("editItem", { item, task });
    },
    toggleItem({ commit }, item) {
      commit("editItem", { item, done: !item.done });
    }
  }
});