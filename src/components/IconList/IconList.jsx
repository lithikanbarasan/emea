import React from 'react'
import IconListEntry from "../IconListEntry/IconListEntry";
import styles from './IconList.module.css'

/*
Defines a list of IconListEntry items. IconListEntry items are defined as

{
icon,
text,
subtext
}

with an array of these creating the IconList component
*/

const IconList = ({
    title="Example Title",
    textColor='#0061f2',
    listItems=[],
}) => {
    return (
        <div>
            <div className={styles.title}>
                {title}
            </div>
            <div>
                {listItems.map(item =>
                    <IconListEntry
                        text={item.text}
                        subtext={item.subtext}
                        icon={item.icon}
                        textColor={textColor}
                    />
                    )
                }
            </div>
            
        </div>
    )
}

export default IconList
