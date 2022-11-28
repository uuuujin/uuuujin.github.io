import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="my title...." backgroundColor="#4ea04e">
            <p> 2022-11-24</p>
            <p> react....study...</p>
            <p>여기도 children 임</p>
            <span> 모든게 children</span>
            <table style={{
                border: "2px solid red"
            }}>
                <tr>
                    <td> 하하</td>
                    <td> 하하 2</td>
                </tr>
                <tr>
                    <td> 하하</td>
                    <td> 하하 2</td>
                </tr>
            </table>
        </Card>
    )
}

export default ProfileCard;