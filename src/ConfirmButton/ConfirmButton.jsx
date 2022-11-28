import React, {useState} from "react";

/*class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed : false,
        };

        //this.handleConfirm = this.handleConfirm.bind(this);
    }


    /!*
    * 1. bind 함수로 만든 event listener*!/
    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmedm,
    //     }));
    // }

    /!*
    * 2. arrow function 으로 만든 event listener*!/
    // handleConfirm = () => {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}*/

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    /*
    * 3. function 형으로 만든 event listener*/
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };
    
    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인" : "확인하기"}
        </button>
    )
}



export default ConfirmButton;