import React from 'react';

import './styles.css';

function CuidadorList({ props }) {
    const { professional } = props;
    
    console.log("meu elemnto: ", props)
    console.log(professional)

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
                <div>Email:</div>
                <div>Profissão:</div>
                    {/* CFM: {props.Doc}. */}
                <div>Telefone:</div>
                <div>Especialidade: Médica Acupunturista e Clinica da Dor. Atendo pela Clínica Shiatsu.</div>
                  
                    
                </p>


            <footer>
                {/* <p>
                    <strong>Código: 4F87GF</strong>
                </p> */}
            </footer>
        </article>
    );
}

export default CuidadorList;