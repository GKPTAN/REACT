import Button from "./events/Button";

function Evento(){

    function meuEvento() {
        console.log(`Ativando primeiro evento!`);
    };

    function segundoEvento() {
        console.log('ativando segundo evento!');
    };

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento