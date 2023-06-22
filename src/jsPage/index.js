console.clear()

const langs = ['en', 'ja'];

let langNum = 0;
let lang = langs[langNum]

const Messages = {
  en: {
    Hello: 'Hello!',
    DeclarationOfCounting: 'We will now count.',
    Counter: ['one', 'two', 'tree'],
    Messages: [
      'Show Tags',
      'Hello World!',
      'A simple primary alert—check it out!'
    ]
  },
  ja: {
    Hello: 'こんにちは',
    DeclarationOfCounting: 'これから数を数えます。',
    Counter: ['いち', 'に', 'さん'],
    Messages: [
      'タグを表示します。',
      'こんにちは、世界！',
      'シンプルな一次警報です！'
    ]
  }
}

console.log(Messages[lang].Hello);

const ShowCounter = (arg) => {
    console.log(Messages[lang].Counter[arg]);
};

console.log(Messages[lang].DeclarationOfCounting)

let index = 0;
while(index <= Messages[lang].Counter.length){
  ShowCounter(index);
  index++;
}

// console.log(Messages[lang].Messages[0])
// document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
//   window.alert(Messages[lang].Messages[1])
// });

// document.getElementsByTagName('button')[1].addEventListener('click', ()=> {
//   lang = langs[langNum++%langs.length]
// });