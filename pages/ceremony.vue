<template>
  <div class="mood">

  </div>
</template>
<style>
.mood {
  /* background: rgb(91,90,0);
  background: linear-gradient(0deg, rgba(91,90,0,1) 0%, rgba(0,0,0,1) 100%); */
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(180deg, #000000, #4f4900);
  background-size: 400% 120%;

  -webkit-animation: Ceremony 10s ease infinite;
  -moz-animation: Ceremony 10s ease infinite;
  animation: Ceremony 10s ease infinite;

  @-webkit-keyframes Ceremony {
      0%{background-position:50% -150%}
      50%{background-position:50% 150%}
      100%{background-position:50% 150%}
  }
  @-moz-keyframes Ceremony {
      0%{background-position:50% -50%}
      50%{background-position:50% 50%}
      100%{background-position:50% -50%}
  }
  @keyframes Ceremony {
      0%{background-position:50% -150%}
      50%{background-position:50% 150%}
      100%{background-position:50% -150%}
  }
}
</style>
