/**
 * Creates a new custom event with the specified name and detail.
 *
 * @param {string} name - The name of the custom event.
 * @param {Object} detail - An object containing additional data to pass with the event.
 * @returns {CustomEvent} The newly created custom event.
 */

function createCustomEvent(name, detail) {
    return new CustomEvent(name, { detail })
}

/**
 * Adds a key-value pair to the detail object.
 * 
 * @param {Object} detail - The object to which the key-value pair will be added.
 * @param {Object} param1 - An object containing the key and value to add.
 * @param {string} param1.key - The key to add to the detail object.
 * @param {*} param1.value - The value associated with the key.
 * @returns {Object} The updated detail object.
 */

export function toDetail(detail, {key, value}) {
    detail[key] = value
    return detail
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
export function emit({element, triggerEventName, eventName, detail, handler = () => {}}) {
    const event = createCustomEvent(eventName, detail)

    element.addEventListener(eventName, (e) => handler(e, event.detail))
    element.addEventListener(triggerEventName, () => {
        element.dispatchEvent(event)
    })
}