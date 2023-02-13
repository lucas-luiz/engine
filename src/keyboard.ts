export class Keyboard {
    keys: Map<string, boolean>
    constructor(window: Window) {
        this.keys = new Map<string, boolean>()
        window.addEventListener("keydown", (e) => {
            const key = e.key.toUpperCase()
            this.keys.set(key, true)
        })
        window.addEventListener("keyup", (e) => {
            const key = e.key.toUpperCase()
            this.keys.set(key, false)
        })
    }

    check(key){
        return this.keys.get(key)
    }
}