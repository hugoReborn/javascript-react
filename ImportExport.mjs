const chanchosFelices = ['chancho1','chancho2', 'chancho3']
const chanchosTristes = ['chancho4','chancho5', 'chancho6']

//module.exports = {
  //  chanchosFelices,
    //chanchosTristes
//}

const fn1 = () => {
    console.log('fn1');
}

function fn2() {
    console.log('fn2');
}

export {fn1, fn2, chanchosTristes}

export default chanchosFelices