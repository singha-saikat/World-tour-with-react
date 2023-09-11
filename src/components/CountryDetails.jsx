
const CountryDetails = (props) => {
    const { country } = props
    return (
        <div>
            <h4>Country Detail:</h4>
            <p>name: {country.name.common}</p>
        </div>
    );
};

export default CountryDetails;