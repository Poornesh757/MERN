        //select Multiple eeents
        //document.getElementByClassName

        // const items=document.getElementsByClassName("collection-item");
        // console.log(items);

        // items[0].style.color ="red";
        // items[3].textContent = "Production Plannings";

        //get ELements By tag Name
        // const items=document.getElementsByTagName("li"); 
        // console.log(items);

        // items[0].style.color ="blue";
        // items[3].textContent = "Production Plannings";

        //document Query Selector all elements// Nodelist

        const lis = document.querySelectorAll("li.collection-item");
        console.log(lis);
        
        lis.forEach(function(li){
            li.textContent="Production Plaanning";
        });

        const liOdd=document.querySelectorAll("li:nth-child(odd)");
        console.log(liOdd);
        liOdd.forEach(function(li){
            li.style.backgroundColor="#ccc";
        });