/**
 *
 * @param {*} store
 */

export const setStoreByUrlParams = (store) => {
  if (window.location.search !== "") {
    const queryParams = new URLSearchParams(window.location.search);

    const columns =
      (queryParams.has("columns") && queryParams.get("columns")) || 24;
    const rows = (queryParams.has("rows") && queryParams.get("rows")) || 5;
    const childarea =
      (queryParams.has("childarea") &&
        decodeURIComponent(queryParams.get("childarea")) &&
        decodeURIComponent(queryParams.get("childarea")).split(",")) ||
      [];

    if (columns !== "") {
      store.commit(`updateColumns`, columns);
    }
    if (rows !== "") {
      store.commit(`updateRows`, rows);
    }
    if (
      Array.isArray(childarea) &&
      childarea.length > 0 &&
      typeof childarea[0] === "string"
    ) {
      store.commit(`updateChildarea`, childarea);
    }
  }
};
