---
tags:
  - 2023s
  - 数学
  - プログラミング
  - プログラミング言語
date: 2023-12-27
title: Lean
---
- 注: [[natural-number-name]]で学んだ内容を元に書いてます
## Tactics
### rfl
- $A=A$を証明する
- reflexivity (反射律) の略
### rw
- `rw [h]`は与式に仮定$h$を代入する (substitute in)
- `h`は仮定を意味する`hypothesis`の頭文字から
- rewrite (書き換え) の略
- e.g. 与式$2y=2(x+1)$, 仮定$h: y=x+1$のとき, `rw [h]`を実行すると与式は$2(x+1)=2(x)$になる
## Theorems (仮定)
### `one_eq_succ_zero`
- `1 = succ 0`を表す
- `succ 0`とは0の次の自然数, つまり1のことである
- `one`と`zero`は任意の自然数に書き換え可能
### `add_zero x`
- `x + 0 = x`
- 引数を省略した場合は`? + 0 = ?`
- `repeat`