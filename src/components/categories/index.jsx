import './categories.sass'

const Categories = ({ categories, setFilter }) => {

    return (

        <div className="filters ">
            <button
                id="all"
                data-filter="all"
                onClick={() => setFilter("all")}
            >
                    Все
            </button>
            {categories.map( item => {
                return  (
                    <button
                        key={item.id}
                        id={item.id}
                        datafilter={item.datafilter}
                        onClick={() => setFilter(item.datafilter)}
                    >
                         {item.name}
                    </button>
                )

            })}
        </div>
    )
}

export default Categories