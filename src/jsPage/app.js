// 回答ボタン
let $bts = document.getElementsByTagName('button')

// 問題セット
let qIndex = 0
const quizList = [
    {
        question: 'jsでHTMLドキュメントを表すオブジェクトはどれ?',
        answer: [
            'MyDocuments', 
            'MyDocument', 
            'Documents', 
            'Document'
        ],
        correct: 'Document'
    },
    {
        question: 'jsの慣習でHTMLオブジェクトを入れる変数の先頭に付けられている記号はどれ?',
        answer: [
            '%', 
            '$', 
            '_',
            '#'
        ],
        correct: '$'
    }
]


const setBtEvent = () => {
    btIndex = -1;
    while(++btIndex < $bts.length){
        $bts[btIndex].addEventListener('click', (e) => {
            console.log(e)
            if(quizList[qIndex].correct === e.target.textContent){
                window.alert('正解!')
                qIndex++;
                if(qIndex < quizList.length){
                    // なにもしない。
                } else {
                    window.alert('一問目に戻ります。')
                    qIndex = 0
                }
                setupQuize(qIndex)
            } else {
                window.alert('不正解...')
            }
        });
    }
}

const setupQuize = (qIndex) => {

    // 問題文をセット
    document.getElementById('js-question').textContent = quizList[qIndex].question

    // 選択肢をセット
    let ct2 = -1;
    while(++ct2 < quizList[qIndex].answer.length){
        $bts[ct2].textContent = quizList[qIndex].answer[ct2]
    };
}

// 最初の問題をセット
setupQuize(qIndex)
setBtEvent()
