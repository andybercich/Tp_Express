import styles from "./Close.module.css"

interface IClose{
  close: (value: boolean) => void;
}

export const Close = ({close} : IClose) => {
  return (
    <span onClick={()=>{close(false)}} className={`material-symbols-outlined ${styles.icono}`}>
        close
    </span>
  )
}
