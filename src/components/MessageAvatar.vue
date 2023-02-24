<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
	text: {
		type: String,
		required: true,
	},
	type: {
		type: String as PropType<'me' | 'another'>,
		required: true,
	},
});
</script>

<template>
	<div
		class="avatar"
		:class="{ another: type === 'another', me: type === 'me' }"
	>
		<span v-text="text.toUpperCase()" class="avatarText" />
	</div>
</template>

<style scoped>
.avatar {
	width: 36px;
	height: 36px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.avatarText {
	font-size: 20px;
	font-weight: bold;
	font-size: 14px;
}
.me {
	margin: 0px 0px 0px 10px;
	background-color: #007aff;
	color: white;
}
.another {
	margin: 0px 10px 0px 0px;
	background-color: #eaeaea;
	color: black;
}
</style>
