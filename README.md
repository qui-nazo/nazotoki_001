# 謎解きパズルゲーム

Webブラウザで動作する謎解きゲームです。欠落した部分を選択肢から選んで埋めて、最終的な答えを導き出します。

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

1. 問題が表示され、一部が空白になっています
2. 下に表示される選択肢ボタンから正しいものを選んでクリックします
3. 選択すると、空白部分にその内容が埋められます
4. すべての空白を正しく埋めると、最終回答の入力欄が表示されます
5. 謎を解いて、答えを入力してください
6. 全5問クリアすると、クリア時間が表示されます

## 問題のカスタマイズ方法

`script.js` の `puzzles` 配列を編集することで、独自の問題を追加できます。

### 基本構造

```javascript
{
    title: "問題タイトル",
    image: 'images/puzzle1.png', // 問題画像（オプション）
    puzzle: [
        {type: 'text', content: 'テキスト'},
        {type: 'blank', id: 'blank1', correctAnswer: '正解'}
    ],
    choices: [
        {id: 'choice1', display: '表示テキスト', value: '値', targetBlank: 'blank1', image: '画像パス（オプション）'}
    ],
    finalAnswer: ["答え1", "答え2"], // 複数の正解を設定可能
    hint: "ヒントメッセージ"
}
```

### 画像の追加方法

1. プロジェクトフォルダに `images` フォルダを作成
2. 画像ファイルを配置
3. `script.js` で画像パスを指定：

```javascript
{
    title: "問題1",
    image: 'images/puzzle1.png', // 問題の背景画像
    choices: [
        {
            id: 'choice1',
            display: '選択肢1',
            value: 'A',
            targetBlank: 'blank1',
            image: 'images/choice1.png' // 選択肢の画像
        }
    ]
}
```

## GitHub Pagesで公開する方法

1. GitHubでリポジトリを作成
2. ファイルをプッシュ：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
git push -u origin main
```

3. GitHubのリポジトリページで Settings → Pages
4. Source を `main` ブランチに設定
5. 数分後、`https://あなたのユーザー名.github.io/リポジトリ名/` で公開されます

## ファイル構成

```
puzzle-game/
├── index.html      # メインHTML
├── style.css       # スタイルシート
├── script.js       # ゲームロジック
├── README.md       # このファイル
└── images/         # 画像フォルダ（作成予定）
```

## カスタマイズのヒント

- 色やデザインを変更する場合は `style.css` を編集
- 問題数を増やす場合は `script.js` の `puzzles` 配列に追加
- フォントやアニメーションも `style.css` で調整可能
