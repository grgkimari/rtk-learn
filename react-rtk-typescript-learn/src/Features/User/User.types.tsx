export interface User {
  id: number;
  name: string;
}

export interface UserSliceType {
  loading: boolean;
  data: Array<User>;
  error: string;
}

export interface UserErrorActionType {
  type : string
  error : {
    message : string
  }
}