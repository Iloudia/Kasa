
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import banner from '../../assets/apropos-banner.jpg';
import './Propos.css';

export default function Propos() {
  const [openFidelite, setOpenFidelite] = useState(false);
  const [openRespect, setOpenRespect] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);

  return (
    <div>
      <div className="header-img">
        <img
          src={banner}
          alt="Bannière À propos"
          className="propos-banner"
        />
      </div>
      <div className="propos">

        <div className="depliant">

          <div className="depliant-item">
            <div
              className="depliant-header"
              onClick={() => setOpenFidelite(!openFidelite)}
            >
              <span className='titre'>Fiabilité</span>
              {openFidelite ? <FiChevronDown /> : <FiChevronUp />}
            </div>
            {openFidelite && (
              <div className="depliant-text">
                <p>
                  Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
              </div>
            )}
          </div>

          <div className="depliant-item">
            <div
              className="depliant-header"
              onClick={() => setOpenRespect(!openRespect)}
            >
              <span>Respect</span>
              {openRespect ? <FiChevronDown /> : <FiChevronUp />}
            </div>
            {openRespect && (
              <div className="depliant-text">
                <p>
                  La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </p>
              </div>
            )}
          </div>

          <div className="depliant-item">
            <div
              className="depliant-header"
              onClick={() => setOpenService(!openService)}
            >
              <span>Service</span>
              {openService ? <FiChevronDown /> : <FiChevronUp />}
            </div>
            {openService && (
              <div className="depliant-text">
                <p>
                  La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                </p>
              </div>
            )}
          </div>
          
          <div className="depliant-item">
            <div
              className="depliant-header"
              onClick={() => setOpenSecurity(!openSecurity)}
            >
              <span>Sécurité</span>
              {openSecurity ? <FiChevronDown /> : <FiChevronUp />}
            </div>
            {openSecurity && (
              <div className="depliant-text">
                <p>
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
);
}