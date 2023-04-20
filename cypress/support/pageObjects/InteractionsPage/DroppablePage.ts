class dropablePage {



    leftNavBar(selector){
        cy.contains('li', selector).click();
      }


      dragAndDrop(){
         
        
    
        // Get the draggable and droppable elements
        const draggable = cy.get("#draggable");
        const droppable = cy.get("#droppable");
       
        
        // Trigger the drag start event on the draggable element
        draggable.trigger("mousedown", { which: 1, pageX: -200, pageY: -30 });
        
        // Trigger the drag event on the draggable element
        draggable.trigger("mousemove", { which: 1, pageX: 50, pageY: 50 });

        draggable.trigger("mouseup", { which: 1, pageX: 50, pageY: 50 });
      
        
     
      
        
};


dragAndDropValidation()
{
    const droppable = cy.get("#droppable");
    droppable.should("contain", "Dropped!");
}
}




export default dropablePage