
export interface UserState {
  isLoggedIn: boolean;
  // TODO properly type config & units
  // TODO and move them into a different state module
  config: object;
  units: object;
}

export interface RootState {
  version: string;
  user: UserState;
}
