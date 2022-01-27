import style from "../../../src/components/sign/style/spinner.module.css"

export default function Spinner() {
    return(
           <>
               <div className={style.lds_dual_ring}></div>
           </>
    )
}