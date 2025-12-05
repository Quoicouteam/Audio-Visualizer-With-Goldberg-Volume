<template>
  <div class="seven-segment">
    <div
        v-for="(on, index) in segments"
        :key="index"
        :class="['segment', 'segment-' + index, { on }]"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    digit: {
      type: Number,
      default: 0,
      validator: (v) => v >= 0 && v <= 9
    }
  },
  computed: {
    segments() {
      const map = [
        [1,1,1,1,1,1,0], // 0
        [0,1,1,0,0,0,0], // 1
        [1,1,0,1,1,0,1], // 2
        [1,1,1,1,0,0,1], // 3
        [0,1,1,0,0,1,1], // 4
        [1,0,1,1,0,1,1], // 5
        [1,0,1,1,1,1,1], // 6
        [1,1,1,0,0,0,0], // 7
        [1,1,1,1,1,1,1], // 8
        [1,1,1,1,0,1,1], // 9
      ];
      return map[this.digit];
    }
  }
};
</script>

<style scoped>
.seven-segment {
  display: inline-block;
  margin: 0.5px;
  position: relative;
  width: 12px;   /* ещё меньше */
  height: 22px;  /* уменьшили высоту */
}

.segment {
  position: absolute;
  background-color: #222;
  border-radius: 0.5px;
  transition: background 0.2s;
}

.segment.on {
  background-color: red;
}

/* Верхний сегмент A */
.segment-0 {
  top: 0;
  left: 1px;
  width: 10px;
  height: 2px;
}
/* Верхний правый сегмент B */
.segment-1 {
  top: 1px;
  right: 0;
  width: 2px;
  height: 9px;
}
/* Нижний правый сегмент C */
.segment-2 {
  bottom: 1px;
  right: 0;
  width: 2px;
  height: 9px;
}
/* Нижний сегмент D */
.segment-3 {
  bottom: 0;
  left: 1px;
  width: 10px;
  height: 2px;
}
/* Нижний левый сегмент E */
.segment-4 {
  bottom: 1px;
  left: 0;
  width: 2px;
  height: 9px;
}
/* Верхний левый сегмент F */
.segment-5 {
  top: 1px;
  left: 0;
  width: 2px;
  height: 9px;
}
/* Средний сегмент G */
.segment-6 {
  top: 10px;
  left: 1px;
  width: 10px;
  height: 2px;
}
</style>
