const game = document.getElementById('game');
const result = document.getElementsById('result');
const aiPlayer= 'X',huPlayer = 'O';

class Game{
    constructor(size=3){
        this.size = size;
        //Генерируем первоначальный ход , если 0 то ходим мы если 1 то компьютер
        //умножаем на два что бы получить целое число и округленные в меньшую сторону
        // если получаем 1.5 то будет 1 , если 0.8 то будет 0 и 1 
        this.turn = Math.floor(Math.random()*2);
        this.celllist=[];

        this.ressetGame();
    }

    get limit(){
        return this.size * this.size;
    }


    init(){
        for(let i=0; i<this.size;i++){
            console.log(i);
            const element = array[i];
            const cell = document.createElement('div');
            cell.setAttribute('data-id',i);
                cell.addEventListener('click',this.hummanPlay());
            game.appendChild(cell);
            this.celllist.push(cell);
        }
    }
    ressetGame(){
        //Инициализируем доску
        this.board = [...Array(this.size*this.size).keys()]
        //Очищаем поля html 
        result.innerHTML = '';
        game.innerHTML = '';
        //
    }

    hummanPlay(){
        //this. -> e (равен event)
        return(e) => {

        }
    }
}

    new Game();