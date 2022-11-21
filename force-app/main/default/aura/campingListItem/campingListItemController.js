
({
    packItem : function(component, event, helper) {
        var packedButton = component.get('v.item');
        packedButton.Packed__c = true;
        component.set('v.item', packedButton);
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled", true);
    },
    clickPacked: function (component, event, helper) {
        var campingItem = component.get("v.item");
        var updateEvent = component.getEvent("updateCampingItem");
        updateEvent.setParams({ "item": campingItem });
        updateEvent.fire();
    }
})
