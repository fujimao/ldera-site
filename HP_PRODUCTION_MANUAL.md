# 株式会社ルデラ ホームページ制作マニュアル

このマニュアルは、今回の株式会社ルデラのホームページ制作で実際に行った流れを、STEP1から順番に整理したものです。

対象は、今後同じようにCodexと一緒にホームページを制作・修正・公開したい人です。

## STEP1: 案件ヒアリング

最初に、どのようなホームページを作るのかを確認します。

今回確認した内容は以下です。

- サイト種別: 会社サイト
- サイト名: 株式会社ルデラ
- 目的: 認知拡大、問い合わせ獲得
- ターゲット: 法人担当者、経営者
- 事業内容: 映像制作、Web制作
- 必要なページ・セクション: トップ、サービス紹介、実績、お客様の声、会社概要、FAQ、問い合わせ
- 参考サイト: https://mont.jp/
- デザイン方向性: 先進的、遊び要素満載、見たことないユーモア
- 素材: 旧サイトの写真・動画を活用
- 公開希望: すぐに公開
- ドメイン: ldera.co.jp
- メール: contact@ldera.co.jp
- 所在地: 宮城県仙台市太白区西中田三丁目11-13
- 代表者: 佐藤麻央

この段階で重要なのは、デザインの好みだけでなく、サイトの目的をはっきりさせることです。

今回の場合は「問い合わせ獲得」が目的なので、ただ派手にするだけではなく、最終的に問い合わせへ進める構成にしました。

## STEP2: 要件定義

ヒアリング内容をもとに、サイトに必要な条件を整理します。

今回の要件は以下です。

- 会社の第一印象を強く残す
- 映像制作とWeb制作の会社であることがすぐ分かる
- 法人担当者・経営者が問い合わせしやすい
- 旧サイトの動画・写真を活用する
- 遊び心とユーモアを強く出す
- スマートフォンでも崩れない
- SEOの基本設定を行う
- GitHubで変更履歴を管理する
- Vercelで確認用URLを発行する

要件定義では、「何を作るか」と「何を作らないか」も決めます。

今回、問い合わせフォームは最初から本格実装せず、まずは `mailto:contact@ldera.co.jp` のメールリンクにしました。理由は、すぐ確認できる状態を優先したためです。

## STEP3: GitHub準備

制作物を管理するためにGitHubリポジトリを用意します。

今回のリポジトリは以下です。

```text
https://github.com/fujimao/ldera-site
```

GitHubを使う理由は以下です。

- 変更履歴を残せる
- 間違えた場合に過去の状態へ戻しやすい
- Vercelと連携して自動デプロイできる
- 将来ほかの制作者へ引き継ぎやすい

制作中は、区切りごとにコミットしました。

主なコミット例:

- `Initial Ldera corporate site`
- `Use legacy media assets`
- `Add logo intro motion`
- `Add legacy photo gallery`
- `Add centralized media management`
- `Push Ldera visual overdrive`
- `Add brief catcher mini game`

## STEP4: Next.jsプロジェクト作成

今回のホームページはNext.jsで制作しました。

Next.jsを使うためには、Node.jsが必要です。

最初にPowerShellで以下を確認しました。

```powershell
node -v
npm.cmd -v
```

Node.jsが入っていない場合は、Node.js公式サイトからWindows用インストーラーをダウンロードしてインストールします。

今回の環境では以下が確認できました。

```text
node: v24.16.0
npm: 11.13.0
```

プロジェクトフォルダに移動して、依存関係をインストールします。

```powershell
cd "C:\Users\fujim\Documents\Codex\2026-06-03\files-mentioned-by-the-user-x\rudera-site"
npm.cmd install
```

ローカルでサイトを起動します。

```powershell
npm.cmd run dev
```

ブラウザで以下を開きます。

```text
http://localhost:3000/
```

## STEP5: AGENTS.md作成

`AGENTS.md` は、このプロジェクトをCodexや開発者が扱うときのルールをまとめるファイルです。

目的は以下です。

- どのようなサイトなのかを共有する
- 編集方針を明確にする
- 触るべきファイルを整理する
- 今後の作業者が迷わないようにする

今回のように、Codexと継続的に制作する場合は、プロジェクトの前提を書いておくと作業が安定します。

## STEP6: plan.md作成

`plan.md` には、制作計画をまとめます。

書く内容の例:

- サイトの目的
- ターゲット
- 必要なセクション
- デザイン方向性
- 実装予定
- 確認項目

今回の制作では、最初に会社サイトとして必要な基本構成を作り、その後に「もっと遊びを強く」「もっと狂わせて」という要望に合わせて、演出を追加していきました。

## STEP7: workflow.md作成

`workflow.md` は、作業の進め方を整理するファイルです。

今回のような制作では、次の流れを明文化しておくと便利です。

1. ヒアリング
2. 要件定義
3. 実装
4. ローカル確認
5. 修正
6. SEO確認
7. QA確認
8. GitHub反映
9. Vercel確認
10. 独自ドメイン公開

このファイルは、制作の地図のようなものです。

## STEP8: Codex通常モードで分析

プロジェクトの中身を確認します。

主に確認したファイルは以下です。

```text
src/app/page.tsx
src/app/globals.css
src/app/layout.tsx
public/
package.json
```

役割は以下です。

- `src/app/page.tsx`: トップページ本体
- `src/app/globals.css`: 全体のデザイン
- `src/app/layout.tsx`: SEOや共通レイアウト
- `public/`: 画像・動画などの静的ファイル
- `package.json`: 使用しているライブラリやコマンド

まず既存構成を把握してから編集します。

## STEP9: Codex Planモードで設計

実装前に、どのようなサイトにするかを設計します。

今回の設計方針:

- 一般的な会社サイトよりも記憶に残る見た目にする
- ただし会社情報や問い合わせ導線は分かりやすくする
- 旧サイトの動画・写真を活かす
- 映像制作会社らしく動きを多く入れる
- ユーモアのあるコピーを入れる
- スマホでは過剰演出を少し抑える

今回追加した主な演出:

- ロゴモーション
- 動画ヒーロー
- グリッチ見出し
- マウスに反応する背景
- Overdriveセクション
- Recipeセクション
- Photo Fragmentsギャラリー
- 企画書キャッチャーのミニゲーム

## STEP10: Codex Actモードで実装

実際にコードを書いていきます。

主に編集したファイル:

```text
src/app/page.tsx
src/app/globals.css
src/app/layout.tsx
src/components/IntroSplash.tsx
src/components/MadnessLayer.tsx
src/components/BriefCatcherGame.tsx
src/content/media.ts
```

実装内容:

- トップページの構築
- サービス紹介
- 実績
- お客様の声
- 会社概要
- FAQ
- 問い合わせ
- 旧サイト動画の組み込み
- 写真素材の組み込み
- ロゴモーション
- 派手な視覚演出
- ミニゲーム
- 素材管理ファイル

## STEP11: Browser Useで検証

Browser Useとは、実際のブラウザで見た目や動作を確認することです。

コード上でエラーがなくても、ブラウザで見ると以下の問題が起きる場合があります。

- 文字が重なる
- 画像が表示されない
- 動画が再生されない
- ボタンが押しにくい
- スマホ表示で崩れる
- ロゴモーションが出ない
- ゲームが操作できない

確認するURL:

```text
http://localhost:3000/
```

今回確認したこと:

- ページが表示されるか
- ロゴモーションが表示されるか
- 旧サイト動画が表示されるか
- 写真が表示されるか
- 追加セクションが表示されるか
- ミニゲームがページ内に表示されるか

ブラウザ自動操作が不安定な場合は、代わりにHTML出力やビルド結果で確認しました。

## STEP12: Actモードで修正

ブラウザやビルド結果を見ながら修正します。

今回の修正例:

- もっと遊びを強くする
- より派手な演出にする
- 旧サイトの写真を追加する
- ロゴモーションを最初に流す
- 素材を管理しやすくする
- ミニゲームを追加する
- スマホで表示が崩れないようにする

修正後は毎回以下を確認しました。

```powershell
node .\node_modules\eslint\bin\eslint.js .
node .\node_modules\next\dist\bin\next build --webpack
```

## STEP13: SEO監査

検索エンジンやSNS共有に必要な設定を確認します。

今回設定したもの:

- title
- description
- keywords
- OGP
- Twitterカード
- robots.txt
- sitemap.xml

確認ファイル:

```text
src/app/layout.tsx
src/app/robots.ts
src/app/sitemap.ts
seo-audit.md
```

SEOでは、見た目だけではなく「検索結果やSNSでどう表示されるか」も重要です。

## STEP14: QA監査

QAとは、公開前の品質確認です。

今回確認したこと:

- ビルドが成功するか
- TypeScriptエラーがないか
- ESLintが通るか
- 写真や動画のパスが正しいか
- 問い合わせメールが正しいか
- 会社情報が正しいか
- スマホでも読めるか
- 旧サイトに影響していないか

確認ファイル:

```text
qa-audit.md
```

QAは、公開後のトラブルを減らすための工程です。

## STEP15: GitHubへ反映

ローカルで確認できたら、GitHubへ反映します。

基本の流れ:

```powershell
git status
git add .
git commit -m "変更内容"
git push
```

今回、Codex側では安全な形で以下のように実行しました。

```powershell
git -c safe.directory=C:/Users/fujim/Documents/Codex/2026-06-03/files-mentioned-by-the-user-x/rudera-site status
git -c safe.directory=C:/Users/fujim/Documents/Codex/2026-06-03/files-mentioned-by-the-user-x/rudera-site push
```

GitHubへpushすると、Vercelが自動で新しいデプロイを作成します。

## STEP16: Vercel公開

Vercelは、GitHubと連携してサイトを公開・確認するためのサービスです。

今回の流れ:

1. GitHubリポジトリをVercelへ接続
2. mainブランチへpush
3. Vercelが自動ビルド
4. 確認URLが発行される

最新の確認URLは、Vercelのデプロイごとに変わります。

通常URLで `Unauthorized` が出る場合は、Vercelの認証保護が有効になっています。その場合は、共有URLを発行して確認します。

## STEP17: 独自ドメイン接続

当初は `ldera.co.jp` をVercelへ接続しようとしました。

しかし、旧サイトがまだ稼働していたため、途中で方針を変更しました。

理由:

- 旧サイト `https://ldera.co.jp/` を一時的に維持する必要があった
- ドメイン設定を変更すると旧サイトが見られなくなる可能性があった
- 旧サイト側で `Unauthorized` 問題が発生していた

調査の結果、旧サイトの `Unauthorized` の原因はWordPressプラグインでした。

原因になったプラグイン:

```text
recaptcha-for-asgaros-forum
```

このプラグイン名を変更することで、旧サイトは復旧しました。

そのため現在は、独自ドメインは旧サイトのままにし、新サイトはVercel確認URLで確認しています。

## STEP18: 納品

納品前に、以下を確認します。

- 表示確認
- スマホ確認
- 文章確認
- 写真・動画確認
- 問い合わせ導線確認
- SEO確認
- GitHub反映
- Vercel反映
- ドメイン切り替え準備

今回追加した素材管理用ファイル:

```text
ASSET_MANAGEMENT.md
src/content/media.ts
```

写真を追加する場所:

```text
public/legacy/photos/
```

動画を追加する場所:

```text
public/legacy/
```

今後、正式公開する場合は、最後に `ldera.co.jp` のDNS設定をVercel向けに切り替えます。

ただし、旧サイトを残したい場合は、DNS変更前に必ずバックアップと切り戻し手順を確認します。

## 今回の制作で完成したもの

- Next.js製の株式会社ルデラ公式サイト
- ロゴモーション付きのイントロ
- 旧サイト動画を使ったトップビジュアル
- 写真素材を使ったサービスカード
- 写真ギャラリー
- 派手なグリッチ演出
- マウスに反応する背景
- Overdriveセクション
- Recipeセクション
- 企画書キャッチャーのミニゲーム
- SEO基本設定
- QAメモ
- 素材管理の仕組み
- GitHub連携
- Vercel確認環境

## 今後の推奨作業

1. 実績を本物の内容に差し替える
2. お客様の声を実際の内容に差し替える
3. 問い合わせフォームを本格実装する
4. OGP画像を正式に作る
5. 写真・動画をさらに整理する
6. 表示速度を確認する
7. スマホ表示を目視確認する
8. ldera.co.jpへの切り替え準備をする

## よく使うコマンド

プロジェクトフォルダへ移動:

```powershell
cd "C:\Users\fujim\Documents\Codex\2026-06-03\files-mentioned-by-the-user-x\rudera-site"
```

開発サーバー起動:

```powershell
npm.cmd run dev
```

ブラウザで確認:

```text
http://localhost:3000/
```

Lint確認:

```powershell
node .\node_modules\eslint\bin\eslint.js .
```

本番ビルド確認:

```powershell
node .\node_modules\next\dist\bin\next build --webpack
```

Git状態確認:

```powershell
git status
```

GitHubへ反映:

```powershell
git add .
git commit -m "変更内容"
git push
```

