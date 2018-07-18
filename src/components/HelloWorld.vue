<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <button @click="updateName()">Test out Vue-RX</button>
    <p>Observable counter: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BehaviorSubject, Observable, timer } from 'rxjs'
import { take } from 'rxjs/operators'

export default Vue.extend({
  name: 'HelloWorld',
  data () {
    return {
      name: 'Vue'
    }
  },
  methods: {
    updateName() {
      timer(200, 500)
        .pipe(
          take(3)
        )
        .subscribe(() => {
          const count$ = < BehaviorSubject < number> > this.$observables.count
          const oldCount = count$.value

          count$.next(oldCount + 1)
        })
    },
  },
  subscriptions () {
    return {
      count: new BehaviorSubject(0),
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
