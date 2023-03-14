 
const sectionSeleccionarAtaque = document.getElementById
  ('Seleccionar_Ataque')
 const sectionVidasMascotas = document.getElementById
 ('section_vidas_mascota')
 const sectionCombate = document.getElementById('seccion_Combate')
 const sectionReiniciar = document.getElementById('reiniciar')
 const botonMascota = document.getElementById('boton_Mascota')



 
 

 const sectionSeleccionarMascota = document.getElementById("seleccionar_Mascota")


 let spanMascotaJugador = document.getElementById('mascota_jugador')

 let spanMascotaEnemigo = document.getElementById('mascota_enemigo')

 const sectionMensaje = document.getElementById('resultado')
 const ataques_Del_Jugador = document.getElementById('ataques_Del_Jugador')
 const ataques_Del_Enemigo = document.getElementById('ataques_Del_Enemigo')

 let  spanVictoriasJugador = document.getElementById('victorias_jugador') 
 let spanVictoriasEnemigo = document.getElementById('victorias_enemigo') 

 const botonReiniciar = document.getElementById('boton_reiniciar') 

const contenedorTarjetas = document.getElementById('contenedorTarjetas') 


const contenedorAtaques = document.getElementById('contenedorAtaques')


const sectionVerMapa = document.getElementById('ver_mapa')
const mapa = document.getElementById('mapa')

let botonTierra
let botonFuego 
let botonAgua 
let botones = []
let Mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let ataquesMokeponEnemigo = []
let opcionDeMokepones
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let vidasJugador = 3
let vidasEnemigo = 3
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasEnemigo = 0
let victoriasJugador = 0
let lienzo = mapa.getContext('2d')
let imagenDeCapipepo = new Image()
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = './assets/mapa_mokepon.webp'
let mascotaEnemigo
let alturaQueBuscamos 
let anchoDelMapa = window.innerwith - 20
let mascotaEnemigoObjeto
const anchoMaximoDelMapa = 350

let jugadorId = null

if (anchoDelMapa > anchoMaximoDelMapa){
  anchoDelMapa = anchoMaximoDelMapa - 20
}


mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

alturaQueBuscamos = anchoDelMapa * 600 / 800



class Mokepon{
  constructor(nombre, foto, vida, fotoMapa, id = null){  
         this.id = id
         this.nombre = nombre
         this.foto = foto
         this.vida = vida
         this.ataques = []
         this.x = aleatorio(0,1280)
         this.y = aleatorio(0,960)
         this.ancho = 80
         this.alto = 80
         this.mapaFoto = new Image()
         this.mapaFoto = new Image()
         this.mapaFoto.src = foto
         this.velocidadX = 0
         this.velocidadY = 0
} 
 pintarMokepon(){
  lienzo.drawImage(mascotaJugadorObjeto.mapaFoto,
    this.x,
     this.y,
    this.ancho,
    this.alto
  )
  
}
pintarMokeponEnemigoC(){ 
lienzo.drawImage(CapipepoEnemigo.mapaFoto,
  this.x,
   this.y,
  this.ancho,
  this.alto
) }
pintarMokeponEnemigoR() { 
  lienzo.drawImage(RatigueyaEnemigo.mapaFoto,
    this.x,
     this.y,
    this.ancho,
    this.alto
  )
}
pintarMokeponEnemigoH(){ 
  lienzo.drawImage(HipodogeEnemigo.mapaFoto,
    this.x,
     this.y,
    this.ancho,
    this.alto
  )
  }
   }
     

  

let Hipodoge = new Mokepon('Hipodoge',  './assets/mokepons_mokepon_hipodoge_attack.png ',5, './assets/mokepons_enemigo_mokepon_hipodoge_attack.png ')
let Capipepo = new Mokepon('Capipepo',  './assets/mokepons_mokepon_capipepo_attack.png ', 5, './assets/mokepons_enemigo_mokepon_capipepo_attack.png ' )
let Ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png ', 5, './assets/mokepons_enemigo_mokepon_ratigueya_attack.png ')


let HipodogeEnemigo = new Mokepon('Hipodoge',  './assets/mokepons_mokepon_hipodoge_attack.png ',5, './assets/mokepons_enemigo_mokepon_hipodoge_attack.png ')
let CapipepoEnemigo = new Mokepon('Capipepo',  './assets/mokepons_mokepon_capipepo_attack.png ', 5, './assets/mokepons_enemigo_mokepon_capipepo_attack.png ' )
let RatigueyaEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png ', 5, './assets/mokepons_enemigo_mokepon_ratigueya_attack.png ')






Hipodoge.ataques.push(
 
  { nombre: '💧', id: 'boton_agua' },
  { nombre: '💧', id: 'boton_agua' },
  { nombre: '💧', id: 'boton_agua' },
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '🏔️', id: 'boton_tierra' },
)

HipodogeEnemigo.ataques.push(
 
  { nombre: '💧', id: 'boton_agua' },
  { nombre: '💧', id: 'boton_agua' },
  { nombre: '💧', id: 'boton_agua' },
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '🏔️', id: 'boton_tierra' },
)

Capipepo.ataques.push(
 
  { nombre: '🏔️', id: 'boton_tierra' },
  { nombre: '🏔️', id: 'boton_tierra' },
  { nombre: '🏔️', id: 'boton_tierra' },
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '💧', id: 'boton_agua' },) 
  CapipepoEnemigo.ataques.push(
 
  { nombre: '🏔️', id: 'boton_tierra' },
  { nombre: '🏔️', id: 'boton_tierra' },
  { nombre: '🏔️', id: 'boton_tierra' },
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '💧', id: 'boton_agua' },
)

Ratigueya.ataques.push(
 
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '💧', id: 'boton_agua' },
  { nombre: '🏔️', id: 'boton_tierra' },
)
RatigueyaEnemigo.ataques.push(
 
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '🔥', id: 'boton_fuego' },
  { nombre: '💧', id: 'boton_agua' },
  { nombre: '🏔️', id: 'boton_tierra' },
)



Mokepones.push(Hipodoge, Capipepo, Ratigueya)

function iniciarJuego(){

 
 
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    Mokepones.forEach((mokepon) => {
    opcionDeMokepones = ` <input type= "radio"  id =${mokepon.nombre} name = "mascota"/> 
    <label class= "tarjeta_De_Mokepon" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src= ${mokepon.foto}alt=${mokepon.nombre} </label>
    </label>
      ` 
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')





    })
    
    sectionVidasMascotas.style.display = 'none'

   
    sectionCombate.style.display = 'none'

   
    sectionReiniciar.style.display = 'none'

    
    botonMascota.addEventListener('click', seleccionarMascotaJugador)

  unirseAlJuego()  
    

   botonReiniciar.addEventListener('click', reiniciarJuego) 

   
}

function unirseAlJuego() {
   
    fetch("http://localhost:8080/unirse")
    .then(function (res) {
    
    if(res.ok){
     res.text()
     .then(function (respuesta){
       console.log(respuesta)
      jugadorId = respuesta
     })
    }
     })
}

function seleccionarMascotaJugador(){



    sectionVidasMascotas.style.display = 'none'

 
  sectionSeleccionarMascota.style.display = 'none'
  
  
  sectionReiniciar.style.display = 'none'
 
  
  sectionSeleccionarAtaque.style.display = 'none'
   
   
    sectionCombate.style.display = 'none'
  


   
    
    
    
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id 
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador= inputRatigueya.id
    } else {
        alert('Selecciona tu mascota')
    }

seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    function extraerAtaques(mascotaJugador) {
      let ataques 
      for (let i = 0; i < Mokepones.length; i++) {
        if (mascotaJugador === Mokepones[i].nombre) {
          ataques = Mokepones[i].ataques
        }
        
      }
      
      mostrarAtaques(ataques)
    }

    function mostrarAtaques(ataques) {
            ataques.forEach((ataque) => {
              ataquesMokepon = `
              <button id=${ataque.id} class="boton_ataque BAtaque"> ${ataque.nombre} 
              </button>
              `
            contenedorAtaques.innerHTML += ataquesMokepon
            })

             botonFuego = document.getElementById('boton_fuego')
             botonAgua =  document.getElementById('boton_agua')
             botonTierra = document.getElementById('boton_tierra')
             botones = document.querySelectorAll(".BAtaque")

             
    }
  function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mokepon: mascotaJugador
      })
        }) 
  }  

      function secuenciaAtaque() {
         botones.forEach ((boton) => {
          boton.addEventListener('click', (e) => {
            if (e.target.textContent === ' 🔥 \n              '){
                  ataqueJugador.push('FUEGO')
                  console.log(ataqueJugador)
                  boton.style.background = '#112f58'
                  boton.disabled = true
          } else if (e.target.textContent === ' 💧 \n              ') {
            ataqueJugador.push('AGUA')
            console.log(ataqueJugador)
            boton.style.background = '#112f58'
            boton.disabled = true
          }  else  {
            ataqueJugador.push('TIERRA')
            console.log(ataqueJugador)
            boton.style.background = '#112f58'
            boton.disabled = true
          }
          ataqueAleatorioEnemigo()
          
          iniciarPelea()
          })
         })
      } 
       
function iniciarPelea(){
  if (ataqueJugador.length === 5){
     combate()
    
     

  }
}


    
    secuenciaAtaque()
      }

      
      
      function seleccionarMascotaEnemigo(enemigo) {
        spanMascotaEnemigo.innerHTML = enemigo.nombre
        ataquesMokeponEnemigo = enemigo.ataques
        
        }

      
       


      function ataqueAleatorioEnemigo() {
        let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)
        if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
         ataqueEnemigo.push ('FUEGO')
        } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
          ataqueEnemigo.push ('AGUA')
        } else {
               ataqueEnemigo.push ('TIERRA')
        }
       
    
            
     }

      
   
function crearMensaje(resultado) {
   

let nuevo_Ataque_Del_Jugador = document.createElement('p')
let nuevo_Ataque_Del_Enemigo = document.createElement('p')

sectionMensaje.innerHTML = resultado
nuevo_Ataque_Del_Jugador.innerHTML = indexAtaqueJugador
nuevo_Ataque_Del_Enemigo.innerHTML= indexAtaqueEnemigo


ataques_Del_Jugador.appendChild(nuevo_Ataque_Del_Jugador)
ataques_Del_Enemigo.appendChild(nuevo_Ataque_Del_Enemigo)


        }

        function crearMensajeFinal(resultadoFinal) {
         
          let parrafo = document.createElement('p')
                  parrafo.innerHTML = resultadoFinal
              sectionMensaje.appendChild(parrafo)
              alert('')
              }

              function indexAmbosOponente(jugador, enemigo){
                indexAtaqueJugador = ataqueJugador[jugador]
                indexAtaqueEnemigo = ataqueEnemigo[enemigo]
              }

    function combate () {
  

      for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
          indexAmbosOponente(index, index)
        crearMensaje("EMPATE")
        
        } else if (ataqueJugador[index] === 'FUEGO'  && ataqueEnemigo
          [index]  === 'TIERRA' ) {

            indexAmbosOponente (index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
          } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo
          [index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje ('GANASTE')
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
          } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo
          [index] === 'AGUA'){
            indexAmbosOponente(index, index)
            crearMensaje ('GANASTE')
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
          } else {
            indexAmbosOponente(index, index)
            crearMensaje('PERDISTE')
            victoriasEnemigo++
            spanVictoriasEnemigo.innerHTML = victoriasEnemigo
          }
      }
        
        revisarVidas()
    }

    function revisarVidas(){
      if(victoriasEnemigo > victoriasJugador ){
         alert('LO SIENTO, HAS PERDIDO')
         
      } else if (victoriasJugador > victoriasEnemigo){
         alert('Felicitaciones, HAS GANADO!!')
         
      }
    }

function reiniciarJuego (){
  location.reload()
}


function aleatorio_enemigo(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)

}

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    
}

   function pintarCanvas() { 
   
    mascotaJugadorObjeto.x =  mascotaJugadorObjeto.x +  mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y =  mascotaJugadorObjeto.y +  mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height) 
    lienzo.drawImage(mapaBackground,
      0,
      0,
      mapa.width,
      mapa.height
    )


    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
    mascotaJugadorObjeto.pintarMokepon()
 HipodogeEnemigo.pintarMokeponEnemigoH()
 CapipepoEnemigo.pintarMokeponEnemigoC()
 RatigueyaEnemigo.pintarMokeponEnemigoR()
 if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
  revisarColision(HipodogeEnemigo)
  revisarColision(CapipepoEnemigo)
  revisarColision(RatigueyaEnemigo)
 }

   
  }

   
  
  
function enviarPosicion(x, y) {
  fetch(`http://localhost:8080/mokepon/:${jugadorId}/posicion`,{   
   method: "post",
  headers: {
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    x,
    y 
  })

})

  
   .then(function (res){
    if (res.ok) {
      res.json()
      .then(function({ enemigos }){
        console.log(enemigos)
       
        enemigos.forEach(function (enemigo) {
          let mokeponEnemigo = null 
          if (enemigo.mokepon !== undefined){  
          const mokeponNombre = enemigo.mokepon.nombre || " "
          if(mokeponNombre === "Hipodoge"){
             mokeponEnemigo = new Mokepon('Hipodoge',  './assets/mokepons_mokepon_hipodoge_attack.png ',5, './assets/mokepons_enemigo_mokepon_hipodoge_attack.png ')
          } else if (mokeponNombre === "Capipepo"){ 
             mokeponEnemigo = new Mokepon('Capipepo',  './assets/mokepons_mokepon_capipepo_attack.png ', 5, './assets/mokepons_enemigo_mokepon_capipepo_attack.png ')
          } else if (mokeponNombre === "Ratigueya") {
             mokeponEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png ', 5, './assets/mokepons_enemigo_mokepon_ratigueya_attack.png ')

          }
          
          mokeponEnemigo.x = enemigo.x
          mokeponEnemigo.y = enemigo.y
       
          mokeponEnemigo.pintarMokepon() 
        }
        })
      
      
        

      })
    }  }
   )
  
     }   function moverDerecha() {
   
    mascotaJugadorObjeto.velocidadX =  5
    pintarCanvas()
   }
   function moverIzquierda(){
    
    mascotaJugadorObjeto.velocidadX = -5
    pintarCanvas()
   }

   function moverArriba(){
    
    mascotaJugadorObjeto.velocidadY = -5
    pintarCanvas()
   }
   function moverAbajo(){
   
    mascotaJugadorObjeto.velocidadY =   5
    pintarCanvas()
   }

   function detenerMovimiento(){
    
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0

   }

   function sePresionaUnaTecla(event) {
    switch (event.key) {
      case 'ArrowUp':
           moverArriba()
        break
      case 'ArrowDown':
        moverAbajo()
        break
        case 'ArrowRight':
        moverDerecha()
        break
        case 'ArrowLeft':
        moverIzquierda()
        break
      default:
        break;
    }
   }

    function iniciarMapa(){
      mapa.width = 1600
      mapa.height = 900
      mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugadorObjeto)
      
      intervalo = setInterval(pintarCanvas, 50)
      window.addEventListener('keydown', sePresionaUnaTecla)

      window.addEventListener ('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
  for (let i = 0; i < Mokepones.length; i++) {
    if (mascotaJugador === Mokepones[i].nombre) {
      return Mokepones[i]
    }
    
}

  }
 function revisarColision(enemigo) {


  const arribaEnemigo = enemigo.y
  const abajoEnemigo = enemigo.y + enemigo.alto
  const derechaEnemigo = enemigo.x + enemigo.ancho
  const izquierdaEnemigo = enemigo.x


  const arribaMascota = mascotaJugadorObjeto.y
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
  const izquierdaMascota = mascotaJugadorObjeto.x



  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo 
  ) {
    return
  }
  
  detenerMovimiento()
  clearInterval(intervalo)
  sectionVerMapa.style.display = 'none'
alert('Hay colision con ' + enemigo.nombre)
sectionSeleccionarAtaque.style.display = 'flex'
sectionVidasMascotas.style.display = 'flex'
sectionReiniciar.style.display = 'flex'
seleccionarMascotaEnemigo(enemigo)
 
}


window.addEventListener('load', iniciarJuego)