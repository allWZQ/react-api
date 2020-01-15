import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//显示一个正方形
// class Square extends React.Component {
//   render() {
//     return (
//       //接收一个方法
//       <button className="square" onClick={() => this.props.onClick()}>
//         {/* 子组件接收通过this.props...接收 */}
//         {/* 子组件通过this.state...接收state的值 */}
//         {this.props.value}
//       </button>
//     );
//   }
// }
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
//最大的正方形
class Board extends React.Component {
  //父组件传递子组件值
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        //父组件传递一个函数给子组件
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  //使用constructor初始化state最开始的状态
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      valueNumber: 0,
      xIsNext: true
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.valueNumber + 1);
    console.log(history);
    const current = history[history.length - 1];
    console.log(current);
    const squares = current.squares.slice();
    console.log(squares);
    if (calculateWinner(squares) || squares[i]) {
      //不在执行handleClick方法
      return false;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      //history和squares拼接
      history: history.concat([
        {
          //使用副本覆盖
          squares: squares
        }
      ]),
      valueNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  jumpTo(index) {
    this.setState({
      valueNumber: index,
      xIsNext: index % 2 === 0
    });
  }
  render() {
    const history = this.state.history;
    console.log(history);
    const current = history[this.state.valueNumber];
    console.log(current);
    const winner = calculateWinner(current.squares);
    console.log(winner);
    const movers = history.map((value, index) => {
      const desc = index ? "GO to move #" + index : "GO to game start";
      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(index)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "winner:" + winner;
    } else {
      status = "Next player:" + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{movers}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

//计算获胜的方法
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
