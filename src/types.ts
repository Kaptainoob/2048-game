export type TPlayer = {
  id: number;
  name: string;
  email: string;
};

export type TScore = {
  player: TPlayer;
  score: number;
};

export type UserCreateInput = {
  name: String
  email: String
  password: String
}

export type User = {
  id: string
  name: String
}

export type GameData = {
  finished: boolean
  score: number
  state: number[][]
}

export type GameInput = {
  state: number[][]
  score: number
}

export enum GameDirection {
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
  Down = 'Down'
}

export enum SnackbarType {
  Success,
  Error,
  Warning
}

export type SnackbarMessage = {
  message: string
  type: SnackbarType
}