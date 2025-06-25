import React from 'react'
import styles from './TagList.module.css'

const exampleTags = [
  'Python',
  'JavaScript',
  'React',
  'React Native',
  'Flutter',
  'Swift',
  'HTML',
];

const TagList = ({
    title="Build anything with the right technology",
    text="We provide flexible software solutions using modern programming languages and frameworks tailored to your business needs.",
    tags=exampleTags
}) => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.trainContainer}>
            <div className={styles.trainLeft}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <div className={styles.trainRight}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
            </div>
        </div>
        
    )
}

export default TagList