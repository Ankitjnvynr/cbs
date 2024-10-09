import { useState } from "react";



const Accordion = () => {
    const [OpenItem, setOpenItem] = useState(null);


    const handleItemClick = (itemId) => {
        setOpenItem(OpenItem === itemId ? null : itemId);
    };

    const AccordionData = [
        {
            id: "heading1",
            title: "We Can Save More Lifes With Your Helping Hand.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae.Delectus, maxime."
        },
        {
            id: "heading2",
            title: "Planning can help alleviate workplace stress and increase productivity.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae.Delectus, maxime."
        },
        {
            id: "heading3",
            title: "Those who experiment the most, are able to innovate the best.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae.Delectus, maxime."
        },
        {
            id: "heading4",
            title: "Understand Your Problem, You must understand the issue.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae.Delectus, maxime."
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