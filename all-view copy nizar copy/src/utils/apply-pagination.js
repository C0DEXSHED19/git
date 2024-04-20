export function applyPagination(documents, page, rowsPerPage) {
  return documents.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}