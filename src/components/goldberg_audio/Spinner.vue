<template>
  <div class="spinner">
    <div
        v-for="(ring, index) in rings"
        :key="index"
        class="ring"
        :style="ringStyle(index)"
    ></div>

    <div
        class="vinyl-center"
        :style="centerStyle"
    ></div>
    <div class="fixator-center"></div>
  </div>
</template>

<script>
export default {
  props: {
    animationRate: { type: Number, default: 0 }
  },

  computed: {
    animationDuration() {
      const base = 3

      if (!this.animationRate) return null

      return base / this.animationRate + "s"
    },

    centerStyle() {
      return this.animationDuration
          ? { animationDuration: this.animationDuration }
          : { animation: "none" }
    }
  },

  methods: {
    ringStyle(index) {
      if (!this.animationDuration) {
        return {
          width: this.rings[index] + "px",
          height: this.rings[index] + "px",
          animation: "none"
        }
      }

      return {
        width: this.rings[index] + "px",
        height: this.rings[index] + "px",
        animationDelay: index * 0.2 + "s",
        animationDuration: this.animationDuration
      }
    }
  },

  data() {
    return {
      rings: [180, 160, 140, 120, 100, 80, 60]
    }
  }
}
</script>

<style>
.spinner {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background: radial-gradient(circle at 30% 30%, #3a3a3a, #141414 70%);
  box-shadow:
      0 4px 20px rgba(0,0,0,0.5),
      inset 0 0 20px rgba(255,255,255,0.05),
      inset 0 0 60px rgba(0,0,0,0.6);
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.1);

  /* создаём эффект концентрических полос */
  box-shadow:
      0 0 3px rgba(255,255,255,0.05),
      inset 0 0 5px rgba(255,255,255,0.08);

  animation-name: rotate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* центральный цветной кружок — более глянцевый */
.vinyl-center {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image:
      radial-gradient(circle at 30% 30%, #ffffff55, #ff0000 60%, #dd0000);

  box-shadow:
      0 2px 6px rgba(0,0,0,0.5),
      inset 0 0 10px rgba(255,255,255,0.3);

  animation-name: rotate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.fixator-center {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #1a1a1a;
  box-shadow:
      0 0 4px rgba(0,0,0,0.6),
      inset 0 0 4px rgba(255,255,255,0.15);
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>
