<template>
  <div class="container">
    <transition-group name="fade" class="mainContainer">
    <div class="textContainer" v-for="(text, index) in texts" 
    :key="'text'+index" v-show="current==index">
      <div class="textContainerI">
        <span class="text" v-html="text"></span>
        <button class="cont" @click="increment">continue</button>
      </div>
    </div>
    <div class="images" key="images" v-show="current==texts.length">
      <no-ssr>
      <div class="col">
      <vue-flip :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/zisha.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">Zisha teapots are a common form of
             teapot made of red clay, with cylindrical shape.</span>
        </div>
      </vue-flip>
      <vue-flip :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/bamboo.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">Zisha teapots are a common form of
             teapot made of red clay, with cylindrical shape.</span>
        </div>
      </vue-flip>
      <vue-flip :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/pumpkin.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">The pumpkin ribbed pattern had already 
            appeared on the gold and silver ware in Northern Dynasty and
             became prevalent in Tang Dynasty. This specific pot was crafted by 
             Master Chen Mingyuan of the Qing Dynasty in a special purple clay style.</span>
        </div>
      </vue-flip>
      </div>
      <div class="col">
      <vue-flip :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/silver.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">The pumpkin ribbed pattern had already 
            appeared on the gold and silver ware in Northern Dynasty and
             became prevalent in Tang Dynasty. This specific pot was crafted by 
             Master Chen Mingyuan of the Qing Dynasty in a special purple clay style.</span>
        </div>
      </vue-flip>
      <vue-flip :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/replica.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">The pumpkin ribbed pattern had already 
            appeared on the gold and silver ware in Northern Dynasty and
             became prevalent in Tang Dynasty. This specific pot was crafted by 
             Master Chen Mingyuan of the Qing Dynasty in a special purple clay style.</span>
        </div>
      </vue-flip>
      <vue-flip :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/stoneware.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">The pumpkin ribbed pattern had already 
            appeared on the gold and silver ware in Northern Dynasty and
             became prevalent in Tang Dynasty. This specific pot was crafted by 
             Master Chen Mingyuan of the Qing Dynasty in a special purple clay style.</span>
        </div>
      </vue-flip>
      </div>
      <div class="col">
      <vue-flip :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/japanese1.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">Japanese Teapot 1.</span>
        </div>
      </vue-flip>
      <vue-flip :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/japanese2.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">Japanese Teapot 1.</span>
        </div>
      </vue-flip>
      <vue-flip :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/japanese3.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">Japanese Teapot 1.</span>
        </div>
      </vue-flip>
      </div>
      </no-ssr>
    </div>
    </transition-group>
  </div>
</template>
<script>
import VueFlip from 'vue-flip';

export default {
  components: {
    VueFlip
  },
  data: ()=>({
    texts:[
      "<div>The Japanese tea ceremony—known variously as chadō (茶道), \
      chanoyu (茶の湯), and sadō and also translated as Teaism and The Way \
      of Tea—is recognized as a non‐Western art form that exhibits tranquility\
      , refinement, and humility along with an appreciation of the irregular \
      and transient. <br/>-The Japanese Tea Ceremony and Pancultural Definitions of Art, p33",
      "In 1997 the fifteenth-generation head of the Raku house \
      organized a traveling international exhibition devoted to the \
      history of his family’s ceramics, titled “Raku: A Dynasty of Japanese \
      Ceramists.” The displayed pots, mostly consisting of the roughly \
      shaped, simply glazed tea bowls that characterize the tradition, \
      were dramatically lit to highlight contrasts in texture and slight \
      variations in form</div>"
    ],
    current: 0,
    cardwidth:'250px',
  }),
  methods: {
    increment(){
      this.current+=1
      if(this.current>this.texts.length) this.current = 0
    }
  }
}
</script>
<style scoped>
.textContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
.textContainerI{
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}
.text {
  width: 50%;
  display: block
}
button{
  margin-top: 1em;
  font-size: 1.2em;
}
.images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.images > *{
  flex:1 1 250px;
  max-width: 250px;
  margin: 0.5em;
}
.cardfront, .cardback{
  background-color: rgb(233, 233, 233);
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0.5em;
  box-sizing: border-box;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);
}
.cardback {
  padding: 1em;
}
.teapot{
  max-width: 100%;
  max-height: 100%;
  height: 200px;
}
.col{
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 10px;
}
.col > *{
  flex: 1 1 33%;
  margin-top: 10px;
}
.label{
  font-size: 0.9em;
}
</style>
