 function openBlock(el) {
     var kids = el.parentNode.childNodes;
     for (var k = 0; k < kids.length; k++) {
         var child = kids[k];
         if (child && child.className == "this_block_is_hidden") {
             if (child.style.display != 'block') {
                 child.style.display = 'block';
             } else {
                 child.style.display = 'none';
             }
         }
     }
 }


