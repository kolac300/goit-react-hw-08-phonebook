const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 200,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <em>W</em>
        <em>E</em>
        <em>L</em>
        <em>C</em>
        <em>O</em>
        <em>M</em>
        <em>E</em>
      </h1>
    </div>
  );
}
