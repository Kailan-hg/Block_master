import React, { Component } from 'react'
import { BoxContainerCards, ClasiCards, Contenedor, BotonX, BoxContentConteiner, BoxTexto, BoxVerMas } from '../style/style'
import { BiSearch, BiPlus } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Description from '../components/Description'


export default class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descripciones: 'none',
            descripcionesPeli: {},
            peli: [],
            filtros: [],
            scroll: 0,
            nameSection: "Todas las peliculas",
            usuario: [],
            encontro: true,
        }
    }
    
    async componentDidMount() {
        this.obtenerApi()
    }
    async obtenerApi() {
        const url = "https://api-block-master.herokuapp.com/Peliculas/"
        const res = await fetch(url)
        const data = await res.json()
        if (this.state.scroll < data.length) {
            data[this.state.scroll].pelis.map((mostrar) => {
                if (this.props.seccion === "mas") {
                    if (mostrar.puntuacion > 7) {
                        this.setState({ peli: this.state.peli.concat(mostrar), nameSection: "Peliculas mas valoradas"})
                    }
                } else if (this.props.seccion === "menos") {
                    if (mostrar.puntuacion < 7) {
                        this.setState({ peli: this.state.peli.concat(mostrar), nameSection: "Peliculas menos valoradas" })
                    }
                } else if (this.props.seccion === "todas") {
                    if(mostrar.puntuacion > 0){
                        this.setState({ peli: this.state.peli.concat(mostrar) })
                }
                }

            })

        }else{

            this.setState({scroll:0})
            this.obtenerApi()

        }
    }
  
    async filtro() {
        const pelis = []
        if (this.props.search !== '') {
            this.state.peli.map((filtra) => {
                const exp = new RegExp(this.props.search, 'i')
                if (exp.test(filtra.titulo)) {
                    pelis.unshift(filtra)
                    this.setState({
                        peli: pelis,
                        encontro:true
                    })
                }else{
                    console.log('hola')
                    this.setState({encontro:false})
                }
            })
        } else {
            this.obtenerApi()
            this.setState({encontro:true})
        }
    }
    description(e) {
        this.setState({
            descripciones: 'flex',
            descripcionesPeli: e
        })
        this.mandarEstado(e)
    }
    mandarEstado(e) {
        if (this.state.descripcionesPeli !== {}) {
            return true
        } else {
            this.descripcion(e)
        }
    }
    borrarDescription() {
        this.setState({
            descripciones: 'none'
        })
    }
    scrollInfinite() {
        const suma = this.state.scroll + 1
        this.setState({
            scroll: suma
        })
        this.obtenerApi()
    }
    render() {
        return (
            <BoxContentConteiner>
                <BoxTexto>
                    <h1 className="p-5 text-left text-light">{this.state.nameSection}</h1>
                </BoxTexto>
                <BoxContainerCards className="mb-5">
                    <button onClick={() => this.filtro()}>
                        <i>
                            <BiSearch />
                        </i>
                    </button>
                    
                    {
                        this.state.encontro === true &&(
                        this.state.peli.map((movie) =>
                            <ClasiCards background={movie.potster} border={movie.color} onClick={() => (this.description(movie))}>
                                <div>
                                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631311329/BlockMaster/Vector_th1qzv.png" alt="" />
                                    <span>{movie.puntuacion}</span>
                                </div>
                            </ClasiCards>
                        ))
                    }
                    {
                        this.state.encontro === true &&(
                            <BoxVerMas type="button" className="text-center justify-content-center align-items-center"  onClick={() => this.scrollInfinite()}>
                                <h1 className="p-5 text-center">Ver mas</h1>
                                <h1 ><BiPlus /></h1>
                            </BoxVerMas>
                            )
                    }
                    {
                        this.state.encontro !== true &&(
                            <BoxContentConteiner>
                                <div>
                                <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631506897/BlockMaster/f_zfhknh.png" alt="" />
                                <h3 className="text-light text-center">No se encontraron resultados para "{this.props.search}" </h3>
                                </div>
                            </BoxContentConteiner>
                        )
                    }
                    {
                        this.mandarEstado !== {} && (
                            <Contenedor descripciones={this.state.descripciones}>
                                <BotonX onClick={() => {this.borrarDescription(); this.obtenerApi()}}><VscChromeClose /></BotonX>
                                <Description key={this.state.descripcionesPeli.titulo} descripcion={this.state.descripcionesPeli} />
                            </Contenedor>
                        )
                    }
                    <mandarEstado />
                </BoxContainerCards>
            </BoxContentConteiner>
        )
    }
}
