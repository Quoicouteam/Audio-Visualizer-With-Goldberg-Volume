<template>
  <div class="lever-block">
    <seven-segment-counter :digit="digits[0]" />
    <seven-segment-counter :digit="digits[1]" />
    <seven-segment-counter :digit="digits[2]" />

    <div
        class="lever"
        ref="leverBlock"
        :style="{ transform: `translateX(-50%) rotate(${angle}deg)` }"
        @mousedown="startDrag"
    >
      <div class="dot"></div>
      <div class="dot-fixation"></div>
    </div>
  </div>
</template>

<script>
import SevenSegmentCounter from "@/components/goldberg_audio/SevenSegmentCounter.vue";

export default {
  components: { SevenSegmentCounter },
  props: {
    modelValue: { type: Number, default: 0 }
  },
  emits: ["update:modelValue"],

  data() {
    return {
      dragging: false,
      angle: 0,
      increaseTimer: null,
      decayTimer: null,
      localValue: this.modelValue
    };
  },

  computed: {
    digits() {
      const val = Math.max(0, Math.min(100, Math.floor(this.localValue)));
      const str = val.toString().padStart(3, "0");
      return str.split("").map(Number);
    }
  },

  watch: {
    modelValue(v) {
      this.localValue = v;
    }
  },

  methods: {
    startDrag() {
      if (this.dragging) return;
      this.dragging = true;
      this.stopDecay();

      window.addEventListener("mousemove", this.onDrag);
      window.addEventListener("mouseup", this.stopDrag);

      this.startIncrease();
    },

    startIncrease() {
      if (this.increaseTimer) return;

      this.increaseTimer = setInterval(() => {
        if (this.localValue < 100) {
          this.localValue++;
          this.$emit("update:modelValue", this.localValue);
        }
      }, 50);
    },

    stopIncrease() {
      if (this.increaseTimer) {
        clearInterval(this.increaseTimer);
        this.increaseTimer = null;
      }
    },

    startDecay() {
      if (this.decayTimer) return;

      this.decayTimer = setInterval(() => {
        if (this.localValue > 0) {
          this.localValue--;
          this.$emit("update:modelValue", this.localValue);
        } else {
          this.stopDecay();
        }
      }, 50);
    },

    stopDecay() {
      if (this.decayTimer) {
        clearInterval(this.decayTimer);
        this.decayTimer = null;
      }
    },

    onDrag(e) {
      if (!this.dragging) return;

      const rect = this.$refs.leverBlock.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.bottom;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      let newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      if (newAngle < 0) newAngle += 360;

      this.angle = newAngle;
    },

    stopDrag() {
      this.dragging = false;
      window.removeEventListener("mousemove", this.onDrag);
      window.removeEventListener("mouseup", this.stopDrag);

      this.stopIncrease();
      this.startDecay();
    }
  }
};
</script>

<style scoped>
.lever-block {
  position: relative;
  width: 40px;
  height: 200px;
  padding: 15px;
}

.lever {
  position: absolute;
  width: 6px;
  height: 50px;

  background: linear-gradient(to bottom, #d6d6d6, #9b9b9b);
  border-radius: 3px;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: bottom center;
  cursor: grab;

  box-shadow:
      inset 0 0 3px rgba(255,255,255,0.7),
      inset 0 -3px 4px rgba(0,0,0,0.3),
      0 3px 10px rgba(0,0,0,0.4);
}

.lever:active {
  cursor: grabbing;
}

/* верхняя ручка */
.dot {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 16px;
  width: 16px;
  border-radius: 50%;

  background: radial-gradient(circle at 30% 30%, #ffffffaa, #222);

  box-shadow:
      0 4px 6px rgba(0,0,0,0.4),
      inset 0 0 6px rgba(255,255,255,0.4);
}

.dot-fixation {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 6px);
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #222;

  box-shadow:
      0 2px 4px rgba(0,0,0,0.6),
      inset 0 0 4px rgba(255,255,255,0.2);
}
</style>
