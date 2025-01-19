import style from './Section.module.css';

export default function Section({ data }) {
    return (
        <div className={style.section}>
            <div className={style.sectionBody}>
                <h5>{data.status}</h5>
                <p>{data.total}</p>
            </div>
        </div>
    );
}
