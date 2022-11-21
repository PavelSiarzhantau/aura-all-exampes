/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
({
    
    doInit: function(component, event, helper) {
        var action = component.get("c.getItems");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            } else {
                console.log("Failed with state: " + state);
            }
        })
        $A.enqueueAction(action);
    },
    handleAddItem: function (component, event, helper) {
        console.log('handle');
        var newCampingItem = event.getParam("item");
        helper.saveCampingItem(component, newCampingItem, true);
    },
    handleToggleChange: function (component, event, helper) {
        console.log('handle toggle change');
        var campingItemToUpdate = event.getParam("item");
        helper.saveCampingItem(component, campingItemToUpdate, false);
    }

})