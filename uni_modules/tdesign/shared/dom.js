import {
	isFunction,
	isString
} from 'lodash-es';


export function getAttach(node) {
	const attachNode = isFunction(node) ? node() : node;

	if (isString(attachNode)) {
		return document.querySelector(attachNode);
	}
	if (attachNode instanceof HTMLElement) {
		return attachNode;
	}
	return document.body;
}

export function stopPropagation(event) {
	event.stopPropagation();
}

export function preventDefault(event, isStopPropagation) {
	if (typeof event.cancelable !== 'boolean' || event.cancelable) {
		// The event can be canceled, so we do so.
		event.preventDefault();
	}

	if (isStopPropagation) {
		stopPropagation(event);
	}
}