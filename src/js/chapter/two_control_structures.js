export default class chapterTwo {
    constructor() {

    }

    init() {
        let i = 0;
        let j = 8;
        let arr = [0, 1, 2, 3, 4, 5, 7, 9, 'end'];
        let obj = {name: 'Asadbek', lastname: 'Nazarov', age: 21};

        // checkiandj: while (i < 4) {
        //     console.log("i: " + i);
        //     i += 1;
        //
        //     checkj: while (j > 4) {
        //         if (j <= 7) break checkj;
        //         console.log("j: " + j);
        //         j -= 1;
        //         console.log(j + " является нечётным.");
        //     }
        // }
        //
        // function average(x, y) {
        //     return x + y
        // }
        // let f = average;
        //
        // const stats = () => {
        //     console.log(this)
        //     return {
        //         key1: 'key 1',
        //         key2: 'key 1'
        //     }
        // }
        //
        // const stats2 = function () {
        //     console.log(this)
        //     return {
        //         test: '12'
        //     }
        // }

        function makeSizer(size) {
            return function () {
                document.body.style.fontSize = size + 'px';
            };
        };

        var size12 = makeSizer(12);
        var size14 = makeSizer(16);
        var size16 = makeSizer(20);

        document.getElementById('size-12').onclick = size12;
        document.getElementById('size-14').onclick = size14;
        document.getElementById('size-16').onclick = size16;

        var Counter = (function () {
            var privateCounter = 0;

            function changeBy(val) {
                privateCounter += val;
            }

            return {
                increment: function () {
                    changeBy(1);
                },
                decrement: function () {
                    changeBy(-1);
                },
                value: function () {
                    return privateCounter;
                }
            };
        })();

        Counter.increment();
        Counter.increment();
        Counter.decrement();

        const createAccount = () => {
            let balance = 0;
            return {
                deposit: amount => {
                    balance += amount
                },
                withdraw: amount => {
                    if (balance >= amount) {
                        balance -= amount
                    }
                },
                getBalance: () => {
                    return balance
                },
            }
        }

        const myAcc = createAccount();

        // console.log('log', f(6, 6))
        // outer:
        // while (i < arr.length) {
        //     while (j < arr[i].length) {
        //         if (arr[i][j] < 0) break outer;
        //         j++
        //     }
        //     i++
        //     j = 0
        // }
        // for (const idx of arr) {
        //     console.log(`idx=${idx}`)
        // }
        //
        // for (const key in obj) {
        //     console.log(`key=${key}-obj${obj[key]}`)
        // }
        // while (i < 10) {
        //     i++
        //     console.log('while end', i)
        // }
        // console.log('inited chapterTwo')
    }
}
