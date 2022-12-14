import PropTypes from 'prop-types';


User.propTypes = { //isRequired -> 필수값
    male : PropTypes.bool.isRequired,
    //age : PropTypes.number,
    age : function (props, propName, componentName) {
        const value = props[propName];
        if (value < 10 || value > 20) {
            return new Error(
                `Invalid prop ${propName} supplied to ${componentName}.
                It must be 10 <= value <=20.`,
            )
        }
    },
    type : PropTypes.oneOf(['gold', 'silver', 'bronze']),
    onChangeName : PropTypes.func, //{name : string} => void (이런식으로 적어주면 사용하는 사람이
    onChangeTitle : PropTypes.func.isRequired,
};

export default function User({ type, age, male, onChangeName, onChangeTitle}) {
    function onClick1() {
        const message = `type: ${type}, age : ${age ? age : '알수 없음'}`;
        console.log(message, {color: type === 'gold' ? 'red' : 'black'});
        // ...
    }

    function onClick2 (name, title) {
        if (onChangeName) {
            onChangeName(name);
        }
        onChangeTitle(title);
        male ? goMalePage() : goFemalePage();
    }

    return null;
}

function goMalePage() {}
function goFemalePage() {}