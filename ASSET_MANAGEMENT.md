# 素材管理メモ

このサイトの写真・動画素材は、以下の場所で管理します。

## 素材を置く場所

- 写真: `public/legacy/photos/`
- 動画: `public/legacy/`
- ロゴモーション: `public/legacy/logo.webm` と `public/legacy/logo.mp4`

## サイトで使う素材一覧

サイト内で使う写真・動画の指定は、基本的にこのファイルだけを編集します。

`src/content/media.ts`

## 写真を追加する手順

1. 写真ファイルを `public/legacy/photos/` に入れる
2. `src/content/media.ts` の `photoFragments` に1件追加する
3. `src` には `/legacy/photos/ファイル名.jpg` のように書く

例:

```ts
{
  src: "/legacy/photos/new-photo.jpg",
  alt: "新しく追加した制作風景の写真",
  label: "New scene",
}
```

## サービスカードの写真を差し替える手順

`src/content/media.ts` の `serviceImages` を変更します。

```ts
export const serviceImages = {
  videoProduction: "/legacy/photos/service-1.jpg",
  webProduction: "/legacy/photos/service-5.jpg",
  creativePlanning: "/legacy/photos/service-3.jpg",
};
```

## 動画を差し替える手順

`src/content/media.ts` の `heroMedia` または `legacyMedia` を変更します。

動画は軽量な `webm` と、予備の `mp4` をセットで置くのがおすすめです。
大きすぎる動画は表示が重くなるため、トップページ用はできれば20MB前後までに抑えます。
