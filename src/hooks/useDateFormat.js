/**
 * Transforma la fecha de "YYYY-MM-DD" a "DD-MM-YYYY"
 * @param dateString
 * @returns {string}
 */
export const useDateFormat = (dateString) => {
    const [ year, month, day ] = dateString.split('-');
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
};
