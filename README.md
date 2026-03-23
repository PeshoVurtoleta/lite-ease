# @zakkster/lite-ease

[![npm version](https://img.shields.io/npm/v/@zakkster/lite-ease.svg?style=for-the-badge&color=latest)](https://www.npmjs.com/package/@zakkster/lite-ease)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@zakkster/lite-ease?style=for-the-badge)](https://bundlephobia.com/result?p=@zakkster/lite-ease)
[![npm downloads](https://img.shields.io/npm/dm/@zakkster/lite-ease?style=for-the-badge&color=blue)](https://www.npmjs.com/package/@zakkster/lite-ease)
[![npm total downloads](https://img.shields.io/npm/dt/@zakkster/lite-ease?style=for-the-badge&color=blue)](https://www.npmjs.com/package/@zakkster/lite-ease)
![TypeScript](https://img.shields.io/badge/TypeScript-Types-informational)
![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 🎢 What is lite-ease?

`@zakkster/lite-ease` is the complete set of Robert Penner easing equations as individual, tree-shakeable ES module exports.

It gives you:

- 🎢 30 easing functions (10 families × 3 variants)
- 🧮 Pure math: `(t: number) => number` where t ∈ [0, 1]
- 🔗 Composable: `lerp(a, b, easeOutBounce(t))`
- 🛡️ `clamp01()` wrapper for Back/Elastic overshoot
- 🔄 `reverse(ease)` creates the inverse curve
- 📖 `easings` lookup map for string-based access
- 0️⃣ Zero dependencies, pure math, no allocation
- 🪶 < 1 KB minified (entire library)

Part of the [@zakkster/lite-*](https://www.npmjs.com/org/zakkster) ecosystem — micro-libraries built for deterministic, cache-friendly game development.

## 🚀 Install

```bash
npm i @zakkster/lite-ease
```

## 🕹️ Quick Start

```javascript
import { easeOutBounce, easeInOutElastic, clamp01, reverse } from '@zakkster/lite-ease';
import { lerp } from '@zakkster/lite-lerp';

// Compose with any interpolation
const y = lerp(startY, endY, easeOutBounce(t));

// Clamp overshoot (Back/Elastic can exceed 1.0)
const safe = lerp(0, 255, clamp01(easeOutBack(t)));

// Create inverse curve
const myEaseOut = reverse(easeInCubic);

// String-based lookup (useful for configs/JSON)
import { easings } from '@zakkster/lite-ease';
const ease = easings[config.easing]; // 'easeOutBounce' → function
```

## 📊 Comparison

| Library | Size | Functions | Format | Install |
|---------|------|-----------|--------|---------|
| bezier-easing | ~3 KB | Custom curves | Class | `npm i bezier-easing` |
| eases | ~2 KB | 31 | CommonJS | `npm i eases` |
| **lite-ease** | **< 1 KB** | **31 + helpers** | **ESM, tree-shakeable** | **`npm i @zakkster/lite-ease`** |

## ⚙️ API

### 10 Families × 3 Variants

| Family | easeIn | easeOut | easeInOut |
|--------|--------|---------|-----------|
| Sine | `easeInSine` | `easeOutSine` | `easeInOutSine` |
| Quad | `easeInQuad` | `easeOutQuad` | `easeInOutQuad` |
| Cubic | `easeInCubic` | `easeOutCubic` | `easeInOutCubic` |
| Quart | `easeInQuart` | `easeOutQuart` | `easeInOutQuart` |
| Quint | `easeInQuint` | `easeOutQuint` | `easeInOutQuint` |
| Expo | `easeInExpo` | `easeOutExpo` | `easeInOutExpo` |
| Circ | `easeInCirc` | `easeOutCirc` | `easeInOutCirc` |
| Back | `easeInBack` | `easeOutBack` | `easeInOutBack` |
| Elastic | `easeInElastic` | `easeOutElastic` | `easeInOutElastic` |
| Bounce | `easeInBounce` | `easeOutBounce` | `easeInOutBounce` |

### Helpers

- `linear(t)` — Identity function
- `clamp01(t)` — Clamp to [0, 1]. Back/Elastic overshoot safely.
- `reverse(ease)` — Create the inverse: `reverse(easeIn) ≈ easeOut`
- `easings` — `Record<string, Function>` for dynamic lookup

## 🧪 Benchmark

```
31 easing functions, 1M calls each:
  All functions: < 0.01ms per call (pure arithmetic)
  No allocation, no branching (except Bounce/Elastic)
  Tree-shakeable: unused functions are eliminated by bundlers
```

## 📦 TypeScript

Full declarations included in `lite-ease.d.ts`.

## 📚 LLM-Friendly Documentation

See `llms.txt` for AI-optimized metadata and usage examples.

## License

MIT
