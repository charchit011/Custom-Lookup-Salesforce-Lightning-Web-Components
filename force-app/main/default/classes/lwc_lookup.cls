public with sharing class lwc_lookup {
    public lwc_lookup() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getaccounts(string inputValue){
        try {
            if(inputValue ==''){
                return NULL;
            }
            inputValue='%'+inputValue+'%';
            return  [select name,AnnualRevenue from account where name like :inputValue limit 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

