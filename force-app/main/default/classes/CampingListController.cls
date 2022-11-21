public with sharing class CampingListController {
    @AuraEnabled
    public static List<Camping_Item__c> getItems(){
       List<String> fieldsToCheck = new List<String>{'Id','Name', 'Price__c', 'Quantity__c','Packed__c'};
       Map<String,Schema.SObjectField> fieldsDescribeTokens = Schema.SObjectType.Camping_Item__c.fields.getMap();
       for(String field : fieldsToCheck){
            if(! fieldsDescribeTokens.get(field).getDescribe().isAccessible()){
                throw new System.NoAccessException();
            }
       }
        return [SELECT Id, 
                        Name, 
                        Price__c, 
                        Quantity__c,
                        Packed__c 
                FROM Camping_Item__c
                WITH SECURITY_ENFORCED];
    }
    @AuraEnabled
    public static Camping_Item__c  saveItem(Camping_Item__c item){
        upsert item;
        return item;
    }
}
