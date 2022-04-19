
function IndicadorHora(props){
    if(props < 12){
        return('AM');
    }else{
        return('PM');
    }

    
}

export default IndicadorHora;