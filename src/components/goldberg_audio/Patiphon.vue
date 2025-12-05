<template>
  <div class="patiphon-box gofra">
    <spinner :animation-rate="modelValue" />
    <toneram />
    <lever
      :model-value="modelValue"
      @update:model-value="handleProgressChange"
    />
    <div class="switches">
      <div class="switch" v-for="i in 3" :key="i"></div>
    </div>
  </div>
</template>

<script>
import Lever from "@/components/goldberg_audio/Lever.vue";
import Spinner from "@/components/goldberg_audio/Spinner.vue";
import Toneram from "@/components/goldberg_audio/Toneram.vue";

export default {
  props: {
    modelValue: { type: Number, default: 0 }
  },
  emits: ['update:modelValue'],
  components: { Spinner, Lever, Toneram },
  methods: {
    handleProgressChange(value) {
      this.$emit('update:modelValue', value); // просто уведомляем родителя
    }
  }
}
</script>

<style scoped>
.patiphon-box {
  position: relative;
  padding: 10px 0 0 10px;
  width: 300px;
  height: 220px;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;

  background: #1b1b1b;
  box-shadow:
      0 4px 12px rgba(0,0,0,0.5),
      inset 0 6px 12px rgba(255,255,255,0.05),
      inset 0 -6px 12px rgba(0,0,0,0.4);
}

.gofra {
  background: repeating-linear-gradient(
      90deg,
      #0e0e0e,
      #2c2c2c 5px,
      #000000 5px,
      #2c2c2c 10px
  );
}

.switches {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 6px;
}

.switch {
  width: 12px;
  height: 12px;
  border-radius: 3px;

  background: linear-gradient(to bottom, #d6d6d6, #9b9b9b);
  box-shadow:
      inset 0 0 3px rgba(255,255,255,0.7),
      inset 0 -3px 4px rgba(0,0,0,0.3),
      0 2px 6px rgba(0,0,0,0.5);

  cursor: pointer;
  transition: 0.2s;
}

.switch:hover {
  background: linear-gradient(to bottom, #e0e0e0, #a0a0a0);
  box-shadow:
      inset 0 0 4px rgba(255,255,255,0.8),
      inset 0 -4px 5px rgba(0,0,0,0.4),
      0 3px 8px rgba(0,0,0,0.6);
}
</style>
