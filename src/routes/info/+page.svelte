<script>
	import { PORTFOLIO_NAME } from '$lib/constants';

	export let data;
	console.log(JSON.stringify(data.info.about, null, 2));
	const {
		ownerName,
		ownerBio: { html: bio },
		ownerPicture: { url: coverImageUrl, alt: coverImageAlt }
	} = data.info.about;
</script>

<svelte:head>
	<title>About | {PORTFOLIO_NAME}</title>
</svelte:head>

<section
	class="mx-auto flex flex-col-reverse gap-y-5 pb-20 lg:h-full lg:flex-row lg:gap-y-0 lg:pb-0"
>
	<div class="grid w-full place-content-center px-2.5 lg:w-1/2 lg:p-10">
		<div class="prose lg:prose-lg">
			{@html bio}
		</div>
		<h1 class="mt-5 font-serif text-2xl font-bold lg:text-4xl">— {ownerName}</h1>
	</div>
	<div class="flex w-full overflow-hidden lg:h-full lg:max-h-screen lg:w-1/2 lg:flex-col">
		<img src={coverImageUrl} alt={coverImageAlt} class="object-cover" />
	</div>
</section>
