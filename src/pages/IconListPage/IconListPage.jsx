import IconList from "../../components/IconList/IconList";
import Graph from "../../assets/IconListPage/Graph.jpg"
import styles from "./IconListPage.module.css"

const IconListPage = ({
    image=Graph, // Image to display next to the list
    title="Example Title",
    textColor='#0061f2',
    listItems=[],
    flipped=false,
}) => {
    return (
        <div className={styles.outerContainer}>
            <div className={`${styles.iconListPage} ${flipped ? styles.flipped : styles.normal}`}>
            <img 
                src={image} 
                className={styles.image}
                alt="IconListPage"
            />
            <div className={styles.list}>
                <IconList 
                listItems={listItems}
                title={title}
                textColor={textColor}
                    />
                </div>

            </div>
        </div>
    )
}

export default IconListPage