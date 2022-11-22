/* eslint-disable no-console */
({
    handleClick: function (component, event, helper) {
        $A.createComponent(
            "lightning:card",
            { title: "Dynamic Component" },
            function (card, status, errorMessages) {
                if (status === "SUCCESS") {
                    var dynamicCards = component.get("v.dynamicCards");
                    dynamicCards.push(card);
                    component.set("v.dynamicCards", dynamicCards);
                    //  console.log('fired');
                    // var body = component.get("v.body");
                    // body.push(card);
                    // component.set("v.body", card);
                } else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.");
                    // Show offline error
                } else if (status === "ERROR") {
                    console.log("Error message: " + errorMessages[0].message);
                }
            }
        );
    },
    replaceBody: function (component, event, helper) {
        var allCards = component.get("v.dynamicCards");
        allCards.forEach((e) => {
            $A.createComponent(
                "lightning:button",
                {
                    "aura:id": "findableAuraId",
                    label: "Press Me"
                },
                function (newButton, status, errorMessage) {
                    //Add the new button to the body array
                    if (status === "SUCCESS") {
                        var body = e.get("v.body");
                        e.set("v.body", newButton);
                    } else if (status === "INCOMPLETE") {
                        console.log("No response from server or client is offline.");
                        // Show offline error
                    } else if (status === "ERROR") {
                        console.log("Error: " + errorMessage);
                        // Show error message
                    }
                }
            );
        });
        component.set("v.dynamicCards", allCards);
    },
    createDiv: function (component, event, helper) {
        $A.createComponent(
            "aura:HTML",
            {
                tag: "div",
                body: "Some Text",
                HTMLAttributes: { id: "myDiv" },
                class: ""
            },
            function (result, status, errorMessage) {
                if (status === "SUCCESS") {
                    console.log("SUCCESS createDiv()");

                    var body = component.get("v.body");
                    body.push(result);
                    component.set("v.body", result);
                } else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.");
                    // Show offline error
                } else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
    }
});
