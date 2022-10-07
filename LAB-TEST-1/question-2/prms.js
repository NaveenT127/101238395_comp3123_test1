const resolvedPromise = (delay) =>
    new Promise(resolve => setTimeout(resolve, delay))
const rejectedPromise = (delay) =>
    new Promise(reject => setTimeout(reject, delay))

resolvedPromise(500).then(() => {
    let success = { 'message': 'delayed success!' }
    console.log(success)
})
rejectedPromise(500).then(() => {
    try {
        throw new Error('{ error: \'delayed exception!\' }')
    } catch (e) {
        console.error(e.message)
    }
})