export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({ message: 'yuhu' });
	},
} satisfies ExportedHandler<Env>;
