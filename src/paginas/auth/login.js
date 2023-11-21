import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import axios from 'axios';

const Login2 = () => {
    return (
      <div>
        <Navbar></Navbar>
      
      <div class="login">
        <div className="login-box">
  <div className="login-logo">
    
  </div>
  <br/>
  
  <div className="card">
    <div className="card-body login-card-body">
      <h5 className="login-box-msg">BIENVENIDO A TU DOCTOR ONLINE</h5>
      <form >

        
        <div className="input-group mb-3">
          <input type="email" 
          className="form-control" 
          placeholder="Correo" 
          id="correo"
          name="correo"
          
          required
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" 
          className="form-control" 
          placeholder="Contraseña" 
          id="contraseña"
          name="contraseña"
          required
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        
      </form>
      <div className="social-auth-links text-center mb-3">
        <Link to="" className="btn btn-flex btn-primary md-2 ml-2 p-2">
          <i className="fab mr-2" /> INGRESAR    
        </Link>
        
        <Link to= '' className="btn btn-flex btn-danger md-2 ml-2 p-2">
          <i className="fab mr-2 " /> CREAR CUENTA    
        </Link>
      </div>
    </div>
  </div>
</div>

</div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br />
      

      <Footer></Footer>
</div>

    )
}

export default Login2;