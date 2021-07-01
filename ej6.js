let autos = require("./autos");


let concesionaria = {
    autos: autos,

    buscarAuto: function(patente) {
        for (let i = 0; i <= autos.length; i++) {
            if (autos[i].patente == patente) {
                return autos[i]
            } else { return null }
        }
    },

    venderAuto: function(patente) {
        aVender = this.buscarAuto(patente);
        for (let i = 0; i <= autos.length; i++) {
            if (autos[i].patente == patente) {
                autos[i].vendido = true;
                return aVender
            } 
        }
    },

    autosParaLaVenta: function() {
        enVenta = autos.filter(
            function(item) {
                return item.vendido == false;
            }
        )
        return enVenta
    },
        autosNuevos: function() {
            autos0KM = this.autosParaLaVenta().filter(function(item) {
                if( item.km < 100)   {
                    return item.km < 100
                }
                else {return null} 
            })
            return autos0KM
        },
        listaDeVentas: function(){
            let listaPrecios =[];
            enVenta = autos.filter(
                function(item) {
                    return item.vendido == true;
                }
            )
            for (let i = 0; i < enVenta.length; i++) {
                   listaPrecios.push(enVenta[i].precio);

            }
            return listaPrecios
        },
        totalDeVentas: function(){
          let total = 0;
          if(this.listaDeVentas().length>0){
            total = this.listaDeVentas().reduce(function(acum,sum){
              return acum+sum;
            })
        }

            return total
        },


        /*puedeComprar: function (autoAVender, persona){
        persona={
            nombre: "Juan",
            capacidadDePagoEnCuotas: 20000,
            capacidadDePagoTotal: 100000
            }
            autoAVender=autos
            //console.log (puedeComprar)
           
            if((persona.capacidadDePagoTotal<=100000 && persona.capacidadDePagoEnCuotas<=20000 )&&(autos.precio <=100000 && autos.cuotas<=12)){
                return true}
               
           
            },
            
           
        }*/
       
            
      
    
      
        puedeComprar: function (autoAVender, persona){
             
      persona = {
        nombre : "Juan",
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 100000
        },
        module.exports = persona;

        puedeComprar =function(personaCompra,autoAVender){
            //console.log(personaCompra.capacidadDePagoEnCuotas)
                //console.log(personaCompra.autoAVender.cuotas)
    
                if((personaCompra.capacidadDePagoEnCuotas * autoAVender.cuotas) > autoAVender.precio && personaCompra.capacidadDePagoTotal >= autoAVender.precio ){
                   //console.log("entro")
                    return true;
                }
                else {return false}
    
            }}
     
        }
