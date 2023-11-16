import SensorGrammarVisitor from "./lib/SensorGrammarVisitor.js"

class Visitor extends SensorGrammarVisitor {
    constructor(store, debug) {
        super();
        this.store = store;
        this.debug = debug || false;
    }

    log(msg) {
        if (this.debug) {
            console.log(msg);
        }
    }

}

export default Visitor;