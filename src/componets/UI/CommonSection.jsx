import { Container } from "reactstrap";
import '../../styles/CommonSection.css'
export default function CommoSection({title}) {
    return(
        <section className="commo__section">
            <Container className="text-center">
                <h1>
                    {title}
                </h1>
            </Container>
        </section>
    )
}