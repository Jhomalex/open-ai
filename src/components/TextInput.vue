<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits(['click', 'keyupEnter', 'update:text', 'keyupEsc']);

const props = defineProps({
	placeholder: { type: String, default: '' },
	text: { type: String, default: '' },
	disabled: { type: Boolean, default: false },
});

const localValue = ref(props.text);
const textInput = ref(null);

watch(localValue, text => emit('update:text', text));
watch(
	() => props.text,
	() => (localValue.value = props.text)
);

defineExpose({ textInput });
</script>

<template>
	<div class="w-full flex flex-col items-top" @click="$emit('click')">
		<div class="relative rounded-md shadow-sm w-full">
			<input
				ref="textInput"
				v-model="localValue"
				autocomplete="off"
				type="text"
				class="text-input"
				:placeholder="placeholder"
				:disabled="disabled"
				@keyup.enter="$emit('keyupEnter')"
				@keyup.esc="$emit('keyupEsc')"
			/>
		</div>
	</div>
</template>

<style scoped>
.text-input {
	display: block;
	width: 100%;
	padding: 0.5rem 1rem;
	box-sizing: border-box;
	border: none;
	border-radius: 0.375rem;
	background-color: #f3f3f3;
	transition: background-color 0.2s ease-in-out;
	appearance: none;
	font-size: 0.875rem;
	line-height: 1.25rem;
	outline: none;
}
</style>
