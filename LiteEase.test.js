import { describe, it, expect } from 'vitest';
import * as E from './LiteEase.js';

describe('lite-ease', () => {
    const fns = Object.entries(E.easings);

    it('exports 31 easing functions', () => { expect(fns.length).toBe(31); });
    it('all return 0 at t=0 (except Back/Elastic)', () => {
        for (const [name, fn] of fns) {
            if (name.includes('Back') || name.includes('Elastic')) continue;
            expect(fn(0)).toBeCloseTo(0, 4);
        }
    });
    it('all return 1 at t=1', () => {
        for (const [, fn] of fns) expect(fn(1)).toBeCloseTo(1, 4);
    });
    it('easeOutBounce stays in [0, 1]', () => {
        for (let t = 0; t <= 1; t += 0.01) {
            const v = E.easeOutBounce(t);
            expect(v).toBeGreaterThanOrEqual(-0.01);
            expect(v).toBeLessThanOrEqual(1.01);
        }
    });
    it('easeOutBack overshoots past 1', () => {
        expect(E.easeOutBack(0.5)).toBeGreaterThan(1);
    });
    it('easeOutElastic overshoots past 1', () => {
        expect(E.easeOutElastic(0.15)).toBeGreaterThan(1);
    });
    it('clamp01 clamps overshoot', () => {
        expect(E.clamp01(1.5)).toBe(1);
        expect(E.clamp01(-0.2)).toBe(0);
        expect(E.clamp01(0.5)).toBe(0.5);
    });
    it('reverse inverts an easing', () => {
        const rev = E.reverse(E.easeInQuad);
        expect(rev(0)).toBeCloseTo(0, 4);
        expect(rev(1)).toBeCloseTo(1, 4);
    });
    it('linear is identity', () => {
        expect(E.linear(0.37)).toBeCloseTo(0.37, 10);
    });
});
