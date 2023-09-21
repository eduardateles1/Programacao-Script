import style from '@/styles/Tabuleiro.module.css';
import Peao from '../pages/Peao.js';

export default function Square() {
    const numRows = 8;
    const numCols = 8;
  
    const initialBoardState = [
        [null, <Peao isBlack={true} />, null, <Peao isBlack={true} />, null, <Peao isBlack={true} />, null, <Peao isBlack={true} />],
        [<Peao isBlack={true} />, null, <Peao isBlack={true} />, null, <Peao isBlack={true} />, null, <Peao isBlack={true} />, null],
        [null, <Peao isBlack={true} />, null, <Peao isBlack={true} />, null, <Peao isBlack={true} />, null, <Peao isBlack={true} />],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [<Peao isBlack={false} />, null, <Peao isBlack={false} />, null, <Peao isBlack={false} />, null, <Peao isBlack={false} />, null],
        [null, <Peao isBlack={false} />, null, <Peao isBlack={false} />, null, <Peao isBlack={false} />, null, <Peao isBlack={false} />],
        [<Peao isBlack={false} />, null, <Peao isBlack={false} />, null, <Peao isBlack={false} />, null, <Peao isBlack={false} />, null],
      ];
  
    const renderSquare = (row, col) => {
      const isBlack = (row + col) % 2 === 1;
      const className = isBlack ? style.Preto : style.Branco;
  
      return (
        <div key={`${row}-${col}`} className={className}>
          {initialBoardState[row][col]}
        </div>
      );
    };
  
    const renderRow = (row) => {
      return (
        <div key={row} className={style.fundo}>
          {Array.from({ length: numCols }, (_, col) => renderSquare(row, col))}
        </div>
      );
    };
  
    return (
      <div className={style.tabuleiro}>
        {Array.from({ length: numRows }, (_, row) => renderRow(row))}
      </div>
    );
  }
  