import { useEffect } from 'react';

const DamasBoard = () => {
  useEffect(() => {
    const board = document.querySelector(".board");

    // Loop para criar as casas do tabuleiro
    for (let row = 1; row <= 8; row++) {
      for (let col = 1; col <= 8; col++) {
        const square = document.createElement("div");
        const classColor = (row + col) % 2 === 0 ? "white" : "black";
        square.classList.add("square", classColor);

        // Colocar pedras vermelhas e brancas nas casas iniciais
        if (classColor === "black" && row <= 3) {
          const stone = document.createElement("div");
          stone.classList.add("stone", "red");
          square.appendChild(stone);
        } else if (classColor === "black" && row >= 6) {
          const stone = document.createElement("div");
          stone.classList.add("stone", "white-stone");
          square.appendChild(stone);
        }

        board.appendChild(square);
      }
    }
  }, []);

  return (
    <div className="board">
      {/* O tabuleiro de damas será renderizado aqui */}
    </div>
  );
};

export default DamasBoard;
