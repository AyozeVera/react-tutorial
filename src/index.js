import React from 'react';
import ReactDOM from 'react-dom';
import { Board, Game, Square } from './components/';
/* Using this we won't need the index.js file on components folder
  import Board from './components/Board';
  import Square from './components/Square';
  import Game from './components/Game';
*/
import './index.css';

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
