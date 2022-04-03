const helper=require('./helper.js');
const ImageArea=(props)=>{
    return (
        <img src="/assets/img/ununun.png" alt="ununun" />
    );
}
const init = async () => {
    const response = await fetch('/getToken');
    const data = await response.json();
    ReactDOM.render(
        <ImageArea csrf={data.csrfToken} />,
        document.getElementById('content')
    );
}
window.onload=init;