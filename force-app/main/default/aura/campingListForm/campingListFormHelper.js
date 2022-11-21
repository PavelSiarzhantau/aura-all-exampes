/* eslint-disable no-console */
({
    validateItem: function (component) {
        var validCamping = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        return validCamping;
    },
    createItem : function(component) {
        // var action = component.get("c.saveItem");
        var newCampingItem = component.get("v.newItem");
        var updateEvent = component.getEvent("addItem");
        updateEvent.setParams({ "item": newCampingItem });
        updateEvent.fire();
            // action.setParams({ "item": newCampingItem });
            // action.setCallback(this, function (response) {
            //     var state = response.getState();
            //     if (state === 'SUCCESS') {
            //         console.log("Create campingItem: " + JSON.stringify(newCampingItem));
            //         var campingItems = component.get("v.items");
            //         campingItems.push(newCampingItem);
            //         component.set("v.items", campingItems);

        component.set("v.newItem", { 'sobjectType': 'Camping_Item__c',
        'Quantity__c': 0,
        'Price__c': 0,
        'Packed__c': false
        });          
            
        
        //         } else {
        //             console.log("Failed during saving: " + response);
        //         }
        //     })
        // return action;
    },
})
