import React from 'react';

import './styles.css';

function CuidadorList({ props }) {
    console.log("meu elemnto: ",props)
    return (
        <article className="cuidador-item">
            <header>
                <img src="https://onlinedoctor.com.br/wp-content/uploads/2019/10/clinica-e-consultorios-online-doctor-gestao-proposta-min-min.png" alt="Doctor X" />

                <div>
                    <strong>{props.firstName}</strong>
                    <span>{props.lastName}</span>
                </div>
            </header>
            <p>
                CFM: {props.Doc}.
            <br />
            Médica Acupunturista e Clinica da Dor. Atendo pela Clínica Shiatsu.
        </p>

            <footer>
                <p>
                    <strong>Código: 4F87GF</strong>
                </p>
            </footer>
        </article>
    );
}

export default CuidadorList;