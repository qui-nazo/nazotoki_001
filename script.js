// 謎解きパズルのデータ
const puzzles = [
    {
        title: "問題1",
        image: 'images/Q1.jpg', // 問題画像を表示
        imageWidth: 500, // 画像の表示幅（px）
        imageHeight: 500, // 画像の表示高さ（px）- 正方形に修正
        // puzzle構造: 座標指定で画像上に配置
        puzzle: [
            {type: 'blank', id: 'blank1', correctAnswer: '鳥居', x: 270, y: 215, width: 130, height: 130}
        ],
        choices: [
            {id: 'choice1', display: 'けん玉', value: 'けん玉', targetBlank: 'blank1', image: 'images/Q1_kendama.png'},
            {id: 'choice2', display: '鳥居', value: '鳥居', targetBlank: 'blank1', image: 'images/Q1_torii.png'},
            {id: 'choice3', display: '電車', value: '電車', targetBlank: 'blank1', image: 'images/Q1_densha.png'},
            {id: 'choice4', display: 'ピアノ', value: 'ピアノ', targetBlank: 'blank1', image: 'images/Q1_piano.png'}
        ],
        finalAnswer: ["はじまり"],
        hint: "たぬきは「た」抜き。答えが4文字になるには、「た」の他にどんな文字がなくなればよいか考えてみよう。"
    },
    {
        title: "問題2: 動物の謎",
        // image: 'images/puzzle2.png',
        puzzle: [
            {type: 'blank', id: 'blank1', correctAnswer: '🐱'},
            {type: 'text', content: '+'},
            {type: 'blank', id: 'blank2', correctAnswer: '🐶'},
            {type: 'text', content: '='},
            {type: 'text', content: 'ペット'}
        ],
        choices: [
            {id: 'choice1', display: '🐱', value: '🐱', targetBlank: 'blank1'},
            {id: 'choice2', display: '🐶', value: '🐶', targetBlank: 'blank2'},
            {id: 'choice3', display: '🐘', value: '🐘', targetBlank: 'blank1'},
            {id: 'choice4', display: '🦁', value: '🦁', targetBlank: 'blank2'}
        ],
        finalAnswer: ["ペット", "ぺっと", "pet"],
        hint: "家で飼える代表的な動物2種類を考えてみましょう"
    },
    {
        title: "問題3: 色の謎",
        // image: 'images/puzzle3.png',
        puzzle: [
            {type: 'blank', id: 'blank1', correctAnswer: '赤'},
            {type: 'text', content: '+'},
            {type: 'blank', id: 'blank2', correctAnswer: '青'},
            {type: 'text', content: '='},
            {type: 'text', content: '?'}
        ],
        choices: [
            {id: 'choice1', display: '赤', value: '赤', targetBlank: 'blank1'},
            {id: 'choice2', display: '青', value: '青', targetBlank: 'blank2'},
            {id: 'choice3', display: '黄', value: '黄', targetBlank: 'blank1'},
            {id: 'choice4', display: '緑', value: '緑', targetBlank: 'blank2'}
        ],
        finalAnswer: ["紫", "むらさき", "パープル"],
        hint: "色を混ぜると何色になるでしょうか？"
    },
    {
        title: "問題4: 曜日の謎",
        // image: 'images/puzzle4.png',
        puzzle: [
            {type: 'text', content: '月'},
            {type: 'text', content: '→'},
            {type: 'blank', id: 'blank1', correctAnswer: '火'},
            {type: 'text', content: '→'},
            {type: 'text', content: '水'},
            {type: 'text', content: '→'},
            {type: 'blank', id: 'blank2', correctAnswer: '木'}
        ],
        choices: [
            {id: 'choice1', display: '火', value: '火', targetBlank: 'blank1'},
            {id: 'choice2', display: '木', value: '木', targetBlank: 'blank2'},
            {id: 'choice3', display: '金', value: '金', targetBlank: 'blank1'},
            {id: 'choice4', display: '土', value: '土', targetBlank: 'blank2'}
        ],
        finalAnswer: ["曜日", "ようび"],
        hint: "月曜日、火曜日、水曜日..."
    },
    {
        title: "問題5: 最終問題",
        // image: 'images/puzzle5.png',
        puzzle: [
            {type: 'text', content: '春'},
            {type: 'text', content: '→'},
            {type: 'blank', id: 'blank1', correctAnswer: '夏'},
            {type: 'text', content: '→'},
            {type: 'blank', id: 'blank2', correctAnswer: '秋'},
            {type: 'text', content: '→'},
            {type: 'blank', id: 'blank3', correctAnswer: '冬'}
        ],
        choices: [
            {id: 'choice1', display: '夏', value: '夏', targetBlank: 'blank1'},
            {id: 'choice2', display: '秋', value: '秋', targetBlank: 'blank2'},
            {id: 'choice3', display: '冬', value: '冬', targetBlank: 'blank3'},
            {id: 'choice4', display: '梅雨', value: '梅雨', targetBlank: 'blank1'}
        ],
        finalAnswer: ["四季", "しき", "季節", "きせつ"],
        hint: "日本の季節の移り変わりを表しています"
    }
];

// ゲームの状態
let currentPuzzleIndex = 0;
let startTime = null;
let currentPuzzle = null;
let filledBlanks = {}; // {blankId: value}

// DOM要素の取得
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const totalPuzzlesStart = document.getElementById('total-puzzles-start');
const questionTitle = document.getElementById('question-title');
const puzzleDisplay = document.getElementById('puzzle-display');
const choicesContainer = document.getElementById('choices-container');
const fillFeedback = document.getElementById('fill-feedback');
const answerSection = document.getElementById('answer-section');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const hintBtn = document.getElementById('hint-btn');
const feedback = document.getElementById('feedback');
const hintBox = document.getElementById('hint-box');
const currentPuzzleSpan = document.getElementById('current-puzzle');
const totalPuzzlesSpan = document.getElementById('total-puzzles');
const gameScreen = document.getElementById('game-screen');
const completeScreen = document.getElementById('complete-screen');
const clearTimeSpan = document.getElementById('clear-time');
const restartBtn = document.getElementById('restart-btn');

// 初期化（開始画面を表示）
function init() {
    totalPuzzlesStart.textContent = puzzles.length;
    totalPuzzlesSpan.textContent = puzzles.length;
    startScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    completeScreen.classList.add('hidden');
}

// ゲーム開始
function startGame() {
    startTime = Date.now();
    currentPuzzleIndex = 0;
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    loadPuzzle();
}

// パズルの読み込み
function loadPuzzle() {
    if (currentPuzzleIndex >= puzzles.length) {
        showComplete();
        return;
    }

    currentPuzzle = puzzles[currentPuzzleIndex];
    filledBlanks = {};

    questionTitle.textContent = currentPuzzle.title;
    currentPuzzleSpan.textContent = `問題 ${currentPuzzleIndex + 1}`;

    // パズル表示エリアの構築
    renderPuzzle();

    // 選択肢ボタンの構築
    renderChoices();

    // リセット
    answerSection.classList.remove('hidden'); // 答え入力欄を最初から表示
    answerInput.value = '';
    feedback.classList.add('hidden');
    hintBox.classList.add('hidden');
    fillFeedback.classList.add('hidden');
}

// パズルの描画
function renderPuzzle() {
    puzzleDisplay.innerHTML = '';

    // 座標指定の場合（imageWidth/imageHeightがある場合）
    if (currentPuzzle.image && currentPuzzle.imageWidth && currentPuzzle.imageHeight) {
        // 画像コンテナを作成（相対配置用）
        const imageContainer = document.createElement('div');
        imageContainer.style.position = 'relative';
        imageContainer.style.width = '100%';
        imageContainer.style.maxWidth = currentPuzzle.imageWidth + 'px';
        imageContainer.style.margin = '0 auto';
        imageContainer.style.aspectRatio = currentPuzzle.imageWidth / currentPuzzle.imageHeight;

        // 問題画像
        const img = document.createElement('img');
        img.src = currentPuzzle.image;
        img.alt = currentPuzzle.title;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain'; // アスペクト比を保持
        img.style.borderRadius = '10px';
        img.style.display = 'block';
        imageContainer.appendChild(img);

        // 空白を座標指定で配置（パーセンテージで指定）
        currentPuzzle.puzzle.forEach(item => {
            if (item.type === 'blank' && item.x !== undefined && item.y !== undefined) {
                const blank = document.createElement('div');
                blank.className = 'puzzle-blank positioned-blank';
                blank.id = item.id;
                blank.dataset.correctAnswer = item.correctAnswer;
                blank.style.position = 'absolute';
                // 元の画像サイズに対するパーセンテージで配置
                blank.style.left = (item.x / currentPuzzle.imageWidth * 100) + '%';
                blank.style.top = (item.y / currentPuzzle.imageHeight * 100) + '%';
                blank.style.width = (item.width / currentPuzzle.imageWidth * 100) + '%';
                blank.style.height = (item.height / currentPuzzle.imageHeight * 100) + '%';
                imageContainer.appendChild(blank);
            }
        });

        puzzleDisplay.appendChild(imageContainer);
    }
    // 従来の方式（横並び配置）
    else {
        // 画像がある場合は表示
        if (currentPuzzle.image) {
            const img = document.createElement('img');
            img.src = currentPuzzle.image;
            img.alt = currentPuzzle.title;
            img.style.maxWidth = '100%';
            img.style.marginBottom = '20px';
            img.style.borderRadius = '10px';
            puzzleDisplay.appendChild(img);
        }

        const row = document.createElement('div');
        row.className = 'puzzle-row';

        currentPuzzle.puzzle.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'puzzle-item';

            if (item.type === 'text') {
                itemEl.textContent = item.content;
            } else if (item.type === 'blank') {
                const blank = document.createElement('div');
                blank.className = 'puzzle-blank';
                blank.id = item.id;
                blank.dataset.correctAnswer = item.correctAnswer;
                itemEl.appendChild(blank);
            }

            row.appendChild(itemEl);
        });

        puzzleDisplay.appendChild(row);
    }
}

// 選択肢ボタンの描画
function renderChoices() {
    choicesContainer.innerHTML = '';

    currentPuzzle.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.dataset.choiceId = choice.id;
        btn.dataset.value = choice.value;
        btn.dataset.targetBlank = choice.targetBlank;

        // 選択肢に画像がある場合は画像表示、なければテキスト表示
        if (choice.image) {
            const img = document.createElement('img');
            img.src = choice.image;
            img.alt = choice.display;
            img.style.maxWidth = '80px';
            img.style.maxHeight = '80px';
            btn.appendChild(img);
        } else {
            const display = document.createElement('div');
            display.textContent = choice.display;
            btn.appendChild(display);
        }

        btn.addEventListener('click', () => handleChoiceClick(choice, btn));

        choicesContainer.appendChild(btn);
    });
}

// 選択肢クリック処理
function handleChoiceClick(choice, btnElement) {
    const targetBlank = document.getElementById(choice.targetBlank);

    // 既に選択されている場合はキャンセル
    if (btnElement.classList.contains('selected')) {
        targetBlank.innerHTML = '';
        targetBlank.classList.remove('filled');
        btnElement.classList.remove('selected');
        delete filledBlanks[choice.targetBlank];
        return;
    }

    // 他のボタンの選択を解除
    const allButtons = choicesContainer.querySelectorAll('.choice-btn');
    allButtons.forEach(btn => {
        if (btn.dataset.targetBlank === choice.targetBlank) {
            btn.classList.remove('selected');
        }
    });

    // 空白に値を埋める（画像がある場合は画像、なければテキスト）
    targetBlank.innerHTML = ''; // 既存の内容をクリア

    if (choice.image) {
        const img = document.createElement('img');
        img.src = choice.image;
        img.alt = choice.display;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.objectFit = 'contain';
        targetBlank.appendChild(img);
    } else {
        targetBlank.textContent = choice.value;
    }

    targetBlank.classList.add('filled');
    filledBlanks[choice.targetBlank] = choice.value;

    // ボタンを選択状態に
    btnElement.classList.add('selected');
}

// 最終回答のチェック
function checkFinalAnswer() {
    const userAnswer = answerInput.value.trim();

    if (userAnswer === '') {
        showFeedback('答えを入力してください', false);
        return;
    }

    // 1. すべての空白が正しく埋まっているかチェック
    const blanks = currentPuzzle.puzzle.filter(item => item.type === 'blank');
    const allBlanksCorrect = blanks.every(blank => {
        return filledBlanks[blank.id] === blank.correctAnswer;
    });

    // 2. 最終回答が正しいかチェック
    const isAnswerCorrect = currentPuzzle.finalAnswer.some(ans =>
        ans === userAnswer || ans.toLowerCase() === userAnswer.toLowerCase()
    );

    // 両方が正しい場合のみ正解
    if (allBlanksCorrect && isAnswerCorrect) {
        showFeedback('正解です！次の問題へ進みます', true);
        setTimeout(() => {
            currentPuzzleIndex++;
            loadPuzzle();
        }, 2000);
    } else {
        showFeedback('不正解', false);
    }
}

// フィードバックの表示
function showFeedback(message, isCorrect) {
    feedback.textContent = message;
    feedback.className = 'feedback';
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedback.classList.remove('hidden');
}

// ヒントの表示
function showHint() {
    hintBox.innerHTML = `<h3>💡 ヒント</h3><p>${currentPuzzle.hint}</p>`;
    hintBox.classList.remove('hidden');
}

// 完了画面の表示
function showComplete() {
    const endTime = Date.now();
    const totalSeconds = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    clearTimeSpan.textContent = `${minutes}分${seconds}秒`;
    gameScreen.classList.add('hidden');
    completeScreen.classList.remove('hidden');
}

// ゲームのリスタート
function restart() {
    gameScreen.classList.remove('hidden');
    completeScreen.classList.add('hidden');
    init();
}

// イベントリスナーの設定
startBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', checkFinalAnswer);
hintBtn.addEventListener('click', showHint);
restartBtn.addEventListener('click', restart);

answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkFinalAnswer();
    }
});

// ゲーム開始（開始画面を表示）
init();
