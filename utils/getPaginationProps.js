export function getPaginationProps(currentPage, itemsPerPage , listLength){
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    const totalLength = Math.ceil( listLength / itemsPerPage)

    return { startIndex, endIndex, totalLength }
}