function Model(prop) {
return(
    <div className= 'model'>
        <p>are you sure?</p>
        <button className= 'btn btn--alt' onClick={prop.onCli}>cancel</button>
        <button className= 'btn'  onClick={prop.onCli}>confirm</button>

    </div>
);
}

export default Model;
