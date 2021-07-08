<template>
  <div class="home">
    <v-text-field
      outlined
      hide-details
      clearable
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3 addTask"
      color="blue-grey lighten-12"
      placeholder="Add your task!"
      append-icon="mdi-plus"
    >
    </v-text-field>

    <v-list class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue-grey lighten-4': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"> </v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn @click.stop="cancelTask(task.id)" class="cancelTask" icon>
                <v-icon color="red lighten-1"> mdi-cancel </v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newTaskTitle: "",
      tasks: [
        {
          id: 1,
          title: "DeFi developement Meeting on WebEx",
          done: false,
        },
        {
          id: 2,
          title: "Read about Proof of spaces(PoS algo.)",
          done: false,
        },
        {
          id: 3,
          title: "Yield farming JIX Swap",
          done: false,
        },
      ],
    };
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false,
      };
      this.tasks.push(newTask);
      this.newTaskTitle = "";
    },
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    cancelTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>
