// const questions = ["Who is the president of Nigeria? A.Buhari B.Mudabai C.Goodluck D.Tinubu",
//     "Where is Unizik Located? A.Awka B.Lagos C.Bauchi D.Taraba",
//     "Who is the father of Electricity? A.Faraday B.Einstien C.Boyle D.Charles"]
// const answers = ["D", "A", "A"]
// const myAnswer = []
// let total = 0
// let askedquestions = []

// for (let i = 0; i < questions.length; i++) {
//     let rand = Math.floor(Math.random() * questions.length)
//     while (askedquestions.includes(rand)) {
//         rand = Math.floor(Math.random() * questions.length)
//     }
//     askedquestions.push(rand)
//     const answer = prompt(questions[rand])
//     total = answer === answers[rand] ? total + 1 : total
//     myAnswer[i] = answer
// }

// const message = total === 0 ? `You got ${total} ${total > 1 ? 'questions' : 'question'} correctly out of ${answers.length}` : 'Sorry you didnt get any questions correctly'
// console.log(message)

