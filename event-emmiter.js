function createCustomEvent(name, detail) {
    return new CustomEvent(name, { detail })
}

/**
 * Emits a custom event on the given element when the given trigger event is emitted.
 * The custom event has the given name and detail.
 * The given handler will be called when the custom event is emitted.
 * @param {Object} options
 * @param {HTMLElement} options.element The element that will emit the event.
 * @param {string} options.triggerEventName The event that will be listened for to trigger the custom event.
 * @param {string} options.eventName The name of the custom event.
 * @param {*} options.detail The detail of the custom event.
 * @param {function} options.handler The handler for the custom event.
 */
export function emit({element, triggerEventName, eventName, detail, handler}) {
    const event = createCustomEvent(eventName, detail)
    element.addEventListener(eventName, handler)
    element.addEventListener(triggerEventName, () => {
        element.dispatchEvent(event)
    })
}