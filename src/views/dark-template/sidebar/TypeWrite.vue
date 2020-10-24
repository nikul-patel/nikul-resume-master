<template>
  <div class="typewrite">
    <h1>
      Coding is
      <span class="typed-text">{{ typeValue }}</span>
      <span
        class="cursor blinking-cursor"
        :class="{'typing': typeStatus}"
      >|</span>
    </h1>
  </div>
</template>

<script>
import { setTimeout } from 'timers'

export default {
  name: 'TypeWrite',
  data: () => {
    return {
      typeValue : '',
      typeStatus: false,
      typeArray : [
        'fun',
        'awesome',
        'a journey',
        'life',
      ],
      typingSpeed   : 200,
      erasingSpeed  : 100,
      newTextDelay  : 2000,
      typeArrayIndex: 0,
      charIndex     : 0,
    }
  },
  created () {
    setTimeout(this.typeText, this.newTextDelay + 200)
  },
  methods: {
    typeText () {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus)
          this.typeStatus = true
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText () {
      if (this.charIndex > 0) {
        if (!this.typeStatus)
          this.typeStatus = true
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus     = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0
        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    },
  },
}
</script>

<style scoped>
  .typewrite{
    font-family: 'Latin Modern Mono';
  }
    h1 {
        font-size: 1.8rem;
        font-weight: normal;
    }
    .typed-text{
      font-weight: 100;
      font-size: 1.8rem;
      color: #D2B94B;;
    }
    .blinking-cursor {
      font-weight: 100;
      font-size: 1.8rem;
      color: #81d4fa;
      -webkit-animation: 1s blink step-end infinite;
      -moz-animation: 1s blink step-end infinite;
      -ms-animation: 1s blink step-end infinite;
      -o-animation: 1s blink step-end infinite;
      animation: 1s blink step-end infinite;
    }
    @keyframes blink {
      from, to {
        color: transparent;
      }
      50% {
        color: #ffffff;
      }
    }

    @-moz-keyframes blink {
      from, to {
        color: transparent;
      }
      50% {
        color: #ffffff;
      }
    }

    @-webkit-keyframes blink {
      from, to {
        color: transparent;
      }
      50% {
        color: #ffffff;
      }
    }

    @-ms-keyframes blink {
      from, to {
        color: transparent;
      }
      50% {
        color: #ffffff;
      }
    }

    @-o-keyframes blink {
      from, to {
        color: transparent;
      }
      50% {
        color: #ffffff;
      }
    }
</style>
