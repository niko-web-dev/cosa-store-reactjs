import { Offer, Collection, About, Subscription, Footer } from '../index'

const IndexPage = ({ items }) => {
        return (
            <>

                <Offer/>
                <Collection items={items}/>
                <About/>
                <Subscription/>
                <Footer/>
            </>
        )
}

export default IndexPage