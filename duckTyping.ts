class Engine {
    start() {
        console.log('Engine start')
    }
}

class DieselEngine {
    start() {
        console.log('Diesel Engine Start')
    }
}

let engine = new Engine();
engine.start();

engine = new DieselEngine();
engine.start();