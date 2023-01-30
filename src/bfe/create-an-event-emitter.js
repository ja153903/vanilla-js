class EventEmitter {
  constructor() {
    /** @type {Map<string, Set<{ callback: Function }>>} */
    this.events = new Map()
  }

  /**
   *
   * @param {string} eventName
   * @param {Function} callback
   * @returns {{ release: Function }}
   */
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set())
    }

    const obj = { callback }
    const subscription = this.events.get(eventName)
    subscription.add(obj)

    return {
      release: () => {
        subscription.delete(obj)
        if (subscription.size === 0) {
          this.events.delete(eventName)
        }
      },
    }
  }

  /**
   *
   * @param {string} eventName
   * @param  {...any} args
   */
  emit(eventName, ...args) {
    this.events.get(eventName)?.forEach((func) => {
      func.callback.apply(this, args)
    })
  }
}
