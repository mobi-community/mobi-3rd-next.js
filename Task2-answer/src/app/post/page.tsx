export default function Post() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(<main>POST</main>), 3000)
  );
}
