<template>
  <div class="index">
    <h1>Tea: The Art of the Ceremony</h1>
    <hr/>
    <h2>Mouse over an object to view the card.</h2>
    <h2><nuxt-link to="/gallery">
      <button>Enter the Gallery</button>
    </nuxt-link></h2>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.index {
  background: url('~assets/Pagoda.svg') no-repeat;
  background-size: 350px 32%;
  background-position-x: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
h2 {
  margin-top: 0;
}

</style>
