<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from 'svelte-awesome';
	import { DEFAULT_THEME, THEME_SWITCH_ITEMS } from '$siteData';
	import { onDestroy, onMount } from 'svelte';
	import type { ThemeObj } from '$lib/types';
	import { check } from 'svelte-awesome/icons';
	
	const themeSwitchItems: Array<ThemeObj> = $THEME_SWITCH_ITEMS;
	const defaultTheme: ThemeObj = $DEFAULT_THEME;
	const themeSelectorList = [...[defaultTheme], ...themeSwitchItems];
	let currentThemeObj: ThemeObj = defaultTheme;

	/**
	 * Get the system theme.
	 */
	const _systemTheme = () => {
		if (browser) {
			if (
				localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
	
	/**
	 * Theme event listner.
	 */
	const _themeEventListener = () => {
		if(browser){window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', _systemTheme);}
	}

	/**
	 * Theme switcher event.
	 * @param themeId
	 */
    const _handleSwitchDarkMode = (themeId: number) => {
		const theme = _getTheme(themeId) || defaultTheme;
		if(theme.value != 'system'){
			localStorage.setItem('theme', theme.value);
			theme.value === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
		} else{
			localStorage.removeItem('theme') ;
			_systemTheme();
		}
		currentThemeObj = theme;
    }

	/**
	 * Get theme selected by user.
	 * @param themeId
	 */
	const _getTheme = (themeId: number) => {
		return themeSwitchItems.find(theme => theme.id === themeId);
	}

	onMount(() => {
		_themeEventListener();
		_systemTheme();
	});	
	
	onDestroy(() => {
		if(browser){window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', _systemTheme );}
	});	
</script>

{#if themeSelectorList}	
	<div class=" relative inline-block text-left dropdown">
		<button class="flex justify-center w-full transition duration-150 ease-in-out rounded-md text-gray-700 dark:text-white" 
		type="button" aria-haspopup="true" aria-expanded="true" aria-controls="">
				<Icon data={currentThemeObj.icon} label={currentThemeObj.label} />
		</button>
		<div class="absolute bg-white dark:bg-black opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 flex flex-col">
			{#each themeSelectorList as theme (theme.id)}
				<button on:click={() => _handleSwitchDarkMode(theme.id)} disabled={(theme.value === currentThemeObj.value)} class="flex justify-strat items-center">
					<span class="flex justify-start items-center">
						<Icon data={theme.icon} label="{theme.label}" class="mr-1.5" /> {theme.label}
					</span>
					{#if theme.value === currentThemeObj.value}<Icon data={check} label="selected" class="mr-1.5" />{/if}
				</button>
			{/each}
		</div>
	</div> 
{/if}

<style>
	.dropdown:focus-within .dropdown-menu {
	  opacity:1;
	  transform: translate(0) scale(1);
	  visibility: visible;
	}
</style>