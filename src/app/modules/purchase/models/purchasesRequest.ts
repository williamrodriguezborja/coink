export interface purchasesRequest{
    vault_id: string,
    filter_field: string,
    filter_value: string,
    begin_date: string,
    end_date: string,
    page: number,
    items_per_page: number
}
