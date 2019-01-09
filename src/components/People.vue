<template>
    <ul>
        <li v-for="items in theTeam">
            <p>{{items.name}}</p>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'the-team',
  data () {
    return {
      theTeam: [
          {name:'Alex',emitted:'K'},
          {name:'Jame',emitted:'A'},
          {name:'Timo',emitted:'Y'},
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
