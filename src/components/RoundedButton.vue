<script setup lang="ts">
import SpinnerReactor from './SpinnerReactor.vue';

defineEmits(['click']);
defineProps({
	loading: {
		type: Boolean,
		default: false,
	},
	pSize: {
		type: String,
		default: 'xs',
		validator: (prop: string) => ['xs', 'sm', 'md', 'lg'].includes(prop),
	},
	text: { type: String, default: undefined },
	icon: {
		type: String,
		default: 'fas fa-plus',
	},
	iconColor: {
		type: String,
		default: '#999999',
	},
	backgroundColor: {
		type: String,
		default: '#FEFEFE',
	},
});
</script>

<template>
	<button :class="[pSize]" class="rounded-button" @click="$emit('click')">
		<spinner-reactor v-if="loading" :theme="'dark'" />
		<div
			v-else
			style="display: flex; align-items: center; justify-content: center"
		>
			<span v-if="text" v-text="text"></span>
			<i v-else :class="icon" />
		</div>
	</button>
</template>

<style scoped>
.rounded-button {
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: filter 0.2s ease-in-out;
	color: v-bind(iconColor);
	background-color: v-bind(backgroundColor);
	border: 2px solid;
}
.rounded-button:focus {
	outline: none;
}
.rounded-button:hover {
	filter: brightness(0.97);
}
.xs {
	font-size: 0.8rem;
	width: 1.5rem;
	height: 1.5rem;
}
.sm {
	width: 2rem;
	height: 2rem;
	font-size: 1rem;
}
.md {
	width: 2.5rem;
	height: 2.5rem;
	font-size: 1.2rem;
}
.lg {
	width: 3rem;
	height: 3rem;
	font-size: 1.4rem;
}
</style>
