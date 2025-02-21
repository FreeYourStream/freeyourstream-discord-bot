import { unfurl } from 'unfurl.js';
import { URL } from 'url';

function get_url_host(url: string): string {
	try {
		return new URL(url).host;
	} catch {
		return url;
	}
}

export async function get_title_from_url(url: string): Promise<string> {
	try {
		const data = await unfurl(url, {
			compress: true,
			oembed: false,
			timeout: 2000,
		});

		return (
			data.open_graph?.title ||
			data.twitter_card?.title ||
			data.title ||
			get_url_host(url)
		);
	} catch {
		return get_url_host(url);
	}
}
