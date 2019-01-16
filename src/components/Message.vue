<template>
    <div id="messageBox">
        <h3>{{message}}</h3>
    </div>
</template>

<script>
export default {
  name: 'the-team',
  data () {
    return {
        message: "Thats How Mafia Works"
    }
  },
  mounted () {
      setTimeout(function(){
          location.reload();
      },1500);
  }
}
</script>

<style lang="scss">
#messageBox {
    position: absolute;
    color: white;
    border: 3px solid white;
    width: 20rem;
    padding: 1.1rem;
    text-align: center;
    font-size: 1.5rem;
    top: 10%;
    display: none;
}
</style>
