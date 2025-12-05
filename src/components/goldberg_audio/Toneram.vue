<template>
  <div class="tonearm">
    <div
      class="arm"
      :style="{ transform: `rotate(${angle}deg)` }"
      @mousedown="startDrag"
    >
      <div class="head"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tonearm',
  data() {
    return {
      angle: 0,
      dragging: false,
      startX: 0,
      startAngle: 0,
      maxAngle: 30,
    };
  },
  methods: {
    startDrag(e) {
      e.preventDefault();
      this.dragging = true;
      this.startX = e.clientX;
      this.startAngle = this.angle;
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('mouseup', this.stopDrag);
    },
    onDrag(e) {
      if (!this.dragging) return;
      const delta = e.clientX - this.startX;
      let newAngle = this.startAngle + delta / 2; // масштабирование движения
      if (newAngle > this.maxAngle) newAngle = this.maxAngle;
      if (newAngle < -this.maxAngle) newAngle = -this.maxAngle;
      this.angle = newAngle;
    },
    stopDrag() {
      this.dragging = false;
      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('mouseup', this.stopDrag);
    }
  }
};
</script>

<style scoped>
.tonearm {
  position: absolute;
  top: 3%;
  left: 20px;
  pointer-events: auto; /* чтобы мышь могла взаимодействовать */
}

.arm {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #d6d6d6, #9c9c9c);
  box-shadow:
    inset 0 0 3px rgba(255,255,255,0.6),
    inset 0 -3px 4px rgba(0,0,0,0.3),
    0 4px 10px rgba(0,0,0,0.4);
  transform-origin: left center;
  cursor: grab;
}

.arm:active {
  cursor: grabbing;
}
</style>
