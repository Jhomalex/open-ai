<script setup lang="ts">
import SpinnerReactor from '@/components/SpinnerReactor.vue';

defineEmits(['click']);

defineProps({
	text: {
		type: String,
		required: true,
	},
	block: {
		type: Boolean,
		default: false,
	},
	loading: {
		type: Boolean,
		default: false,
	},
	pSize: {
		type: String,
		default: 'xs',
		validator: (prop: string) => ['xs', 'sm', 'md', 'lg'].includes(prop),
	},
});
</script>

<template>
	<button
		class="primary-button"
		:class="[block ? 'block' : pSize]"
		:disabled="loading"
		type="button"
		@click="$emit('click')"
	>
		<spinner-reactor v-if="loading" class="loader" />
		<span v-else class="font-semibold text-light-white" v-text="text" />
	</button>
</template>

<style scoped>
.primary-button {
	background-color: #007aff;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	padding: 0.5rem 1rem;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	border: 0px;
}

.primary-button:hover {
	opacity: 0.9;
}
.loader {
	position: relative;
	top: 0px;
	left: 0%;
}
</style>
