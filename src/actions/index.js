export const fetchCompany = (detail) => {
    console.log(detail);
    return {
        type: 'COMPANY_DETAIL',
        payload: detail
    }
}