import { getInboxConversation } from '$lib/server/model/Common';

export async function load({}) {
	try {
		const result = await getInboxConversation(2);

		console.log('ROWS::::::::::', result.rows[0]);

		return {
			inbox: result.rows[0]?.get_inbox_conversation
		};
	} catch (err) {
		console.log(err);
	}
}