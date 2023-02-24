<script setup lang="ts">
import type { PropType } from 'vue';
import MessageAvatar from './MessageAvatar.vue';

defineProps({
	text: {
		type: String,
		required: true,
	},
	type: {
		type: String as PropType<'me' | 'another'>,
		required: true,
	},
	showAvatar: {
		type: Boolean,
		default: true,
	},
	username: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="messageBoxContainer">
		<MessageAvatar
			:text="username"
			v-if="type === 'another' && showAvatar"
			style="grid-column: 1"
			:type="type"
		/>
		<div
			:class="{
				messageBoxAnother: type === 'another',
				messageBoxMe: type === 'me',
				withoutAvatar: !showAvatar,
			}"
		>
			<span v-text="text" style="font-size: 14px" />
		</div>
		<MessageAvatar
			:text="username"
			v-if="type === 'me' && showAvatar"
			style="grid-column: 1"
			:type="type"
		/>
	</div>
</template>

<style scoped>
.withoutAvatar {
	margin-left: 46px;
}
.messageBoxContainer {
	display: flex;
	margin-top: 0.25rem;
	margin-bottom: 0.25rem;
	padding-right: 0.5rem;
}
.messageBoxAnother {
	background-color: #eaeaea;
	border-radius: 10px 10px 10px 2px;
	padding: 8px 10px;
	color: black;
}
.messageBoxMe {
	background-color: #007aff;
	border-radius: 10px 10px 2px 10px;
	padding: 10px;
	color: white;
}
</style>
