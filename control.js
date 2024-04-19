AFRAME.registerComponent("ship-rotation",{
    schema:{
        speedOfRotation : {type : "number", default : 0},
        speedOfAscent : {type : "number", default : 0}
    },

    init : function(){
        window.addEventListener("keydown",(e)=>{
            this.data.speedOfRotation = this.el.getAttribute("rotation")
            this.data.speedOfAscent = this.el.getAttribute("position")

            var planeRotation = this.data.speedOfRotation

            if (e.key === "ArrowRight"){
                if (planeRotation.z > -10){
                    planeRotation.z -= 0.5
                    this.el.setAttribute("rotation", planeRotation)
                }
            }

            if (e.key === "ArrowLeft"){
                if (planeRotation.z < 10){
                    planeRotation.z += 0.5
                    this.el.setAttribute("rotation", planeRotation)
                }
            }

            if (e.key === "ArrowUp"){
                if (planeRotation.x < 10){
                    planeRotation.x += 0.5
                    this.el.setAttribute("rotation", planeRotation)
                }
            }

            if (e.key === "ArrowDown"){
                if (planeRotation.x > -10){
                    planeRotation.x -= 0.5
                    this.el.setAttribute("rotation", planeRotation)
                }
            }
        })
    }
})


AFRAME.registerComponent("terrain-rotation",{
    schema:{
        speedOfRotation: {type : "number", default : 0},
        speedOfAscent : {type : "number", default : 0}
    },
    init : function(){

        //this.data.speedOfAscent= this.el.getAttribute("position")

        window.addEventListener("keydown",(e)=>{
            if(e.key === "ArrowRight"){
                if(this.data.speedOfRotation < 0.1){
                    this.data.speedOfRotation += 0.01
                }
            }
            if(e.key === "ArrowLeft"){
                if (this.data.speedOfRotation > -0.1){
                    this.data.speedOfRotation -= 0.01
                }
            }
            
            if(e.key === "ArrowDown"){
                if (this.data.speedOfAscent < 80){
                    this.data.speedOfAscent += 2
                    //this.el.setAttribute("position", this.data.speedOfAscent)
                }
            }
            if(e.key === "ArrowUp"){
                if (this.data.speedOfAscent > 0){
                    this.data.speedOfAscent -= 2
                    //this.el.setAttribute("position", this.data.speedOfAscent)
                }
            }
        })
    },
    tick : function(){
        var mapRotation = this.el.getAttribute("rotation")
        mapRotation.y += this.data.speedOfRotation
        this.el.setAttribute('rotation',{
            x : mapRotation.x,
            y : mapRotation.y,
            z : mapRotation.z
        })

        var mapPosition = this.el.getAttribute("position")
        mapPosition.y += this.data.speedOfAscent
        this.el.setAttribute("position",{
            x:mapPosition.x,
            y:mapPosition.y,
            z:mapPosition.z
        })
    }
})