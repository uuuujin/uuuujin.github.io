import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다."    },
    {
        id : 2,
        message: "점심식사 시간입니다."    },
    {
        id : 3,
        message: "이제 곧 미팅이 시작됩니다."    },
];
// const reservedNotifications = [
//     {        message: "안녕하세요, 오늘 일정을 알려드립니다."    },
//     {        message: "점심식사 시간입니다."    },
//     {        message: "이제 곧 미팅이 시작됩니다."    },
//     {        message: "why"    },
//     {        message: "왜 안돼!"    },
//     {        message: "외 않되"    },
//     {        message: "왜 2개씩 뜨는 걸까?"    },
//     {        message: "이유를 모르겠다."    },
// ];

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        //state 에 notifications이라는 빈배열을 넣음.
        //이처럼 생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화 함.
        this.state = {
            notifications : [],
        }
    }

    //컴포넌트의 생명주기 함수인 componentDidMount에서는 script의 setInterval 함수를 사용하여, 1초마다 작업을 수행.
    componentDidMount() {
        const { notifications} = this.state;
        timer = setInterval(() => {
            if ( notifications.length < reservedNotifications.length) {
                let index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                })
            } else  {
                this.setState({
                   notifications : []
                });
                clearInterval(timer);
            }
        }, 1500);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((nof, index) => {
                    return <Notification
                        key={nof.id}
                        id={nof.id}
                        message={nof.message}
                        number={index + 1} />
                })}
            </div>
        )
    }
}

export default NotificationList;