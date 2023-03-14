



//表示键盘被按下
$(document).keydown(function(event){
    //key down事件
    switch(event.keyCode){
        case 37:
            //完成向左移动的逻辑
        if(moveLeft()){
            generateOneNumber();
            //判断是否满了
            isgameover();
            
        }
        case 38:
            break;
        case 39:
            break;
        case 40:
            break;
        default :
            break;
    }
})


function moveLeft(){
    if(!canMoveLeft(board)){
        return false;
    }


    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){

            if(board[i][j]!=0){
                for(var k=0;k<j;k++){
//如果是当前值不为o的数字格左边的数字格必须值为О并且中间的数字格必须值也为o，具体逻辑如下
                    if(board[i][k]!=0 && noBlockHorizontalCol(i,j,board)){
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][k];
                        board[i][j]=0;
                    }else if(board[i][k]==board[i][j]){

                        showMoveAnimation(i,j,i,k);
                        board[i][k]+=board[i][k];
                        board[i][j]=0;
                    }
                }
            }
            
            
            
            //向左的逻辑

           
        }
    }

    setTimeout("updateBoardView()",200);
    updateBoardView();
    return false;
}