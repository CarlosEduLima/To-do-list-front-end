<template>
  <div class="todo-list">
    <b-row>
      <b-col>
      </b-col>
    </b-row>
    <b-form class="row" @submit.prevent="onSubmit">
      <b-col cols="10">
        <b-form-input
          id="item"
          class="w-100"
          name="item"
          type="text"
          placeholder="Type a task"
          v-model="item"
          autocomplete="off"
        ></b-form-input>
      </b-col>
      <b-col cols="2">
        <b-button type="submit" variant="outline-secondary">Add Task</b-button>
      </b-col>
    </b-form>
    <b-row>
      <b-col md="10">
        <b-list-group>
          <TodoItem v-for="(item, index) in items" :key="index" :item="item" />
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TodoItem from "./ListItem";

export default {
  name: "List",
  components: {
    TodoItem
  },
  data() {
    return {
      item: ""
    };
  },
  computed: {
    ...mapState(["items"])
  },
  methods: {
    ...mapActions("todo", ["addItem"]),
    async onSubmit() {
        await this.addItem(this.item);
        this.item = ""; // Clear form after successful save
    }
  }
};
</script>

<style>
form {
  margin-bottom: 25px;
}
.list-group-item {
  display: flex;
}
.list-group-item:hover {
  background-color: aliceblue;
}
.checked {
  font-style: italic;
  text-decoration: line-through !important;
  color: gray;
  background-color: #eeeeee;
}
</style>
