import './categories.sass'

const Categories = ({ categories }) => {
    return (

        <div className="filters ">
            <button id="all" data-filter="all">Все</button>
            {categories.map( item => {
                return  (
                    <button
                        key={item.id}
                        id={item.id}
                        datafilter={item.datafilter}>
                         {item.name}
                    </button>
                )

            })}
        </div>
    )
}

export default Categories