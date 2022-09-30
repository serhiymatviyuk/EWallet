var store = undefined;

const storeProvider = {
    init(configuredStore) {
        store = configuredStore;
    },
    getStore() {
        return store;
    }
}

export default storeProvider;