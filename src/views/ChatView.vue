<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from 'vue';
import MessageBox from '@/components/MessageBox.vue';
import RoundedButton from '@/components/RoundedButton.vue';
import TextInput from '@/components/TextInput.vue';
import { useRoute } from 'vue-router';
import { messagesDb } from '@/utils/firebase';
import { useCollection } from 'vuefire';
import { addDoc } from 'firebase/firestore';
import type { Message } from '@/utils/Message';
import Swal from 'sweetalert2';
import { openai } from '@/utils/chatGpt';
import { historial } from '@/utils/historial';

const text = ref('');
const username = ref('');
const route = useRoute();
const messages = useCollection(messagesDb) as unknown as Ref<Message[]>;
const suggestedResponses = ref<string[]>([]);
const summaryHistorial = ref('');

onMounted(() => {
	username.value = (route.params.username as string) || '';
	requestSummaryHistorial();
});

const messagesList = computed(() => {
	const mess = [...messages.value];
	return mess.sort((a, b) => a.createdAt - b.createdAt);
});

async function requestSuggestedResponses() {
	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `Dame 3 posibles respuestas al siguiente chat: \n ${messagesToText()}`,
		temperature: 0.9,
		max_tokens: 100,
		n: 1,
		stream: false,
		logprobs: null,
	});

	const res = response.data.choices[0].text || '';
	suggestedResponses.value = res
		.split('\n')
		.filter(Boolean)
		.map(r => r.slice(3));

	return suggestedResponses.value;
}

async function requestSummaryHistorial() {
	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `Resúmeme la siguiente conversación: \n ${historial.map(
			m => `{
			sender: ${m.from},
			message: ${m.content}
			}`
		)}`,
		temperature: 0.9,
		max_tokens: 800,
		n: 1,
		stream: false,
		logprobs: null,
	});

	summaryHistorial.value = response.data.choices[0].text || '';
}

function messagesToText() {
	const mess = [...messages.value];
	const text = mess
		.sort((a, b) => a.createdAt - b.createdAt)
		.map(m => `${m.name}: ${m.text}`)
		.join('\n');
	return text;
}

async function openHistorialModal() {
	await Swal.fire({
		title: 'Resúmen del historial de conversaciones',
		text: summaryHistorial.value,
		confirmButtonColor: '#007aff',
		confirmButtonText: 'Seleccionar',
	});
}

async function openModal() {
	await Swal.fire({
		title: 'Selecciona alguna de las respuestas sugeridas',
		input: 'select',
		inputOptions: requestSuggestedResponses(),
		inputPlaceholder: 'Selecciona una respuesta',
		showCancelButton: true,
		confirmButtonColor: '#007aff',
		confirmButtonText: 'Seleccionar',
		cancelButtonText: 'Cancelar',
		inputValidator: (value: unknown) => {
			if (!value) return 'Necesitas seleccionar alguna';
			text.value = suggestedResponses.value[Number(value)];
		},
	});
}

function sendMessage() {
	addDoc(messagesDb, {
		text: text.value,
		name: username.value,
		createdAt: new Date().getTime(),
	});
	text.value = '';
}
</script>

<template>
	<div class="container">
		<div class="header">
			<div class="leading" />
			<span v-text="username" @click="openHistorialModal()" class="title" />
		</div>
		<div class="messagesBox">
			<div
				v-for="(message, key) in messagesList"
				:key="key"
				:class="{
					messageMe: message.name === username,
					messageAnother: message.name !== username,
				}"
			>
				<MessageBox
					:text="message.text"
					:type="message.name === username ? 'me' : 'another'"
					:username="message.name[0]"
				/>
			</div>
		</div>
		<div class="inputBox">
			<RoundedButton
				:icon="'fa-regular fa-lightbulb'"
				style="margin-right: 0.5rem"
				:background-color="'#007aff'"
				:icon-color="'#fff'"
				:border-color="'#007aff'"
				@click="openModal()"
			/>

			<TextInput
				v-model:text="text"
				:placeholder="'Escribe el mensaje aquí...'"
				style="width: 100%"
				@keyup-enter="sendMessage"
			/>
		</div>
	</div>
</template>

<style scoped>
.messagesBox {
	height: calc(100vh - 8.5rem);
	overflow-y: auto;
}
.messageMe {
	display: flex;
	justify-content: flex-end;
}
.messageAnother {
	display: flex;
	justify-content: flex-start;
}
.title:hover {
	cursor: pointer;
}
.inputBox {
	display: flex;
	align-items: center;
	position: fixed;
	bottom: 0px;
	width: 98%;
	height: 3.5rem;
	box-sizing: border-box;
}
.container {
	padding: 0rem 1rem;
}
.header {
	height: 3rem;
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	font-size: 1.5rem;
	border-bottom: 2px solid #ccc;
	margin-bottom: 1rem;
}
.leading {
	border-radius: 50%;
	height: 0.5rem;
	width: 0.5rem;
	background-color: green;
	margin: 0.5rem 0.5rem 0 0;
}
</style>
