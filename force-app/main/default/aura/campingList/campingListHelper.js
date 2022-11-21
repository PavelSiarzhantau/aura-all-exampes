/* eslint-disable no-console */
({
    saveCampingItem: function (component, campingItem, isPushToList) {
        var action = component.get("c.saveItem");
        action.setParams({ "item": campingItem });
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                if (isPushToList) {
                    var items = component.get("v.items");
                    items.push(campingItem);
                    component.set("v.items", items);
                }
                console.log("Create campingItem: " + JSON.stringify(campingItem));
            } else {
                console.log("ERROR:::: " + response.getError());
            }
        })
        $A.enqueueAction(action);
    }
    // customValidation: function (field) {
    //     if ($A.util.isEmpty(field.get("v.value"))) {
    //         console.log(field);
    //         console.log('ERROR:::::');
    //         return false;
    //     }
    //     return true;
    // }
})
