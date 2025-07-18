import styles from './TestComponent.module.css';

export const TestComponent = () => {
  return (
    <div className={styles.testComponent}>
      <h1 className={styles.title}>Test Component</h1>
      <p className={styles.description}>This is a test component using CSS modules.</p>
    </div>
  );
};

export default TestComponent;
