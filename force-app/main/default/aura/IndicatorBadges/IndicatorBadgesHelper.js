/* eslint-disable no-console */
({
    getLabelForRecord: function (component, sObj) {
    // when user edit some fields on object we dont need to query label again.
      if(!component.get("v.objLabel")){
        var action = component.get("c.getSObjectLabel");
        action.setParams({
          sObjName : sObj
        });
        action.setCallback(this, function(response){
          var state = response.getState();
          if(state === "SUCCESS"){
            var label = response.getReturnValue();
            component.set("v.objLabel", label);
          } else if(state === "ERROR"){
            console.log('Error: ' + JSON.stringify(response.error));
          } else {
            console.log('Unknown problem, state: '+ state + ', error: ' + JSON.stringify(response.error));
          }
        });
        $A.enqueueAction(action);
      }
    },
    getBadgesForRecord : function(component, recId, sObj) {
      var action = component.get("c.getIndicators");
      action.setParams({
        recId : recId,
        objectName : sObj
      });
      action.setCallback(this, function(response){
        var state = response.getState();
        if(state === "SUCCESS"){
          var badges = response.getReturnValue();
          component.set("v.badgeList", badges);
        } else if (state === "ERROR"){
          console.log('Error: ' + JSON.stringify(response.error));
        } else {
          console.log('Unknown problem, state: ' + state + ', error: ' + JSON.stringify(response.error));
        }
      });
      $A.enqueueAction(action);
    },
    //future code here
  })
