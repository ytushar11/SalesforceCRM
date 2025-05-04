public with sharing class CRMDataController {
   @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts(){
        List<Account> laccount = [select name,id ,Industry, AnnualRevenue  from Account];
        return laccount;
    }
      @AuraEnabled
    public static List<Account> searchAccounts(String keyword) {
        return [SELECT Id, Name, Industry, AnnualRevenue FROM Account WHERE Name LIKE :('%' + keyword + '%')];
    }
}