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
    }
  }
}
</script>

<style lang="scss">
</style>
