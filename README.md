# Radix-UI Dialog Mount Boundary Demo

Radix-UI Dialogコンポーネントのマウント境界による状態管理の動作を実証するサンプルプロジェクト。

## 概要

useStateをDialogContentの内側と外側どちらで宣言するかによって動作が変わることを比較するデモです。

## インストール

```bash
npm install
```

## 使用方法

開発サーバーを起動：

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

## 解説

Radix-UI Dialogの`DialogContent`コンポーネントは、[内部でPresenceコンポーネントを利用](https://github.com/radix-ui/primitives/blob/e7a593acfe8b8c4344788d994760a41e7293d60d/packages/react/dialog/src/dialog.tsx#L240-L246)しています。

Presenceコンポーネントは、[`present`プロパティに応じてchildrenのレンダリングを制御](https://github.com/radix-ui/primitives/blob/e7a593acfe8b8c4344788d994760a41e7293d60d/packages/react/presence/src/presence.tsx#L23)します。

そのため、`DialogContent`の`children`に渡されたコンポーネントは`Dialog`が`open = true`になるまでマウントされず、`open = false`になるとアンマウントされます。

[パターン1](src/components/Pattern1Demo.tsx)では、`DialogContent`の外側で`useState`が宣言されているため、ダイアログを開閉しても状態は保持されます。

一方で、[パターン2](src/components/Pattern2Demo.tsx)では`useState`を宣言しているコンポーネントが`DialogContent`の`children`に渡されているため、ダイアログが開くまで状態は初期化されず、また、ダイアログが閉じると状態は揮発します。

これはDialogにかぎらず、PopoverやContextMenuなど、Context - Trigger - Contentからなるコンポーネントすべてに共通する挙動です。
