import React from 'react';
import './Galeria.css'; // Asegúrate de que la ruta es correcta

import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import CellWifiIcon from '@mui/icons-material/CellWifi';

const Galeria = (props) => {
  console.log(props)
  return (
    <div className='body'>
    <div className='card'>
        <div className='imgBx'></div>
        <div className='content'>
            <span className='price'>
                <a href="https://wa.link/se3b0n">Pedir Catalogo</a>
            </span>
            <ul className='lista-Iconos'>
            
                <li><PeopleOutlineIcon className='iconito'/>{props.capacidad} </li>
                <li><HeatPumpIcon className='iconito'/></li>
                <li><CellWifiIcon className='iconito'/></li>
                

            </ul>
            <p> {props.descripcion} </p>
        </div>
    </div>
    </div>
  );
}

export default Galeria;
