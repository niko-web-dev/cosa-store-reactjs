import Offer from "./offer"
import Collection from "./collection"
import About from "./about"
import Subscription from "./subscription"
import Footer from "./footer"

const IndexPage = ({ items }) => {

        return (
            <>

                <Offer/>
                <Collection items={items}/>
                {/*<About/>*/}
                {/*<Subscription/>*/}
                {/*<Footer/>*/}
            </>
        )
}

export default IndexPage