// ============================================
// テスト用設定: 問題ジャンプ機能のオンオフ
// ============================================
const ENABLE_PUZZLE_JUMP = true; // true: ジャンプ機能を有効化 / false: 無効化

// 謎解きパズルのデータ
const puzzles = [
    {
        title: "ナゾ1",
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
        title: "ナゾ2",
        image: 'images/Q2.jpg',
        imageWidth: 500,
        imageHeight: 500,
        puzzle: [
            {type: 'blank', id: 'blank1', correctAnswer: '=', x: 152, y: 112, width: 100, height: 100}
        ],
        choices: [
            {id: 'choice1', display: '=', value: '=', targetBlank: 'blank1', image: 'images/Q2_equal.jpg'},
            {id: 'choice2', display: '≠', value: '≠', targetBlank: 'blank1', image: 'images/Q2_notequal.jpg'},
            {id: 'choice3', display: '>', value: '>', targetBlank: 'blank1', image: 'images/Q2_dainari.jpg'},
            {id: 'choice4', display: '<', value: '<', targetBlank: 'blank1', image: 'images/Q2_shonari.jpg'}
        ],
        finalAnswer: ["すわん", "スワン"],
        hint: "あてはめる記号は「＝」ですが、「イコール」とは読みません。"
    },
    {
        title: "ナゾ3",
        image: 'images/Q3.jpg',
        imageWidth: 500,
        imageHeight: 500,
        sequentialFill: true, // 順番に埋める特殊モード
        puzzle: [
            {type: 'blank', id: 'blank1', correctAnswer: 'かん', label: '1', x: 45, y: 150, width: 90, height: 90},
            {type: 'blank', id: 'blank2', correctAnswer: 'ほし', label: '2', x: 150, y: 150, width: 90, height: 90},
            {type: 'blank', id: 'blank3', correctAnswer: 'はえ', label: '3', x: 255, y: 150, width: 90, height: 90},
            {type: 'blank', id: 'blank4', correctAnswer: 'たこ', label: '4', x: 360, y: 150, width: 90, height: 90}
        ],
        choices: [
            {id: 'choice1', display: 'はえ', value: 'はえ', image: 'images/Q3_hae.png'},
            {id: 'choice2', display: 'ほし', value: 'ほし', image: 'images/Q3_hoshi.png'},
            {id: 'choice3', display: 'かん', value: 'かん', image: 'images/Q3_kan.png'},
            {id: 'choice4', display: 'たこ', value: 'たこ', image: 'images/Q3_tako.png'}
        ],
        finalAnswer: ["しほんか", "シホンカ", "資本家"],
        hint: [
            "選択肢すべてを順番に並べて、逆さから読むとこたえがわかるようです。",
            "3, 4には、それぞれ「はえ」「たこ」が入ります。"
        ]
    },
    {
        title: "ナゾ4",
        image: 'images/Q4.jpg',
        imageWidth: 500,
        imageHeight: 500,
        sequentialFill: true, // 順番に埋める特殊モード
        showExtraChoice: true, // 「あきらめる」ボタンを表示
        puzzle: [
            {type: 'blank', id: 'blank1', correctAnswer: 'しんかろん', label: '1', x: 190, y: 185, width: 210, height: 65},
            {type: 'blank', id: 'blank2', correctAnswer: 'さらやしき', label: '2', x: 190, y: 297, width: 210, height: 65},
            {type: 'blank', id: 'blank3', correctAnswer: 'あきらめる', label: '3', x: 190, y: 409, width: 210, height: 65}
        ],
        choices: [
            {id: 'choice1', display: 'インディゴ', value: 'インディゴ'},
            {id: 'choice2', display: 'しんかろん', value: 'しんかろん'},
            {id: 'choice3', display: 'コンサート', value: 'コンサート'},
            {id: 'choice4', display: 'さらやしき', value: 'さらやしき'}
        ],
        extraChoice: {id: 'choice5', display: 'あきらめる', value: 'あきらめる'},
        finalAnswer: ["きゃらめる", "キャラメル"],
        hint: "それぞれの言葉の最初の2文字を順番に読むと..."
    },
    {
        title: "ナゾ5",
        image: 'images/Q5.jpg',
        imageWidth: 500,
        imageHeight: 500,
        imageAsChoice: true, // 問題画像自体も選択肢として選べる
        puzzle: [
            {type: 'blank', id: 'blank1', correctAnswer: 'なぞ', x: 150, y: 150, width: 200, height: 200}
        ],
        choices: [
            // 問題1の選択肢
            {id: 'choice1', display: 'けん玉', value: 'けん玉', targetBlank: 'blank1', image: 'images/Q1_kendama.png'},
            {id: 'choice2', display: '鳥居', value: '鳥居', targetBlank: 'blank1', image: 'images/Q1_torii.png'},
            {id: 'choice3', display: '電車', value: '電車', targetBlank: 'blank1', image: 'images/Q1_densha.png'},
            {id: 'choice4', display: 'ピアノ', value: 'ピアノ', targetBlank: 'blank1', image: 'images/Q1_piano.png'},
            // 問題2の選択肢
            {id: 'choice5', display: '=', value: '=', targetBlank: 'blank1', image: 'images/Q2_equal.jpg'},
            {id: 'choice6', display: '≠', value: '≠', targetBlank: 'blank1', image: 'images/Q2_notequal.jpg'},
            {id: 'choice7', display: '>', value: '>', targetBlank: 'blank1', image: 'images/Q2_dainari.jpg'},
            {id: 'choice8', display: '<', value: '<', targetBlank: 'blank1', image: 'images/Q2_shonari.jpg'},
            // 問題3の選択肢
            {id: 'choice9', display: 'はえ', value: 'はえ', targetBlank: 'blank1', image: 'images/Q3_hae.png'},
            {id: 'choice10', display: 'ほし', value: 'ほし', targetBlank: 'blank1', image: 'images/Q3_hoshi.png'},
            {id: 'choice11', display: 'かん', value: 'かん', targetBlank: 'blank1', image: 'images/Q3_kan.png'},
            {id: 'choice12', display: 'たこ', value: 'たこ', targetBlank: 'blank1', image: 'images/Q3_tako.png'}
        ],
        finalAnswer: ["はなぞの", "ハナゾノ", "花園"],
        hint: "問題画像自体も選択肢の一つです。この問題自体が何かを考えてみましょう。"
    }
];

// ゲームの状態
let currentPuzzleIndex = 0;
let startTime = null;
let currentPuzzle = null;
let filledBlanks = {}; // {blankId: value}
let selectionOrder = []; // 順番選択モード用: [{choiceId, value, image}]

// DOM要素の取得
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const totalPuzzlesStart = document.getElementById('total-puzzles-start');
const questionTitle = document.getElementById('question-title');
let puzzleDisplay = document.getElementById('puzzle-display');
const choicesContainer = document.getElementById('choices-container');
const fillFeedback = document.getElementById('fill-feedback');
const answerSection = document.getElementById('answer-section');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const hintBtn = document.getElementById('hint-btn');
const extraChoiceContainer = document.getElementById('extra-choice-container');
const feedback = document.getElementById('feedback');
const hintBox = document.getElementById('hint-box');
const progressCircles = document.getElementById('progress-circles');
const gameScreen = document.getElementById('game-screen');
const completeScreen = document.getElementById('complete-screen');
const clearTimeSpan = document.getElementById('clear-time');
const restartBtn = document.getElementById('restart-btn');
const puzzleJump = document.getElementById('puzzle-jump');

// プログレスサークルの作成
function createProgressCircles() {
    progressCircles.innerHTML = '';
    for (let i = 0; i < puzzles.length; i++) {
        const circle = document.createElement('div');
        circle.className = 'progress-circle unchallenged';
        circle.dataset.index = i;
        progressCircles.appendChild(circle);
    }
}

// プログレスサークルの更新
function updateProgressCircles() {
    const circles = progressCircles.querySelectorAll('.progress-circle');
    circles.forEach((circle, index) => {
        circle.className = 'progress-circle';
        if (index < currentPuzzleIndex) {
            circle.classList.add('completed');
        } else if (index === currentPuzzleIndex) {
            circle.classList.add('current');
        } else {
            circle.classList.add('unchallenged');
        }
    });
}

// 初期化（開始画面を表示）
function init() {
    totalPuzzlesStart.textContent = puzzles.length;
    createProgressCircles();
    startScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    completeScreen.classList.add('hidden');

    // テスト用: ジャンプ機能の表示制御
    if (ENABLE_PUZZLE_JUMP) {
        puzzleJump.classList.add('hidden'); // 初期状態では非表示
    } else {
        puzzleJump.classList.add('hidden');
    }
}

// ゲーム開始
function startGame() {
    startTime = Date.now();
    currentPuzzleIndex = 0;
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    // テスト用: ジャンプ機能の表示
    if (ENABLE_PUZZLE_JUMP) {
        puzzleJump.classList.remove('hidden');
    }

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
    selectionOrder = [];
    currentHintIndex = 0;

    questionTitle.textContent = currentPuzzle.title;
    updateProgressCircles();

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

    // 前の問題で追加されたクラスとスタイルをクリア
    puzzleDisplay.classList.remove('image-as-choice', 'image-selected');
    puzzleDisplay.style.cursor = '';

    // 既存のクリックイベントを削除するため、要素を複製して置き換え
    const newPuzzleDisplay = puzzleDisplay.cloneNode(false);
    puzzleDisplay.parentNode.replaceChild(newPuzzleDisplay, puzzleDisplay);
    puzzleDisplay = newPuzzleDisplay;

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
        img.id = 'puzzle-image';

        imageContainer.appendChild(img);

        // 5問目専用: 問題画像の枠全体を選択肢として選べるようにする
        if (currentPuzzle.imageAsChoice) {
            puzzleDisplay.classList.add('image-as-choice');
            puzzleDisplay.style.cursor = 'pointer';
            puzzleDisplay.addEventListener('click', (e) => {
                // 空欄のクリックは無視
                if (e.target.classList.contains('puzzle-blank') || e.target.closest('.puzzle-blank')) {
                    return;
                }
                handleImageAsChoiceClick();
            });
        }

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

                // ラベル（番号）がある場合は表示
                if (item.label) {
                    const label = document.createElement('span');
                    label.className = 'blank-label';
                    label.textContent = item.label;
                    blank.appendChild(label);
                }

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
    extraChoiceContainer.innerHTML = '';

    currentPuzzle.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        // 4問目の場合はcompactクラスを追加
        if (currentPuzzleIndex === 3) {
            btn.classList.add('compact');
        }
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

    // extraChoiceがある場合は「あきらめる」ボタンを表示
    if (currentPuzzle.showExtraChoice && currentPuzzle.extraChoice) {
        extraChoiceContainer.classList.remove('hidden');

        const extraBtn = document.createElement('button');
        extraBtn.className = 'choice-btn extra-choice-btn';
        // 4問目の場合はcompactクラスを追加
        if (currentPuzzleIndex === 3) {
            extraBtn.classList.add('compact');
        }
        extraBtn.dataset.choiceId = currentPuzzle.extraChoice.id;
        extraBtn.dataset.value = currentPuzzle.extraChoice.value;

        const display = document.createElement('div');
        display.textContent = currentPuzzle.extraChoice.display;
        extraBtn.appendChild(display);

        extraBtn.addEventListener('click', () => handleChoiceClick(currentPuzzle.extraChoice, extraBtn));

        extraChoiceContainer.appendChild(extraBtn);
    } else {
        extraChoiceContainer.classList.add('hidden');
    }
}

// 選択肢クリック処理
function handleChoiceClick(choice, btnElement) {
    // 順番選択モード
    if (currentPuzzle.sequentialFill) {
        // 既に選択されている場合はキャンセル
        if (btnElement.classList.contains('selected')) {
            // 選択を解除
            btnElement.classList.remove('selected');

            // selectionOrderから削除
            const index = selectionOrder.findIndex(item => item.choiceId === choice.id);
            if (index !== -1) {
                selectionOrder.splice(index, 1);
            }

            // すべての空欄を再描画
            redistributeBlanks();
            return;
        }

        // 新規選択
        btnElement.classList.add('selected');
        selectionOrder.push({
            choiceId: choice.id,
            value: choice.value,
            image: choice.image
        });

        // すべての空欄を再描画
        redistributeBlanks();
    }
    // 通常モード
    else {
        const targetBlank = document.getElementById(choice.targetBlank);

        // 既に選択されている場合はキャンセル
        if (btnElement.classList.contains('selected')) {
            targetBlank.innerHTML = '';
            targetBlank.classList.remove('filled');
            btnElement.classList.remove('selected');
            delete filledBlanks[choice.targetBlank];
            return;
        }

        // 5問目専用: 画像の選択状態を解除
        if (currentPuzzle.imageAsChoice) {
            const imageContainer = document.querySelector('.image-as-choice');
            if (imageContainer) {
                imageContainer.classList.remove('image-selected');
            }
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
}

// 5問目専用: 問題画像を選択肢として選んだ時の処理
function handleImageAsChoiceClick() {
    const targetBlank = document.getElementById('blank1');
    const imageContainer = document.querySelector('.image-as-choice');

    // 既に画像が選択されている場合はキャンセル
    if (imageContainer && imageContainer.classList.contains('image-selected')) {
        imageContainer.classList.remove('image-selected');
        targetBlank.innerHTML = '';
        targetBlank.classList.remove('filled');
        delete filledBlanks['blank1'];

        // 他の選択肢ボタンを有効化
        const allButtons = choicesContainer.querySelectorAll('.choice-btn');
        allButtons.forEach(btn => btn.classList.remove('selected'));
        return;
    }

    // 他の選択肢の選択を解除
    const allButtons = choicesContainer.querySelectorAll('.choice-btn');
    allButtons.forEach(btn => btn.classList.remove('selected'));

    // 画像を選択状態に
    if (imageContainer) {
        imageContainer.classList.add('image-selected');
    }

    // 空欄に選択画像を表示
    targetBlank.innerHTML = '';
    const img = document.createElement('img');
    img.src = 'images/Q5_selected.jpg';
    img.alt = 'なぞ';
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.objectFit = 'contain';
    targetBlank.appendChild(img);
    targetBlank.classList.add('filled');
    filledBlanks['blank1'] = 'なぞ';
}

// 順番選択モード: 空欄を再配置する
function redistributeBlanks() {
    const blanks = currentPuzzle.puzzle.filter(item => item.type === 'blank');

    // すべての空欄をクリア
    blanks.forEach(blank => {
        const blankEl = document.getElementById(blank.id);
        // ラベルを保持しながらクリア
        const label = blankEl.querySelector('.blank-label');
        blankEl.innerHTML = '';
        if (label) {
            blankEl.appendChild(label.cloneNode(true));
        }
        blankEl.classList.remove('filled');
    });

    // filledBlanksをクリア
    filledBlanks = {};

    // 選択順に空欄に配置
    selectionOrder.forEach((item, index) => {
        if (index < blanks.length) {
            const blank = blanks[index];
            const blankEl = document.getElementById(blank.id);

            if (item.image) {
                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.value;
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';
                img.style.objectFit = 'contain';
                blankEl.appendChild(img);
            } else {
                const textNode = document.createTextNode(item.value);
                blankEl.appendChild(textNode);
            }

            blankEl.classList.add('filled');
            filledBlanks[blank.id] = item.value;
        }
    });
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

        // ボタンを無効化して複数回クリックを防ぐ
        submitBtn.disabled = true;

        setTimeout(() => {
            currentPuzzleIndex++;
            submitBtn.disabled = false; // 次の問題でボタンを再度有効化
            loadPuzzle();
            // ページトップまでスクロール
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
let currentHintIndex = 0;

function showHint() {
    // ヒントが既に表示されている場合は閉じる
    if (!hintBox.classList.contains('hidden')) {
        hintBox.classList.add('hidden');
        return;
    }

    // ヒントが配列の場合（複数ヒント対応）
    if (Array.isArray(currentPuzzle.hint)) {
        let hintContent = `<h3>💡 ヒント①</h3><p>${currentPuzzle.hint[0]}</p>`;

        // まだ次のヒントがある場合は「さらにヒント」ボタンを表示
        if (currentHintIndex === 0 && currentPuzzle.hint.length > 1) {
            hintContent += `<button id="more-hint-btn" class="more-hint-btn">さらにヒント</button>`;
        } else if (currentHintIndex >= 1) {
            // 既にヒント②まで見ている場合はそれも表示
            hintContent += `<h3>💡 ヒント②</h3><p>${currentPuzzle.hint[1]}</p>`;
        }

        hintBox.innerHTML = hintContent;
        hintBox.classList.remove('hidden');

        // 「さらにヒント」ボタンのイベント設定
        const moreHintBtn = document.getElementById('more-hint-btn');
        if (moreHintBtn) {
            moreHintBtn.addEventListener('click', showMoreHint);
        }
    } else {
        // 従来の単一ヒント
        hintBox.innerHTML = `<h3>💡 ヒント</h3><p>${currentPuzzle.hint}</p>`;
        hintBox.classList.remove('hidden');
    }
}

function showMoreHint() {
    if (Array.isArray(currentPuzzle.hint) && currentPuzzle.hint.length > 1) {
        currentHintIndex = 1;
        let hintContent = `<h3>💡 ヒント①</h3><p>${currentPuzzle.hint[0]}</p>`;
        hintContent += `<h3>💡 ヒント②</h3><p>${currentPuzzle.hint[1]}</p>`;
        hintBox.innerHTML = hintContent;
    }
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

// テスト用: 問題ジャンプ機能のイベントリスナー
if (ENABLE_PUZZLE_JUMP) {
    const jumpButtons = document.querySelectorAll('.jump-btn');
    jumpButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const puzzleIndex = parseInt(btn.dataset.puzzle);
            if (puzzleIndex >= 0 && puzzleIndex < puzzles.length) {
                currentPuzzleIndex = puzzleIndex;
                loadPuzzle();
            }
        });
    });
}

// ゲーム開始（開始画面を表示）
init();
