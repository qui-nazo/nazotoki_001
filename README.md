# 謎解きパズルゲーム

Webブラウザで動作する謎解きゲームです。問題画像の欠落した部分を選択肢から選んで埋めて、最終的な答えを導き出します。

**公開URL**: https://qui-nazo.github.io/nazotoki_001/

## ローカルでの動作確認方法

1. `index.html` をブラウザで開くだけで動作します
2. または、以下のコマンドでローカルサーバーを起動できます：

```bash
# Pythonがインストールされている場合
python -m http.server 8000

# Node.jsがインストールされている場合
npx serve
```

その後、ブラウザで `http://localhost:8000` にアクセスします。

## ゲームの遊び方

1. 問題画像が表示され、一部が空白（点線の枠）になっています
2. 下に表示される選択肢ボタン（画像またはテキスト）から正しいものを選んでクリックします
3. 選択すると、空白部分にその画像や文字が埋められます
4. もう一度同じボタンをクリックすると、選択を解除できます（やり直し可能）
5. 選択肢を選んだ後、謎を解いて答えを入力欄に入力してください
6. 「回答する」ボタンを押すと、選択肢と答えの両方が正しいかチェックされます
7. 全5問クリアすると、クリア時間が表示されます

## 問題のカスタマイズ方法

`script.js` の `puzzles` 配列を編集することで、独自の問題を追加できます。

### 画像上に空白を配置する方式（推奨）

問題画像の特定の位置に空白を配置したい場合、座標を指定できます。

```javascript
{
    title: "問題1",
    image: 'images/Q1.jpg',         // 問題の背景画像
    imageWidth: 500,                // 画像の表示幅（px）
    imageHeight: 500,               // 画像の表示高さ（px）
    puzzle: [
        {
            type: 'blank',
            id: 'blank1',
            correctAnswer: '鳥居',   // 正しい選択肢の値
            x: 270,                  // 左からの位置（px）
            y: 215,                  // 上からの位置（px）
            width: 130,              // 空白の幅（px）
            height: 130              // 空白の高さ（px）
        }
    ],
    choices: [
        {
            id: 'choice1',
            display: 'けん玉',       // ボタンに表示されるテキスト
            value: 'けん玉',         // 実際の値（correctAnswerと照合）
            targetBlank: 'blank1',   // どの空白に入るか
            image: 'images/Q1_kendama.png'  // 選択肢の画像
        },
        {
            id: 'choice2',
            display: '鳥居',
            value: '鳥居',
            targetBlank: 'blank1',
            image: 'images/Q1_torii.png'
        }
    ],
    finalAnswer: ["はじまり"],      // 正解（複数指定可能）
    hint: "たぬきは「た」抜き。答えが4文字になるには..."
}
```

### 横並び配置方式（シンプルな問題向け）

画像を使わず、テキストと空白を横並びに配置する場合：

```javascript
{
    title: "問題2: 動物の謎",
    puzzle: [
        {type: 'blank', id: 'blank1', correctAnswer: '🐱'},
        {type: 'text', content: '+'},
        {type: 'blank', id: 'blank2', correctAnswer: '🐶'},
        {type: 'text', content: '='},
        {type: 'text', content: 'ペット'}
    ],
    choices: [
        {id: 'choice1', display: '🐱', value: '🐱', targetBlank: 'blank1'},
        {id: 'choice2', display: '🐶', value: '🐶', targetBlank: 'blank2'}
    ],
    finalAnswer: ["ペット", "ぺっと", "pet"],
    hint: "家で飼える代表的な動物2種類を考えてみましょう"
}
```

### 画像の追加方法

1. プロジェクトフォルダの `images` フォルダに画像ファイルを配置
2. `script.js` で画像パスを指定
3. 選択肢に画像を使う場合は、`image` プロパティを追加
4. 選択肢がテキストのみの場合は、`image` プロパティを省略

## GitHub Pagesで公開・更新する方法

### 初回公開時

1. GitHubでリポジトリを作成
2. プロジェクトフォルダでGitを初期化してファイルをプッシュ：

```bash
cd "C:\Users\出崎 祐矢\puzzle-game"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/qui-nazo/nazotoki_001.git
git push -u origin main
```

3. GitHubのリポジトリページ（https://github.com/qui-nazo/nazotoki_001）で Settings → Pages
4. Source を `main` ブランチに設定
5. 数分後、https://qui-nazo.github.io/nazotoki_001/ で公開されます

### 更新時

ファイルを編集した後、以下のコマンドで更新を反映：

```bash
cd "C:\Users\出崎 祐矢\puzzle-game"
git add .
git commit -m "更新内容の説明"
git push
```

## ファイル構成

```
puzzle-game/
├── index.html      # メインHTML
├── style.css       # スタイルシート
├── script.js       # ゲームロジック
├── README.md       # このファイル
└── images/         # 画像フォルダ
    ├── Q1.jpg              # 問題1の背景画像
    ├── Q1_kendama.png      # 選択肢1の画像
    ├── Q1_torii.png        # 選択肢2の画像
    ├── Q1_densha.png       # 選択肢3の画像
    └── Q1_piano.png        # 選択肢4の画像
```

## カスタマイズのヒント

- 色やデザインを変更する場合は [style.css](style.css) を編集
- 問題を追加・編集する場合は [script.js](script.js) の `puzzles` 配列を編集
- 空白の位置を調整する場合は、`x`, `y`, `width`, `height` の値を変更
- フォントやアニメーションも [style.css](style.css) で調整可能

## 技術仕様

- **フレームワーク**: なし（Vanilla JavaScript）
- **動作環境**: モダンブラウザ（Chrome, Firefox, Safari, Edge）
- **レスポンシブ対応**: あり（モバイルでも動作）
- **主な機能**:
  - 座標指定による空白の配置
  - 画像/テキストの選択肢
  - トグル選択（選択解除可能）
  - 選択肢と最終回答の同時検証
  - ヒント機能
  - クリアタイム計測
