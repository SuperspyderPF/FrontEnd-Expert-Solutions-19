/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let queue = [1],
        adjList = {},
        n = board.length,
        flag = true,
        count = 1
        visited = new Array((n*n)+1).fill(-1);

    visited[1] = 0;
    
    for(let i=n-1; i>=0; i--){
        if(flag){
            for(let j=0;j<n; j++){
                adjList[count++] = board[i][j];
            }
        }else{
            for(let j=n-1;j>=0; j--){
                adjList[count++] = board[i][j];
            }
        }
        flag = !flag;
    }

    while(queue.length > 0){
        let curr = queue.shift();
        
        for(let i=curr+1; i<= Math.min(n*n, curr+6); i++){
            let next = (adjList[i]==-1)? i : adjList[i];

            if(visited[next] == -1){
                queue.push(next);
                visited[next] = visited[curr]+1;
            }
        }
    }
    return visited[n*n];
};