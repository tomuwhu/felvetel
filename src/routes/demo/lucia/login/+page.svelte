<script >
	import { enhance } from '$app/forms';
	let mode = $state(0)
	let { form } = $props();
</script>
{#if mode == 0}
<h1><b>Login</b>/<button class="lb" onclick={() => {mode = 1}}>Register</button></h1>
{:else}
<h1><button class="lb" onclick={() => {mode = 0}}>Login</button>/<b>Register</b></h1>
{/if}
<form method='post' action='?/login' use:enhance>
	<div class="ui input">
		<div class="ui label">Felhasználónév</div>
		<input name='username' />
	</div>
	{#if mode == 1}
	<div class="ui input">
		<div class="ui label">Név</div>
		<input type='text' name='name' />
	</div>
	{/if}
	<div class="ui input">
		<div class="ui label">Jelszó</div>
		<input type='password' name='password' />
	</div>
	{#if mode == 0}
	<button class="ui green button">Bejelentkezés</button>
	{:else}
	<button class="ui red button" formaction='?/register'>Regisztráció</button>
	{/if}
</form>
<p style='color: red'>{form?.message ?? ''}</p>

<style>
	form {
		display: inline-flex;
		flex-direction: column;
		gap: 1rem;
		margin: auto;
		background-color: beige;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 1px 1px 4px inset;
	}
	b {
		color: red;
	}
	button.lb {
		all:unset;
		cursor: pointer;
	}
	button.lb:hover {
		text-decoration: underline;
	}
</style>