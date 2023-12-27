---
title: Nim (Nimble) で依存パッケージをプロジェクトごとに分ける
tags:
  - Nim
  - Nimble
date: 2023-12-26
---
## TL;DR
### 下準備
```sh
# local deps modeに切り替え
nimble refresh -l
# エディタ向け設定を作成
echo 'nimblePath = "nimbledeps/pkgs"' >> nim.cfg
```
### 任意のパッケージをインストール
```sh
nimble install {任意のパッケージ名}
```
### 依存パッケージを全てインストール
```sh
nimble install -dy
```
## 詳細説明
[Nim (Nimble) で依存パッケージをプロジェクトごとに分ける](https://zenn.dev/lafixier/scraps/0246cb279a9753) (Zenn)