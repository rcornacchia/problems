/**
 * @param {character[][]} board
 * @return {boolean}
 */
    // if not valid board return false
    // check columns
    // check rows
    // check individual square
        // you can check what square you are by doing modulo 3
    // you can check all of them at the same time
var isValidSudoku = function(board) {
    let rows = []
    let cols = []
    let squares = []
    
    for (let i=0; i<9; i++) {
        rows.push(new Set())
        cols.push(new Set())
        squares.push(new Set())
    }
    for (let row=0; row < board.length; row++) {
        for (let col=0; col < board.length; col++) {
            let entry = board[row][col]
            if (entry == '.') continue;
            
            if (cols[col].has(entry)) {
                return false
            } else cols[col].add(entry)
            
            if (rows[row].has(entry)) {
                return false
            } else rows[row].add(entry)
            
            let squareRow = Math.floor(row / 3)
            let squareCol = Math.floor(col / 3)
            let squareId = squareRow * 3 + squareCol
            if (squares[squareId].has(entry)) {
                return false
            } else squares[squareId].add(entry)
        }
    }
    
    return true
};