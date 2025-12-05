<template>
  <div class="tonearm">
    <div class="arm"></div>
    <div class="head"></div>
  </div>
</template>

<script>
export default {
  name: 'Tonearm',
};
</script>

<style scoped>
.tonearm {
  position: absolute;
  top: 3%;

  pointer-events: none;
}

/* ——— Рычаг (тонарм) ——— */
.arm {
  position: absolute;
  top: 40px;
  left: 10px;

  width: 100px;
  height: 8px;
  border-radius: 4px;

  background: linear-gradient(to right, #d6d6d6, #9c9c9c);
  box-shadow:
      inset 0 0 3px rgba(255,255,255,0.6),
      inset 0 -3px 4px rgba(0,0,0,0.3),
      0 4px 10px rgba(0,0,0,0.4);
}

/* ——— Головка (держатель иглы) ——— */
.head {
  position: absolute;
  top: 32px;
  left: 100px;

  width: 22px;
  height: 22px;
  border-radius: 50%;

  background: radial-gradient(circle at 30% 30%, #fff8, #444);
  box-shadow:
      0 4px 8px rgba(0,0,0,0.5),
      inset 0 0 6px rgba(255,255,255,0.4);
}
</style>

