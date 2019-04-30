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
      <h2>Yixing clay teapot</h2>
      <h5>Yíxīng teapots are actually made in nearby Dīngshān, 
        also known as Dingshu, on the west side of Lake Tai.
        <hr>
        The Stonewares of Yixing: from the Ming period to the Present Day
      </h5>
      <vue-flip class="cardflip" :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/zisha.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">
            Zisha teapots are another term for Yixing teapots.
            "Zisha” is the name of the special clay that is found only 
            in Yixing, and means “purple sand". 
            You can see the purple color in this piece quite well.
          </span>
        </div>
      </vue-flip>
      <vue-flip class="cardflip" :width="cardwidth" active-hover>
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
      <vue-flip class="cardflip" :width="cardwidth" active-hover>
          <div class="cardfront" slot="front">
            <img class="teapot" :src="require('~/assets/replica.png')"/>
          </div>
          <div class="cardback" slot="back">
            <span class="label">While this looks like an authentic 
              Yixing clay pot, it is actually a dutch replica.
            </span>
          </div>
        </vue-flip>
      </div>
      
      <div class="col">
      <h2>Japanese Teapots</h2>
      <h5>Japanese teapots are typically designed with an angled handle. 
        Originally, this shape also made it easy to pour when sitting on a 
        tatami mat in a traditional Japanese room, as the host would sit 
        across from the guest rather than pour tea from the side or from 
        behind. 
        <hr>
        The Japanese Tea Ceremony - Heilbrunn Essay for the Met
      </h5>
      <vue-flip class="cardflip" :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/japanese1.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">Japanese Teapot 1.</span>
        </div>
      </vue-flip>
      <vue-flip class="cardflip" :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/japanese2.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">Japanese Teapot 1.</span>
        </div>
      </vue-flip>
      <vue-flip class="cardflip" :width="cardwidth" active-hover>
        <div class="cardfront" slot="front">
          <img class="teapot" :src="require('~/assets/japanese3.png')"/>
        </div>
        <div class="cardback" slot="back">
          <span class="label">Japanese Teapot 1.</span>
        </div>
      </vue-flip>
      </div>
      <div class="col">
        <h2>Special material & modern teapots</h2>
        <h5>While Yixing teapots are the most common type, 
          later Chinese and Japanese craftspeople manufactured high quality 
          teapots from different materials.
        </h5>
        <vue-flip class="cardflip" :width="cardwidth" active-hover>
          <div class="cardfront" slot="front">
            <img class="teapot" :src="require('~/assets/bamboo.png')"/>
          </div>
          <div class="cardback" slot="back">
            <span class="label">Porcelain Teapot Qing dynasty (1644–1911)</span>
          </div>
        </vue-flip>
        <vue-flip class="cardflip" :width="cardwidth" active-hover>
          <div class="cardfront" slot="front">
            <img class="teapot" :src="require('~/assets/silver.png')"/>
          </div>
          <div class="cardback" slot="back">
            <span class="label">
              This silver teapot was made by Te Chi, 
              an Anglo-Chinese craftsman. (19th century)
            </span>
          </div>
        </vue-flip>
        <vue-flip class="cardflip" :width="cardwidth" active-hover>
          <div class="cardfront" slot="front">
            <img class="teapot" :src="require('~/assets/stoneware.png')"/>
          </div>
          <div class="cardback" slot="back">
            <span class="label">This Yixing pot differs from the typical red or purple clay. It has a much more silver or blue color.</span>
          </div>
        </vue-flip>
      </div>
      </no-ssr> 
    </div>
    </transition-group>
    <button class="ceremony"><nuxt-link class="link" to="ceremony"> Enter Ceremony</nuxt-link></button>
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
      and transient. <hr>The Japanese Tea Ceremony and Pancultural Definitions of Art, p33</div>",
      "<div>In 1997 the fifteenth-generation head of the Raku house \
      organized a traveling international exhibition devoted to the \
      history of his family’s ceramics, titled “Raku: A Dynasty of Japanese \
      Ceramists.” The displayed pots, mostly consisting of the roughly \
      shaped, simply glazed tea bowls that characterize the tradition, \
      were dramatically lit to highlight contrasts in texture and slight \
      variations in form<hr>Handmade culture : raku potters, patrons, \
      and tea practitioners in Japan p25</div>"
    ],
    current: 2,
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
h2 {
  margin-bottom: 10px;
}
h5 {
  margin-top: 0;
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
  background-color: rgb(241, 241, 241);
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
  height: 150vh;
  margin: 10px;
}
.cardflip{
  flex: 1 1 auto;
  margin-top: 10px;
}
.label{
  font-size: 0.9em;
}
.ceremony {
  margin-left: 50%;
  transform: translateX(-50%);
}
.link {
  text-decoration: none;
  color: black;
}
</style>
