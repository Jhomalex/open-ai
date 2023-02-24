<script lang="ts" setup>
defineProps({
	theme: {
		type: String,
		default: 'light',
		validator: (prop: string) => ['light', 'dark', 'primary'].includes(prop),
	},
	size: { type: Number, default: 25 },
});
</script>

<template>
	<div>
		<svg
			style="
				margin: 0px auto;
				background: none;
				display: block;
				shape-rendering: auto;
			"
			:width="`${size}px`"
			:height="`${size}px`"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<circle
				cx="50"
				cy="50"
				r="32"
				stroke-width="8"
				:stroke="
					theme === 'light'
						? '#ffffff'
						: theme === 'primary'
						? '#CC014D'
						: '#5C5C5C'
				"
				stroke-dasharray="50.26548245743669 50.26548245743669"
				fill="none"
				stroke-linecap="round"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;1"
					values="0 50 50;360 50 50"
				/>
			</circle>
		</svg>
	</div>
</template>
