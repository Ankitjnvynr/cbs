import { useState } from "react";



const Accordion = () => {
    const [OpenItem, setOpenItem] = useState(null);


    const handleItemClick = (itemId) => {
        setOpenItem(OpenItem === itemId ? null : itemId);
    };

    const AccordionData = [
        {
            id: "heading1",
            title: "Develops essential skills such as leadership,strategic thinking.",
            content: "Pursuing a BBA program cultivates essential skills such as leadership and strategic thinking, preparing students to effectively manage teams and make informed decisions in dynamic business environment."
        },
        {
            id: "heading2",
            title: "Enables engagement in research and development projects.",
            content: "Pursuing an M.Tech degree enables students to engage in advanced research and development projects, contributing to technological advancements and innovation.",
        },
        {
            id: "heading3",
            title: "Equips individuals with managerial and leadership skills.",
            content: "Pursuing an MBA equips individuals with managerial and leadership skills, preparing them for high-level roles across various industries"
        },
        {
            id: "heading4",
            title: "Offers advanced specialization and career prospects in specific technical domains.",
            content: "Pursuing an M.Tech degree offers advanced specialization in technical domains, enhancing career prospects by providing in-depth knowledge and expertise."
        },
    ]


    return (
        <div className="accordion">
            {AccordionData.map((item =>
                <div className="accordion-item" key={item.id} >
                    <h3 className="accordion-header" id={item.id}>
                        <button className={`accordion-button ${OpenItem === item.id ? '' : 'collapsed'}`} type="button" onClick={() => handleItemClick(item.id)}>
                            {item.title}
                        </button>
                    </h3>
                    <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${OpenItem === item.id ? 'show' : ''}`} aria-labelledby={item.id}>
                        <div className="accordion-body">
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Accordion;