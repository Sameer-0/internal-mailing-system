import type { Conversation } from '$lib/utils/common/types';
import { writable } from 'svelte/store';

export const inboxConversations = writable<Conversation[]>([]);

export function SelectAllConversation(is_checked = false) {
	inboxConversations.update((state) => {
		return state?.map((obj) => {
			obj.is_checked = is_checked;
			return obj;
		});
	});
}
