import { getCollection } from 'astro:content';

import type { WiredInfoboxType } from "../content.config";

export default async function loadDataByInfoboxType(type: WiredInfoboxType) {
	const items = (await getCollection("docs"))
		.filter(entry =>
			entry.data.infobox
			&& "type" in entry.data.infobox
			&& entry.data.infobox.type === type);

	return items
}
