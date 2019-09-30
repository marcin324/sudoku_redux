import { connect } from "react-redux";
import Buttons from "../presentational/Buttons";
import {
  startSudoku,
  restartSudoku,
  checkSudoku,
  solveSudoku,
  setDifficulty
} from "../../actions";

const mapDispatchToProps = dispatch => ({
  startSudoku: () => dispatch(startSudoku()),
  restartSudoku: () => dispatch(restartSudoku()),
  checkSudoku: () => dispatch(checkSudoku()),
  solveSudoku: () => dispatch(solveSudoku()),
  setDifficulty: difficulty => dispatch(setDifficulty(difficulty))
});

const mapStateToProps = state => ({
  difficulty: state.difficulty
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
