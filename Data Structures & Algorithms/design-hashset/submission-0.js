class MyHashSet {
    constructor() {}

    hashSet = {};
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.hashSet[key] = key
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.hashSet[key]
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return Boolean(this.hashSet[key])
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
