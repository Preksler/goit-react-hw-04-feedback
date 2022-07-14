import PropTypes from 'prop-types';
import style from './Section.module.css'

const Section = ({ title, children }) => {
    return (
        <section className={style.section}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}

Section.propType = {
    title: PropTypes.string,
    children: PropTypes.object.isRequired,
}

export default Section;