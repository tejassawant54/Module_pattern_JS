var bkInfo = document.getElementById("bKInfo"),
    stInfo = document.getElementById("stInfo"),
    wtcInfo = document.getElementById("wtcInfo"),
    tpInfo = document.getElementById("tpInfo"),
    sfcInfo = document.getElementById("sfcInfo"),
    iccInfo = document.getElementById("iccInfo"),
    petInfo = document.getElementById("petInfo"),
    zigInfo = document.getElementById("zigInfo");

var modules = (function(){
    
    var svgNS = "http://www.w3.org/2000/svg", 
        svg = document.getElementsByTagName("svg")[0],
        bKDiv ="";

    /**
    * init() - Creates javascript object.
    * @param {string} preTxtVal - Input from text area.
    */
    
    var init = function(){
        
        bkFunc();
        stFunc();
        wtcFunc();
        taipieFunc();
        sfcFunc();
        iccFunc();
        petFunc();
        zfFunc();
    };
    
    /**
    * bkFunc() - Function defining to create and events over svg element
    */
    
    var bkFunc = function(){
        
        var burj_khalifa = document.createElementNS(svgNS,'path'),
            light = document.createElementNS(svgNS,'circle'),
            text = document.createElementNS(svgNS,'text'),
            g = document.createElementNS(svgNS,'g'),
            bkID = "";
        
        g.setAttribute('transform','translate(-145,-37)');
        
        burj_khalifa.setAttribute('id','burj_khalifa');
        burj_khalifa.className = "st0";
        burj_khalifa.setAttribute('d','M184.1,604.5h130.5v-11.9h-13v-4.7h-8.3v-5.5l-5.4-0.2l-0.8-42.4l-5.7-0.5l0.8-56.9l-6-1.1l-0.5-70.1l-5.2-1.1l-1-79.4l-4.1-4.3c0-61.1,0-37.2,0-58l-4.7-5.7l-0.5-0.2h0.8v-22.3l-3.2-2.2l-0.5-21.3h-0.7V190l-2.9-3.9l-0.8,1.7h0.8v-36.3l-3-2.2l-0.1-11.7l-0.1-52.1h-0.7l0,0v50.1l-3.5,1.9v37.6l-2.2,2l-0.5,36.2l-3.9,3.4v35.7l-1.8,2.8l-0.5,102.6l-7.3,1.4l-0.5,73.9l-6.8,1.8v68.8l-4.1,0.6l-0.5,48.2l-5.7,0.7v28.4h-6.3v6.3h-5.2v4.7h-16.6');
        
        light.setAttribute('id','light');
        light.setAttribute('cx','250');
        light.setAttribute('cy','85');
        light.setAttribute('r','3');
        light.setAttribute('fill','red');
        
        text.setAttribute('x','220');
        text.setAttribute('y','65');
        text.setAttribute('font-size','12');
        text.setAttribute('font-family','Verdana');
        text.textContent = "Burj Khalifa";
        
        g.appendChild(text);
        g.appendChild(light);
        g.appendChild(burj_khalifa);
        svg.appendChild(g);
        
        var lightAni = document.querySelector("#light").animate([
            {opacity: 1},
            {opacity: 0.2}
        ],{
            duration: 450,
            iterations: Infinity,
        });
        
        bkID = document.getElementById("burj_khalifa");
        
        bkID.addEventListener("mouseover",function(){
            
            showInfo(bkInfo,30,300);
        
        },false);
        
        bkID.addEventListener("mouseout",function(){
            removeInfo();
        },false);
    };
    
    /**
    * stFunc() - Function defining to create svg element
    */
    
    var stFunc = function(){
        
        var shanghaiTower = document.createElementNS(svgNS,'path'),
            text = document.createElementNS(svgNS,'text'),
            g = document.createElementNS(svgNS,'g');

        g.setAttribute('transform','translate(35,-65)');

        shanghaiTower.setAttribute('id','shanghaiTower');
        shanghaiTower.className = "st0";
        shanghaiTower.setAttribute('d','M193.4,632v-14.4c0,0,0,0,0,0h5.9c0,0,0,0,0,0v-16c0,0,0,0,0,0h18.8c0,0,0,0,0,0v-11.1c0,0,0,0,0,0h20c0,0,0,0,0,0V252.3c0-3.1-0.5-6.3,2.9-8.6v0c1.6-2.1-0.7-2.6,0,0l5.3-1.8c0,0,1.2,6.3,1.2,6.3l1.6,2.6c0,0,0,0,0,0l19.5,7.9c0,0,3.3,0,3.3,0l9.7,328.6c0,0,0,0,0,0l22.3-0.4c0,0,0,2.5,0,2.5v42.6c0,0-2.7,0-2.7,0L193.4,632C193.4,632,193.4,632,193.4,632z');
        
        text.setAttribute('x','210');
        text.setAttribute('y','220');
        text.setAttribute('font-size','12');
        text.setAttribute('font-family','Verdana');
        text.textContent = "Shanghai Tower";
        
        g.appendChild(text);
        g.appendChild(shanghaiTower)
        svg.appendChild(g);
        
        stID = document.getElementById("shanghaiTower");
        
        stID.addEventListener("mouseover",function(){
            
            showInfo(stInfo,30,400);
        
        },false);
        
        stID.addEventListener("mouseout",function(){
            removeInfo();
        },false);
    };
    
    /**
    * wtcFunc() - Function defining events over svg element
    */
    
    var wtcFunc = function(){
        
        var wtc = document.getElementById('wtc');
        
        wtc.addEventListener("mouseover",function(){
            
            showInfo(wtcInfo,30,500);
        
        },false);
        
        wtc.addEventListener("mouseout",function(){
            removeInfo();
        },false);
    };
    
    /**
    * taipieFunc() - Function defining events over svg element
    */
    
    var taipieFunc = function(){
        
        var taipie = document.getElementById('taipie');
        
        taipei.addEventListener("mouseover",function(){
            
            showInfo(tpInfo,30,600);
        
        },false);
        
        taipei.addEventListener("mouseout",function(){
            removeInfo();
        },false);
    };
    
    /**
    * sfcFunc() - Function defining events over svg element
    */
    
    var sfcFunc = function(){
        
        var sfc = document.getElementById('SFC');
        
        sfc.addEventListener("mouseover",function(){
            
            showInfo(sfcInfo,30,10);
        
        },false);
        
        sfc.addEventListener("mouseout",function(){
            removeInfo();
        },false);
    };
    
    /**
    * iccFunc() - Function defining events over svg element
    */
    
    var iccFunc = function(){
        
        var icc = document.getElementById('ICC');
        
        icc.addEventListener("mouseover",function(){
            
            showInfo(iccInfo,30,30);
        
        },false);
        
        icc.addEventListener("mouseout",function(){
            removeInfo();
        },false);
    };
    
    /**
    * petFunc() - Function defining events over svg element
    */
    
    var petFunc = function(){
        
        var petronas = document.getElementById('petronas');
        
        petronas.addEventListener("mouseover",function(){
            
            showInfo(petInfo,30,150);
        
        },false);
        
        petronas.addEventListener("mouseout",function(){
            removeInfo();
        },false);
        
    };
    
    /**
    * zfFunc() - Function defining events over svg element
    */
    
    var zfFunc = function(){
        
        var zigfeng = document.getElementById('zigfeng');
        
        zigfeng.addEventListener("mouseover",function(){
            
            showInfo(zigInfo,30,300);
        
        },false);
        
        zigfeng.addEventListener("mouseout",function(){
            removeInfo();
        },false);
    };
    
    /**
    * showInfo() - Calls showInfo on mouse over a svg element
    * @param {string} divInfo - Dive info id.
    * @param {integer} top - Number 
    * @param {integer} left - Number
    */
    
    var showInfo = function(divInfo,top,left){
        
        bKDiv = document.createElement("div");                  // Create div on hover
        bKDiv.style.top = top + "px";                           // Set top and left
        bKDiv.style.left = left + "px";     
        bKDiv.className = "bKStyle";                            // set class
        divInfo.style.display = "block";
        bKDiv.appendChild(divInfo);
        document.body.appendChild(bKDiv);
    };
    
    /**
    * removeInfo() - Calls removeInfo on mouse out.
    */
    
    var removeInfo = function(){
        
        document.body.removeChild(bKDiv);       //Remove div on mouse out
    };
    
    
    return{init:init};
    
})();

modules.init();