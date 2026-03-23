/**
 * @zakkster/lite-ease — 30 Penner Easing Functions
 *
 * Every function: (t: number) => number  where t ∈ [0, 1]
 * Composable: lerp(a, b, easeOutBounce(t))
 *
 * Zero dependencies. Pure math. Tree-shakeable.
 *
 * Families: Sine, Quad, Cubic, Quart, Quint, Expo, Circ, Back, Elastic, Bounce
 * Variants: easeIn, easeOut, easeInOut (3 × 10 = 30)
 */

const { PI, sin, cos, sqrt, pow, abs } = Math;
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = (2 * PI) / 3;
const c5 = (2 * PI) / 4.5;
const HALF_PI = PI / 2;

// ── Sine ──
export const easeInSine    = (t) => 1 - cos(t * HALF_PI);
export const easeOutSine   = (t) => sin(t * HALF_PI);
export const easeInOutSine = (t) => -(cos(PI * t) - 1) * 0.5;

// ── Quad ──
export const easeInQuad    = (t) => t * t;
export const easeOutQuad   = (t) => 1 - (1 - t) * (1 - t);
export const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - pow(-2 * t + 2, 2) * 0.5;

// ── Cubic ──
export const easeInCubic    = (t) => t * t * t;
export const easeOutCubic   = (t) => 1 - pow(1 - t, 3);
export const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - pow(-2 * t + 2, 3) * 0.5;

// ── Quart ──
export const easeInQuart    = (t) => t * t * t * t;
export const easeOutQuart   = (t) => 1 - pow(1 - t, 4);
export const easeInOutQuart = (t) => t < 0.5 ? 8 * t * t * t * t : 1 - pow(-2 * t + 2, 4) * 0.5;

// ── Quint ──
export const easeInQuint    = (t) => t * t * t * t * t;
export const easeOutQuint   = (t) => 1 - pow(1 - t, 5);
export const easeInOutQuint = (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - pow(-2 * t + 2, 5) * 0.5;

// ── Expo ──
export const easeInExpo    = (t) => t === 0 ? 0 : pow(2, 10 * t - 10);
export const easeOutExpo   = (t) => t === 1 ? 1 : 1 - pow(2, -10 * t);
export const easeInOutExpo = (t) =>
    t === 0 ? 0 : t === 1 ? 1
    : t < 0.5 ? pow(2, 20 * t - 10) * 0.5
    : (2 - pow(2, -20 * t + 10)) * 0.5;

// ── Circ ──
export const easeInCirc    = (t) => 1 - sqrt(1 - t * t);
export const easeOutCirc   = (t) => sqrt(1 - pow(t - 1, 2));
export const easeInOutCirc = (t) =>
    t < 0.5
        ? (1 - sqrt(1 - pow(2 * t, 2))) * 0.5
        : (sqrt(1 - pow(-2 * t + 2, 2)) + 1) * 0.5;

// ── Back ──
export const easeInBack    = (t) => c3 * t * t * t - c1 * t * t;
export const easeOutBack   = (t) => 1 + c3 * pow(t - 1, 3) + c1 * pow(t - 1, 2);
export const easeInOutBack = (t) =>
    t < 0.5
        ? (pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) * 0.5
        : (pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) * 0.5;

// ── Elastic ──
export const easeInElastic = (t) =>
    t === 0 ? 0 : t === 1 ? 1
    : -pow(2, 10 * t - 10) * sin((t * 10 - 10.75) * c4);
export const easeOutElastic = (t) =>
    t === 0 ? 0 : t === 1 ? 1
    : pow(2, -10 * t) * sin((t * 10 - 0.75) * c4) + 1;
export const easeInOutElastic = (t) =>
    t === 0 ? 0 : t === 1 ? 1
    : t < 0.5
        ? -(pow(2, 20 * t - 10) * sin((20 * t - 11.125) * c5)) * 0.5
        : (pow(2, -20 * t + 10) * sin((20 * t - 11.125) * c5)) * 0.5 + 1;

// ── Bounce ──
const n1 = 7.5625;
const d1 = 2.75;

export const easeOutBounce = (t) => {
    if (t < 1 / d1)           return n1 * t * t;
    else if (t < 2 / d1)      return n1 * (t -= 1.5 / d1) * t + 0.75;
    else if (t < 2.5 / d1)    return n1 * (t -= 2.25 / d1) * t + 0.9375;
    else                       return n1 * (t -= 2.625 / d1) * t + 0.984375;
};

export const easeInBounce    = (t) => 1 - easeOutBounce(1 - t);
export const easeInOutBounce = (t) =>
    t < 0.5
        ? (1 - easeOutBounce(1 - 2 * t)) * 0.5
        : (1 + easeOutBounce(2 * t - 1)) * 0.5;

// ── Linear (identity, for completeness) ──
export const linear = (t) => t;

// ── Lookup map (for string-based access) ──
export const easings = {
    linear,
    easeInSine, easeOutSine, easeInOutSine,
    easeInQuad, easeOutQuad, easeInOutQuad,
    easeInCubic, easeOutCubic, easeInOutCubic,
    easeInQuart, easeOutQuart, easeInOutQuart,
    easeInQuint, easeOutQuint, easeInOutQuint,
    easeInExpo, easeOutExpo, easeInOutExpo,
    easeInCirc, easeOutCirc, easeInOutCirc,
    easeInBack, easeOutBack, easeInOutBack,
    easeInElastic, easeOutElastic, easeInOutElastic,
    easeInBounce, easeOutBounce, easeInOutBounce,
};

// ── Utility helpers ──

/**
 * Clamp result to [0, 1]. Useful for Back/Elastic which overshoot.
 * Usage: lerp(a, b, clamp01(easeOutBack(t)))
 * @param {number} t
 * @returns {number}
 */
export const clamp01 = (t) => t < 0 ? 0 : t > 1 ? 1 : t;

/**
 * Reverse any easing function. easeIn → easeOut equivalent.
 * Usage: const myEaseOut = reverse(easeInQuad);
 * @param {Function} ease
 * @returns {Function}
 */
export const reverse = (ease) => (t) => 1 - ease(1 - t);
