import { types, flow, SnapshotIn, getSnapshot, Instance } from 'mobx-state-tree'
import { createContext, useContext, useMemo } from 'react';

const PackageModel = types.model('Package', {
  ID: types.identifierNumber,
  Name: types.string,
  Date: types.string,
  Price: types.string,
  PriceStart: types.number,
  PriceEnd: types.number,
  Currency: types.string,
  Bonus: types.string,
  Duration: types.number,
  MonthlyReturn: types.string,
  MaturityBonus: types.number,
})

const RootStore = types.model('RootStore', {
  packages: types.array(PackageModel),
}).actions((self) => ({
  setPackages(rawPacks: SnapshotIn<typeof PackageModel>[]) {
    const packs = rawPacks.map((pack) => PackageModel.create(pack));
    self.packages.replace(packs);
  },
}))

const rootStore = RootStore.create({ packages: [] });

export default rootStore;




// const RootStoreContext = createContext(rootStore);

// export const useRootStore = () => useContext(RootStoreContext);

// let _store: Instance<typeof RootStore>;
// export const useStore = () => {
//   const store = useMemo(() => {
//     if (!_store) _store = RootStore.create({ packages: [] });
//     return _store;
//   }, []);
//   return store;
// };
