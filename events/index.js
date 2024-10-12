// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    trigger(eventName, ...args) {
        const callbacks = this.events[eventName];
        if (callbacks) {
            callbacks.forEach(callback => callback(...args));
        }
    }

    off(eventName) {
        delete this.events[eventName];
    }
}

module.exports = Events;
