import { StyledFilter } from "./style"

export const Filter = ({filter, setFilter}) => {
    return(
        <StyledFilter className="filter">
            <h2>Filtrar</h2>
            <div className="filterOptions">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="completed">Completas</option>
                        <option value="inCompleted">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabetica</p>
                    <button>Asc</button>
                    <button>Desc</button>
                </div>
            </div>
        </StyledFilter>
    )
}