import React from 'react'
import { Link } from "react-router-dom";
import NavbarCliente from '../../Components/NavbarCliente';
import Footer from '../../Components/Footer';

const FormularioCita = () => {
  return (
    <div>
      <NavbarCliente></NavbarCliente>


        <div className="login-box registro">
          <div className="login-logo">
            
        </div>
<br/>

    <div className="card">
      <div className="card-body login-card-body">
        <h5 className="login-box-msg">REGISTRA TU CITA</h5>
        <form action="../../index3.html" method="post">

        <div className="input-group mb-3">
            <input type="number" className="form-control" placeholder="Número de Documento" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-id-card" />
              </div>
            </div>
          </div>

    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Nombre" />
        <div className="input-group-append">
          <div className="input-group-text">
          <span class="fas fa-user"></span>
          </div>
        </div>
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Apellido" />
        <div className="input-group-append">
          <div className="input-group-text">
          <span class="fas fa-user"></span>
          </div>
        </div>
      </div>


      <div className="input-group mb-3">
        <input type="email" className="form-control" placeholder="Correo" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-envelope" />
          </div>
        </div>
      </div>


      
      <div className="input-group mb-3">
            <input type="date"  id=""className="form-control" placeholder="Fecha  de cla cita" />
            <div className="input-group-append">
              
            </div>
          </div>
      
          <div className="input-group mb-3">
            <input type="time"  id=""className="form-control" placeholder="Hora  de cla cita" />
            <div className="input-group-append">
             
            </div>
          </div>

        <div className="input-group mb-3">
            <input type="number" className="form-control" placeholder="Número de Autorizacion" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-id-card" />
              </div>
            </div>
        </div>
          
    </form>
    <div className="social-auth-links text-center mb-3">
      <Link to={"#"} className="btn btn-flex btn-primary md-2 ml-2 p-2">
        <i className="fab mr-2" /> INGRESAR    
      </Link>
      
      <Link to={"#"} className="btn btn-flex btn-danger md-2 ml-2 p-2">
        <i className="fab mr-2 " /> CREAR CUENTA    
      </Link>
        </div>
      </div>
    </div>
    </div>

    <br>
    </br>
    <br>
    </br>

    <Footer></Footer>

    </div>
  )
}

export default FormularioCita