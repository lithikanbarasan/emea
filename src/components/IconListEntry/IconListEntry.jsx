import React from 'react'
import DocumentIcon from '../../assets/ListEntryIcons/DocumentIcon.svg'
import styles from './IconListEntry.module.css'

/*
React component of a simple icon at left of two text components
Top text is bolded and serves as the main point while the bottom is unbolded and is the subtext
*/
const IconListEntry = ({
    icon=DocumentIcon,
    text='default text',
    subtext='default subtext',
    textColor = '#0061f2'
}) => {
    const style = {
        '--textTop-color': textColor
    }
    return (
        // Grouping div of icon & text section
        <div className={styles.iconListEntry} style={style}>
            <img                    // Define the image
            src={icon}              // Icon source
            alt="IconListEntry"     // Alternative text
            className={styles.icon} // Define styling for the image
            />
            <div className={styles.text}>
                <div className={styles.textTop}>
                    {text}
                </div>
                <div className={styles.textBottom}>
                    {subtext}
                </div>
                
            </div>
            
            
        </div>
    )
}

export default IconListEntry