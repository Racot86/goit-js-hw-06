class StringBuilder {
    #value

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padStart(param) {
        this.#value = param + this.#value;
    }

    padEnd(param) {
        this.#value = this.#value + param;
    }

    padBoth(param) {
        this.#value = param + this.#value + param;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
