const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export function linesWinner(squers){
    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(squers[a] && squers[a] === squers[b] && squers[a] === squers[c]){
            return {
                wineer: squers[a], 
                line: lines[i]
            }
        }
    }

    return null
}

export function easyPlay(squres, player){


    const countArrya = (arr =>{
        let count = 0;
        arr.forEach(el => {
            if(squres[el] === player){
                count += 1;
            }
        });
        return count
    })

    const lineSort = lines.sort((a, b) =>{
        const acount = countArrya(a);
        const bcount = countArrya(b);
        return bcount - acount
    })

    for(let i = 0; i < lineSort.length; i++){
        let val = lineSort[i].find((el) =>{
            if(squres[el] === ""){
                return el + ''
            }
            return null
        })

        if(!val){
            continue
        }else{
            return +val
        }
    }
    return null
}