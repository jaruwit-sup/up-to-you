const A = [1, 2, 2, 4, 5];
const B = [[1, 0, -1],[2, 0],[3, 1],[4, 2],[2, 2]];
console.log(solution(A, B));

function solution(A, B) {
    const result = [];
    let sum = A.reduce((x, y) => x + y);
    let newValue;
    for (let i = 0; i < B.length; i++) {
        const oldValue = A[B[i][1]];
        const operation = B[i][0];

        switch (operation) {
            case 1:
                newValue = B[i][2];
                break;
            case 2:
                newValue = oldValue * 2;
                break;
            case 3:
                const divide = oldValue / 2;
                newValue = divide >= 0 ? Math.floor(divide) : Math.ceil(divide);
                break;
            case 4:
                newValue = B[i][1];
                break;
            default:
                throw new Error('the operation not found');
        }

        if (operation !== 4) {
            A[B[i][1]] = newValue;
            sum += newValue - oldValue;
        } else {
            A.fill(newValue);
            sum = A.length * newValue;
        }
        result.push(sum);
    }
    return result;
}
