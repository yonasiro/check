// let untyped='';
// const untypedfield = document.getElementById('untyped');


// const textLists=[
//     'Hello World',
//     'This is my app',
//     'How are you?'
// ]

// const createText=()=>{
//     untyped=textLists[0];
//     untypedfield.textContent=untyped;
// };



// createText();
// const Keypress=e=>{};
// const rankCheck=score=>{};
// const gameOver=id=>{};
// const Timer=()=>{};



 // 変数の初期化
let untyped = '';
 
// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
 // 複数のテキストを格納する配列
const textLists = [
    'Hello World',
    'This is my App',
    'How are you?'
  ];

// ランダムなテキストを表示
const createText = () => {
    untyped = textLists[0];
    untypedfield.textContent = untyped;
    }; 
  createText();
 // キー入力の判定
 const keyPress = e => {};
 
 // タイピングスキルのランクを判定
 const rankCheck = score => {};
 
 // ゲームを終了
 const gameOver = id => {};
 
 // カウントダウンタイマー
 const timer = () => {};
