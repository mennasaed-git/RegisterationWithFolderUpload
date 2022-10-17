export class APIResponse
{
    success : boolean = false;
    result : MerchantCategory = new MerchantCategory();

}

export class MerchantCategory
{
    merchant_category : string = "";
    assigned_user_id : string = "";
    createdtime : string = "";
    modifiedtime : string = "";
    merchant_category_ar : string = "";
    id : string = "";

}