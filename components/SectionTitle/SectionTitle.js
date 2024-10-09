


const SectionTitle = ({title, subtitle, paragarap}) => {

    return(
        <div className="section-title">
            <span>{subtitle}</span>
            <h2>{title}</h2>
            <p>{paragarap}</p>
        </div>
    )
}

export default SectionTitle;