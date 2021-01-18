<template>
  <div class="todo-item">
    <b-list-group-item v-bind:class="{ checked: item.done }">
      <b-row  cols="12" >
        <b-col>
          <b-form-checkbox
            :checked="item.done"
            @change="changeItemStatus(item);"
          >
          </b-form-checkbox>
        </b-col>
        <b-col>
          <span v-if="!editing" @dblclick="editing = true;">{{
            item.task
          }}</span>
          <input
            class="edit"
            v-show="editing"
            v-focus="editing"
            :value="item.task"
            @keyup.enter="doneEdit"
            @keyup.esc="cancelEdit"
            @blur="doneEdit"
          />
        </b-col>
         <b-col>
         <span >{{
            item.date
          }}</span>
        </b-col>
        <b-col>
         <span >{{
            item.priority
          }}</span>
        </b-col>
        <b-col>
          <b-button-close @click="removeItem(item);"></b-button-close>
        </b-col>
      </b-row>
    </b-list-group-item>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["item"],
  data() {
    return {
      editing: false
    };
  },
  directives: {
    focus(el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus();
        });
      }
    }
  },
  mounted(){
  this.$store.dispatch('getData')
  },
  methods: {
    ...mapActions(["toggleItem", "editItem"]),
    changeItemStatus(item) {
      this.toggleItem(item);
    },
    removeItem(item) {
      this.$store.commit("removeItem", item);
    },
    doneEdit(event) {
      const value = event.target.value.trim();
      const { item } = this;
      if (!value) {
        this.removeItem(item);
      } else if (this.editing) {
        this.editItem({ item, name: value });
        this.editing = false;
      }
    },
    cancelEdit(event) {
      event.target.value = this.item.name;
      this.editing = false;
    }
  }
};
</script>