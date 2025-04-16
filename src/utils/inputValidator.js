const inputValidator = (e, setRawInput) => {
    const value = e.target.value;
    const re = /^-?\d*$/;

    if (re.test(value))
        setRawInput(value);

};

export default inputValidator;