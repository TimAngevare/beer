
import Card from 'react-bootstrap/Card';
import './style/Template.css'

export default function Template () {
    return (
        <div style={{ paddingTop: "20%"}}>
            <Card className='card'>
                <Card.Body>
                    <h1>Your personal beer! 🍺</h1>
                </Card.Body>
            </Card>
        </div>
    );
}