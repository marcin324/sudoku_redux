import {
  START_SUDOKU,
  SET_DIFFICULTY,
  RESTART_SUDOKU,
  SOLVE_SUDOKU,
  CHECK_SUDOKU,
  UPDATE_BOARD
} from "../actions";
import sudoku from "sudoku-umd";

const initialState = {
  initialBoard: "",
  board: "",
  difficulty: ""
};

const sudokuReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.difficulty
      };
    case START_SUDOKU:
      const level = state.difficulty;
      const newSudoku = sudoku.generate(level);
      return {
        difficulty: level,
        initialBoard: [...newSudoku],
        board: [...newSudoku]
      };
    case UPDATE_BOARD:
      let board = [...state.board];
      let tileValue = action.value;
      const correctTileValue =
        [...tileValue].length > 1
          ? [...tileValue].splice(0, 1).join("")
          : tileValue;
      board.splice(action.id, 1, correctTileValue);
      if (correctTileValue === "0") {
        return {
          ...state
        };
      } else {
        return {
          ...state,
          board: board
        };
      }
    case RESTART_SUDOKU:
      return {
        ...state,
        board: state.initialBoard
      };
    case CHECK_SUDOKU:
      const checkSudoku = sudoku.solve(state.board);
      if (!checkSudoku) {
        alert(`There is no solution.\nImprove your sudoku.`);
      } else {
        alert(`You're on the right way!\nKeep going!`);
      }
      return {
        ...state
      };
    case SOLVE_SUDOKU:
      const solveSudoku = sudoku.solve(state.initialBoard);
      return {
        ...state,
        board: [...solveSudoku]
      };
    default:
      return state;
  }
};

export default sudokuReducers;
