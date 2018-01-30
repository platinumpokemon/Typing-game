var sentences = [ 
    He is a fighting robot! Megaman!
  
];
var upkey,
   lowkey;
sentencecounter = 0;


$(document).ready(() => {
   //variables for keyboard//
   upkey = $('#keyboard-upper-container');
   lowkey = $('#keyboard-lower-container');
   
   
if ('#keyboard-upper-container') {
   upkey.hide();        
       
}
  
   $(document).on('keyup keydown', (e) => {
       handleKeyPress(e.type, e.shiftKey, e.keyCode);
   });
});

toggleKeyboards();

   function toggleKeyboards(showUpKey) {
       
       if (showUpKey) {
           lowkey.hide();
           upkey.show();
       } else {
           upkey.hide();
           lowkey.show();
       }
   }
   function handleKeyPress(type, isShift, keyCode) {
       if (keyCode === 16) {
           if (type === 'keydown') {
               toggleKeyboards(true);
           } else {
               toggleKeyboards();
           }
       }
      
       var trueKeyCode = configureTrueKeyCode(keyCode, isShift);

       handleHighlight(trueKeyCode, type);
   }

   function handleHighlight(keyCode, type) {
       if (type === 'keydown') {
           $('#' + keyCode).css('background-color', 'white');
       } else {
           $('#' + keyCode).css('background-color', 'blue');
       }
   }

   function configureTrueKeyCode(keyCode, isShift) {
       if (isShift === false && keyCode >= 65 && keyCode <= 90) {
           return keyCode + 32;
       }

       return keyCode;
   }