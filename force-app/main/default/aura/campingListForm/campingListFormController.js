({
    clickCreateItem : function(component, event, helper) {
        // If we pass error checking, do some real work
        //custom validation
        // var find = component.find('campingform').find(e => e.get("v.name") === "campingPrice");
        // var isPriceEmpty = helper.customValidation(find);
        // if (!isPriceEmpty) {
        //     find.set("v.errors", [{ message: "please populate this field" }]);
        //     find.setCustomValidity('please populate field');
        //     find.reportValidity('please populate field');
        // }
        var validCamping = helper.validateItem(component);
        //custom validation
        if(validCamping){
            // Create the new expense
            helper.createItem(component);
        }
    },
})
