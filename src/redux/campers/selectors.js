export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectCurrentCamper = state => state.campers.currentCamper;

export const selectHasMore = state =>
    state.campers.items.length < state.campers.total;

export const selectOverlayLoading = state => state.campers.overlayLoading;