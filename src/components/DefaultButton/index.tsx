import styles from './styles.module.css';

type DefaultbuttonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function Defaultbutton({ icon, color = 'green', ...props }: DefaultbuttonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props} >
        {icon}
      </button>
    </>
  );
}
