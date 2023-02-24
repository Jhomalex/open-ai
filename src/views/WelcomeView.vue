<script setup lang="ts">
import TextInput from '@/components/TextInput.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const loading = ref(false);
const router = useRouter();

function continueToChat() {
	loading.value = true;
	const usernameCleaned =
		username.value.replace(/[^a-zA-Z0-9]/g, '') ||
		`guest-${new Date().getTime()}`;
	localStorage.setItem('chatty-username', username.value);
	router.push({ name: 'chat', params: { username: usernameCleaned } });
}
</script>

<template>
	<div class="welcomePage">
		<h1 class="title">Bienvenido a Chatty</h1>
		<span style="margin-bottom: 1rem">Por favor, primero identifícate</span>
		<TextInput
			v-model:text="username"
			:placeholder="'Escribe tu nombre'"
			style="margin-bottom: 1rem"
		/>
		<PrimaryButton
			:text="'Continuar'"
			@click="continueToChat()"
			:loading="loading"
		/>
	</div>
</template>

<style scoped>
.title {
	font-size: 28px;
	font-weight: bold;
}
.welcomePage {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
