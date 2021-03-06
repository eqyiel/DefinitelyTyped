// Type definitions for canvas-confetti 0.0
// Project: https://github.com/catdad/canvas-confetti#readme
// Definitions by: Martin Tracey <https://github.com/matracey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * `confetti` takes a single optional object. When `window.Promise` is available, it will return a Promise to let you know when it is done. When promises are not available (like in IE), it will return
 * `null`. You can polyfill promises using any of the popular polyfills. You can also provide a custom promise implementation to `confetti` through:
 *
 * `const MyPromise = require('some-promise-lib');
 *  const confetti = require('canvas-confetti');
 *  confetti.Promise = MyPromise;`
 *
 * If you call `confetti` multiple times before it is done, it
 * will return the same promise every time. Internally, the same canvas element will be reused, continuing the existing animation with the new confetti added. The promise returned by each call to
 * `confetti` will resolve once all animations are done.
 *
 */
declare function confetti(options?: confetti.Options): Promise<null> | null;

declare namespace confetti {
    /**
     * You can polyfill promises using any of the popular polyfills. You can also provide a promise implementation to `confetti` through this property.
     */
    let Promise: any;

    interface Options {
        /**
         * The number of confetti to launch. More is always fun... but be cool, there's a lot of math involved.
         * @default 50
         */
        particleCount?: number;
        /**
         * The angle in which to launch the confetti, in degrees. 90 is straight up.
         * @default 90
         */
        angle?: number;
        /**
         * How far off center the confetti can go, in degrees. 45 means the confetti will launch at the defined angle plus or minus 22.5 degrees.
         * @default 45
         */
        spread?: number;
        /**
         * How fast the confetti will start going, in pixels.
         * @default 45
         */
        startVelocity?: number;
        /**
         * How quickly the confetti will lose speed. Keep this number between 0 and 1, otherwise the confetti will gain speed. Better yet, just never change it.
         * @default 0.9
         */
        decay?: number;
        /**
         * How many times the confetti will move. This is abstract... but play with it if the confetti disappear too quickly for you.
         * @default 200
         */
        ticks?: number;
        /**
         * Where to start firing confetti from. Feel free to launch off-screen if you'd like.
         */
        origin?: Origin;
        /**
         * An array of color strings, in the HEX format... you know, like #bada55.
         */
        colors?: string[];
        /**
         * The confetti should be on top, after all. But if you have a crazy high page, you can set it even higher.
         * @default 100
         */
        zIndex?: number;
    }
    interface Origin {
        /**
         * The x position on the page, with 0 being the left edge and 1 being the right edge.
         * @default 0.5
         */
        x?: number;
        /**
         * The y position on the page, with 0 being the left edge and 1 being the right edge.
         * @default 0.5
         */
        y?: number;
    }
}

export = confetti;
