import { Store } from "vuex";
import { IrowUserTable } from '../interfaces/user.interface'

declare module "@vue/runtime-core" {
  interface State {
    loading: boolean;
    userLists: Array<IrowUserTable>;
    totalUser: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}